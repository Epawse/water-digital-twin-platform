# Change: Implement Meteorology

## Why
The "Meteorology" module focuses on radar data inversion and rainfall analysis. It requires a unique full-screen interaction mode where the map is forced into 2D, and a "Split Screen" slider allows comparing Radar Reflectivity (Left) vs. Inverted Rainfall (Right).

## What Changes
- Implement `Meteorology.vue` layout.
- Create `MeteoConfig.vue` (Left Sidebar) for Z-R relation parameters ($Z = a \cdot R^b$).
- Create `MeteoLayerControl.vue` (Right Sidebar) for toggling comparison layers.
- Implement `MeteoSplitLayer.vue`: A pure CSS/DOM overlay that simulates the split-screen effect (since we disabled the real Cesium for now).
    - It will act as a mask over the "map".
- Add logic to force 2D mode when entering this route and restore 3D when leaving.

## Impact
- Affected specs: `meteorology`
- Affected code: `src/views/Meteorology.vue`, `src/stores/cesium.ts`, `src/components/business/`
