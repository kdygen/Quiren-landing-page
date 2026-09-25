import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { disposeObject } from "@/lib/disposeObject";

const DEFAULT_LABELS = { rotate: "Drag to rotate", zoom: "Scroll to zoom", pause: "Pause", play: "Play" };

// Direction along the instrument's length, pointing from the body toward the head.
// The long axis is the principal component of the vertices; the neck end is the
// thinner one, i.e. its vertices sit closer to that axis than the body's do.
function findNeckAxis(object) {
    object.updateMatrixWorld(true);
    const points = [];
    const v = new THREE.Vector3();
    object.traverse((child) => {
        const position = child.isMesh && child.geometry.attributes.position;
        if (!position) return;
        const step = Math.max(1, Math.floor(position.count / 4000));
        for (let i = 0; i < position.count; i += step) {
            points.push(v.fromBufferAttribute(position, i).applyMatrix4(child.matrixWorld).clone());
        }
    });
    if (points.length < 2) return new THREE.Vector3(1, 0, 0);

    const mean = new THREE.Vector3();
    points.forEach((p) => mean.add(p));
    mean.divideScalar(points.length);

    // covariance matrix, then power iteration for its dominant eigenvector
    const c = [0, 0, 0, 0, 0, 0]; // xx, xy, xz, yy, yz, zz
    points.forEach((p) => {
        const x = p.x - mean.x, y = p.y - mean.y, z = p.z - mean.z;
        c[0] += x * x; c[1] += x * y; c[2] += x * z; c[3] += y * y; c[4] += y * z; c[5] += z * z;
    });
    const axis = new THREE.Vector3(1, 1, 1).normalize();
    for (let i = 0; i < 60; i++) {
        axis.set(
            c[0] * axis.x + c[1] * axis.y + c[2] * axis.z,
            c[1] * axis.x + c[3] * axis.y + c[4] * axis.z,
            c[2] * axis.x + c[4] * axis.y + c[5] * axis.z
        ).normalize();
    }

    let min = Infinity, max = -Infinity;
    const along = points.map((p) => {
        const t = v.subVectors(p, mean).dot(axis);
        min = Math.min(min, t);
        max = Math.max(max, t);
        return t;
    });
    const spreadNear = (inEnd) => {
        let sum = 0, n = 0;
        points.forEach((p, i) => {
            if (!inEnd(along[i])) return;
            sum += v.subVectors(p, mean).addScaledVector(axis, -along[i]).length();
            n += 1;
        });
        return n ? sum / n : 0;
    };
    const spreadAtMax = spreadNear((t) => t > max * 0.6);
    const spreadAtMin = spreadNear((t) => t < min * 0.6);
    return spreadAtMax <= spreadAtMin ? axis : axis.negate();
}

// `vertical` stands the dombyra upright (head at the top) and spins it around the Y axis.
function DombraModelViewer({ vertical = false, labels = DEFAULT_LABELS }) {
    const mountRef = useRef(null);
    const [isAutoSpinEnabled, setIsAutoSpinEnabled] = useState(true);
    const autoSpinEnabledRef = useRef(true);

    const toggleAutoSpin = () => {
        setIsAutoSpinEnabled((prev) => {
            const next = !prev;
            autoSpinEnabledRef.current = next;
            return next;
        });
    };

    useEffect(() => {
        if (!mountRef.current) return undefined;

        const container = mountRef.current;
        const scene = new THREE.Scene();
        // transparent canvas so the frame behind it follows the site theme
        scene.background = null;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);
        if (vertical) container.style.touchAction = "pan-y";

        const camera = new THREE.PerspectiveCamera(65, 1, 0.1, 5000);
        camera.position.set(0, 250, 350);
        const controls = new OrbitControls(camera, renderer.domElement);
        // disable OrbitControls rotation so pointer drag rotates the model instead
        controls.enableRotate = false;
        const initialTarget = new THREE.Vector3(-24, 180, 0);
        controls.enableDamping = true;
        controls.dampingFactor = 0.06;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.06;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.minDistance = 588;
        controls.maxDistance = 588;
        controls.minPolarAngle = 0.35;
        controls.maxPolarAngle = Math.PI - 0.35;
        controls.minAzimuthAngle = 0;
        controls.maxAzimuthAngle = 0;
        controls.target.copy(initialTarget);

        const topLight = new THREE.DirectionalLight(0xffdfb1, 2.2);
        topLight.position.set(0, 520, 40);
        scene.add(topLight);
        scene.add(new THREE.HemisphereLight(0xfff1d6, 0x2a1a08, 0.9));

        const fallbackMaterial = new THREE.MeshStandardMaterial({
            color: "#6b4212",
            metalness: 0.05,
            roughness: 0.65,
        });

        const objLoader = new OBJLoader();
        let disposed = false;
        // Original parsed OBJ; its unused materials (and geometry shared with the clones) are freed on close.
        let loadedRoot = null;
        let pivotRef = null;
        let isPointerDown = false;
        let lastPointer = 0;
        const rotationSpeed = 0.005;
        const autoSpinSpeed = 0.003;
        const zoomInSpeed = 0.008;
        const zoomOutSpeed = 0.05;
        const zoomRaycaster = new THREE.Raycaster();
        const zoomPlane = new THREE.Plane();
        const zoomCursor = new THREE.Vector2();
        let zoomHome = null;
        let onPointerDown = null;
        let onPointerMove = null;
        let onPointerUp = null;
        let onWheel = null;

        objLoader.load(
            `${import.meta.env.BASE_URL}Kazakh_National_Musical_Instruments__vray_horizontal.obj`,
            (loadedModel) => {
                // The viewer may have been closed while the file was still downloading:
                // free what was just parsed and stop, so nothing is kept alive.
                if (disposed) {
                    disposeObject(loadedModel);
                    return;
                }
                loadedRoot = loadedModel;

                const dombyraGroupNames = [
                    "Kazakh_National_Musical_Instruments_016",
                    "Kazakh_National_Musical_Instruments_017",
                    "Kazakh_National_Musical_Instruments_018",
                ];

                const dombyraRoot = new THREE.Group();
                dombyraGroupNames.forEach((name) => {
                    const part = loadedModel.getObjectByName(name);
                    if (part) dombyraRoot.add(part.clone(true));
                });

                const model = dombyraRoot.children.length ? dombyraRoot : loadedModel.clone(true);
                model.traverse((child) => {
                    if (child.isMesh) {
                        child.material = fallbackMaterial.clone();
                        child.castShadow = false;
                        child.receiveShadow = false;
                    }
                });

                const bounds = new THREE.Box3().setFromObject(model);
                if (bounds.isEmpty()) {
                    return;
                }

                // The OBJ stores one full dombyra across multiple groups.
                const safeBounds = new THREE.Box3().setFromObject(model);
                const size = safeBounds.getSize(new THREE.Vector3());
                const center = safeBounds.getCenter(new THREE.Vector3());

                model.position.sub(center);

                const fitHeightScale = 300 / Math.max(size.y, 1);
                const fitWidthScale = 290 / Math.max(size.x, 1);
                const fitDepthScale = 290 / Math.max(size.z, 1);
                const scale = Math.min(fitHeightScale, fitWidthScale, fitDepthScale) * 2.2;
                model.scale.setScalar(scale);

                if (vertical) {
                    // Stand the dombyra up: its longest dimension becomes the world Y axis,
                    // head at the top, so spinning around Y keeps it upright the whole time.
                    // The OBJ lies at an angle, so measure the real long axis from the geometry.
                    const neckAxis = findNeckAxis(model);
                    model.quaternion.premultiply(
                        new THREE.Quaternion().setFromUnitVectors(neckAxis, new THREE.Vector3(0, 1, 0))
                    );

                    // Centre the upright model on the origin so the Y spin axis runs through it.
                    const uprightBounds = new THREE.Box3().setFromObject(model);
                    model.position.sub(uprightBounds.getCenter(new THREE.Vector3()));
                    const length = uprightBounds.getSize(new THREE.Vector3()).y;

                    const pivot = new THREE.Group();
                    pivot.add(model);
                    // Start with the soundboard facing the viewer (the upright model otherwise shows its back).
                    pivot.rotation.y = Math.PI;
                    pivotRef = pivot;
                    scene.add(pivot);

                    // Fit the full length into the vertical field of view with some margin.
                    const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
                    const viewDistance = (length / 2 / Math.tan(halfFov)) * 1.25;
                    controls.target.set(0, 0, 0);
                    controls.maxDistance = viewDistance;
                    controls.minDistance = viewDistance;
                    camera.position.set(0, 0, viewDistance);
                    controls.update();

                    controls.enableZoom = false;
                    controls.minDistance = viewDistance * 0.3;
                } else {
                    const scaledBounds = new THREE.Box3().setFromObject(model);

                    // Set proper rotation first (before final positioning)
                    model.rotation.set(-0.08, 100 - Math.PI / 2, 0.26);

                    // Recompute bounds after rotation to position correctly
                    const rotatedBounds = new THREE.Box3().setFromObject(model);
                    const rotatedCenter = rotatedBounds.getCenter(new THREE.Vector3());

                    // Compute a fit distance for zoom-to-fit behavior using the already-computed scaledBounds.
                    const scaledSize = scaledBounds.getSize(new THREE.Vector3());
                    const maxDim = Math.max(scaledSize.x, scaledSize.y, scaledSize.z, 1);
                    const fitDistance = (maxDim / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)))) * 1.05;

                    // Use the model's rotated center as the pivot (so it spins around its own center)
                    const rotationCenter = rotatedCenter.clone();

                    // Position model relative to pivot so its rotated center sits at the pivot origin
                    model.position.sub(rotatedCenter);

                    // create a pivot at the model's world center and add the model to it
                    const pivot = new THREE.Group();
                    pivot.position.copy(rotationCenter);
                    // move the pivot and model together so the object stays centered on its spin origin
                    const objectForwardOffset = fitDistance * 0.75;
                    pivot.position.z += objectForwardOffset;
                    pivot.position.x += objectForwardOffset * 0.025;
                    pivot.position.y -= fitDistance * 0.05;
                    pivot.add(model);
                    pivotRef = pivot;
                    scene.add(pivot);

                    // Keep orbit rotation centered on the dombyra itself.
                    controls.target.copy(rotationCenter);
                    // Keep the camera fixed while moving the object forward.
                    camera.position.set(rotationCenter.x, rotationCenter.y, rotationCenter.z + fitDistance * 0.5);
                    controls.update();

                    // Allow custom zooming behavior via the wheel handler below.
                    controls.enableZoom = false;
                    controls.minDistance = fitDistance * 0.3;
                }

                onWheel = (e) => {
                    e.preventDefault();

                    const rect = container.getBoundingClientRect();
                    zoomCursor.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
                    zoomCursor.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

                    const cameraDirection = new THREE.Vector3();
                    camera.getWorldDirection(cameraDirection);
                    zoomPlane.setFromNormalAndCoplanarPoint(cameraDirection, controls.target);

                    const focusPoint = new THREE.Vector3();
                    zoomRaycaster.setFromCamera(zoomCursor, camera);
                    if (!zoomRaycaster.ray.intersectPlane(zoomPlane, focusPoint)) {
                        focusPoint.copy(controls.target);
                    }

                    const wheelStep = THREE.MathUtils.clamp(Math.abs(e.deltaY) / 120, 0.5, 1.5);
                    const zoomStep = (e.deltaY < 0 ? zoomInSpeed : zoomOutSpeed) * wheelStep;

                    const currentHome = zoomHome ?? {
                        camera: camera.position.clone(),
                        target: controls.target.clone(),
                    };

                    if (e.deltaY < 0) {
                        if (!zoomHome) {
                            zoomHome = currentHome;
                        }
                        camera.position.lerp(focusPoint, zoomStep);
                        controls.target.lerp(focusPoint, zoomStep);
                    } else {
                        camera.position.lerp(currentHome.camera, zoomStep);
                        controls.target.lerp(currentHome.target, zoomStep);

                        if (
                            camera.position.distanceToSquared(currentHome.camera) < 0.01 &&
                            controls.target.distanceToSquared(currentHome.target) < 0.01
                        ) {
                            camera.position.copy(currentHome.camera);
                            controls.target.copy(currentHome.target);
                            zoomHome = null;
                        }
                    }

                    controls.update();
                };

                // pointer drag to rotate pivot (so the model spins around its own center)
                onPointerDown = (e) => {
                    isPointerDown = true;
                    lastPointer = vertical ? e.clientX : e.clientY;
                    container.style.cursor = "grabbing";
                };
                onPointerMove = (e) => {
                    if (!isPointerDown || !pivotRef) return;
                    // drag across the instrument's axis: sideways when upright, vertically when lying flat
                    const pointer = vertical ? e.clientX : e.clientY;
                    const delta = pointer - lastPointer;
                    lastPointer = pointer;
                    if (vertical) {
                        pivotRef.rotation.y += delta * rotationSpeed;
                    } else {
                        pivotRef.rotation.x += delta * rotationSpeed;
                    }
                };
                onPointerUp = () => {
                    isPointerDown = false;
                    container.style.cursor = "default";
                };
                container.addEventListener("pointerdown", onPointerDown);
                window.addEventListener("pointermove", onPointerMove);
                window.addEventListener("pointerup", onPointerUp);
                container.addEventListener("wheel", onWheel, { capture: true, passive: false });
            },
            undefined,
            (error) => {
                console.error("Failed to load dombra model:", error);
            }
        );

        const resize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        resize();
        window.addEventListener("resize", resize);

        let frameId = null;
        const animate = () => {
            if (pivotRef && !isPointerDown && autoSpinEnabledRef.current) {
                if (vertical) {
                    pivotRef.rotation.y += autoSpinSpeed;
                } else {
                    pivotRef.rotation.x -= autoSpinSpeed;
                }
            }
            controls.update();
            renderer.render(scene, camera);
            frameId = window.requestAnimationFrame(animate);
        };
        animate();

        return () => {
            disposed = true;
            window.removeEventListener("resize", resize);
            if (frameId) window.cancelAnimationFrame(frameId);
            controls.dispose();
            // Dispose meshes before the renderer: it frees each GPU buffer/texture when the
            // object's dispose event fires, which only works while the renderer is alive.
            disposeObject(scene);
            disposeObject(loadedRoot);
            fallbackMaterial.dispose();
            scene.clear();
            renderer.dispose();
            // Release the WebGL context now instead of waiting for GC (browsers cap live contexts).
            renderer.forceContextLoss();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            // container is non-null (checked at the top of the effect); handlers are null if the
            // model never loaded, and removeEventListener ignores a null listener.
            container.removeEventListener("pointerdown", onPointerDown);
            container.removeEventListener("wheel", onWheel, { capture: true });
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
        };
    }, [vertical]);

    return (
        <div className="relative h-full w-full">
            <div ref={mountRef} className="h-full w-full" aria-label="Dombra 3D model viewer" />

            {/* Interaction hints; zoom is wheel-only, so it is shown just for mouse/trackpad users */}
            <div className="pointer-events-none absolute left-3 top-3 right-24 z-10 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-md border border-border bg-background/80 px-2.5 py-1 text-xs text-copy/80 backdrop-blur-sm">
                    {labels.rotate}
                </span>
                <span className="hidden items-center rounded-md border border-border bg-background/80 px-2.5 py-1 text-xs text-copy/80 backdrop-blur-sm pointer-fine:inline-flex">
                    {labels.zoom}
                </span>
            </div>

            <button
                type="button"
                onClick={toggleAutoSpin}
                className="absolute right-3 top-3 z-10 inline-flex items-center rounded-md border border-border bg-background/80 px-2.5 py-1 text-xs text-gold backdrop-blur-sm transition hover:bg-accent"
                aria-label={isAutoSpinEnabled ? labels.pause : labels.play}
            >
                {isAutoSpinEnabled ? labels.pause : labels.play}
            </button>
        </div>
    );
}

export default DombraModelViewer;
