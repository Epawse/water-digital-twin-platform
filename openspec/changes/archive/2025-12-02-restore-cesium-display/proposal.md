# Proposal: restore-cesium-display

## Why

The Cesium 3D globe map was previously disabled/placeholder. Users need a working 3D globe with:
- Water-ink style basemap (dark theme with blue tint)
- Navigation controls (compass, zoom)
- Initial view focused on Xinjiang/Urumqi area

## What Changes

1. **Modified Cesium Build** - Copied custom Cesium 1.82 build with color adjustment support to `public/Cesium-1.82-epawse/`
2. **Vite Configuration** - Changed from bundled Cesium to external global Cesium via `vite-plugin-external`
3. **Controller System** - Added `src/utils/ctrlCesium/Controller.ts` for map initialization and filter management
4. **Color Utilities** - Added `src/utils/color.ts` for hex-RGB conversion
5. **Basemap Configuration** - Added `src/mock/baseMapData.ts` with water-ink style imagery settings
6. **CesiumViewer Component** - Updated to initialize real Cesium viewer with configured basemap

## Scope

- Frontend only changes
- Uses modified Cesium 1.82 build from reference project
- No backend changes required
