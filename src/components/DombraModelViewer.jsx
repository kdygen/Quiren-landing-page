import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

function DombraModelViewer() {
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
        scene.background = new THREE.Color("#0f0b07");

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

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

        const fallbackMaterial = new THREE.MeshStandardMaterial({
            color: "#3c2600",
            metalness: 0.05,
            roughness: 0.65,
        });

        const objLoader = new OBJLoader();
        let modelRef = null;
        let pivotRef = null;
        let isPointerDown = false;
        let lastClientY = 0;
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

                const scaledBounds = new THREE.Box3().setFromObject(model);
                const scaledCenter = scaledBounds.getCenter(new THREE.Vector3());

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
                    lastClientY = e.clientY;
                    container.style.cursor = "grabbing";
                };
                onPointerMove = (e) => {
                    if (!isPointerDown || !pivotRef) return;
                    const deltaY = e.clientY - lastClientY;
                    lastClientY = e.clientY;
                    pivotRef.rotation.x += deltaY * rotationSpeed;
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
                pivotRef.rotation.x -= autoSpinSpeed;
            }
            controls.update();
            renderer.render(scene, camera);
            frameId = window.requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            if (frameId) window.cancelAnimationFrame(frameId);
            controls.dispose();
            renderer.dispose();
            scene.clear();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            try { container.removeEventListener("pointerdown", onPointerDown); } catch (e) { }
            try { container.removeEventListener("wheel", onWheel, { capture: true }); } catch (e) { }
            try { window.removeEventListener("pointermove", onPointerMove); } catch (e) { }
            try { window.removeEventListener("pointerup", onPointerUp); } catch (e) { }
        };
    }, []);

    return (
        <div className="relative h-full w-full">
            <div ref={mountRef} className="h-full w-full" aria-label="Dombra 3D model viewer" />
            <button
                type="button"
                onClick={toggleAutoSpin}
                className="absolute right-2 top-2 z-10 rounded border border-[#8e6a2d] bg-[#1d140b]/90 px-3 py-1 text-xs text-[#f5d79a] transition hover:bg-[#2b1d10]"
                aria-label={isAutoSpinEnabled ? "Pause spin" : "Play spin"}
            >
                {isAutoSpinEnabled ? "Pause" : "Play"}
            </button>
        </div>
    );
}

export default DombraModelViewer;
