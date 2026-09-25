// Frees the GPU-side resources (geometries, materials and their textures) held by a
// three.js object tree. Safe to call on objects that were never rendered and on
// resources shared between meshes: three.js ignores repeated dispose() calls.
export function disposeObject(root) {
    if (!root) return;

    root.traverse((child) => {
        if (child.geometry) child.geometry.dispose();

        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((material) => {
            if (!material) return;
            // Textures live on arbitrary material slots (map, normalMap, envMap, ...)
            Object.values(material).forEach((value) => {
                if (value && value.isTexture) value.dispose();
            });
            material.dispose();
        });
    });
}
