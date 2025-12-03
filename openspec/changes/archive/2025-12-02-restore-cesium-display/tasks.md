## 1. Cesium Build Setup
- [x] 1.1 Copy modified Cesium 1.82 build to public/Cesium-1.82-epawse/
- [x] 1.2 Update index.html to load Cesium from public directory
- [x] 1.3 Install vite-plugin-external and cesium-navigation-es6

## 2. Vite Configuration
- [x] 2.1 Update vite.config.ts to use external Cesium
- [x] 2.2 Remove vite-plugin-static-copy (no longer needed)

## 3. Utility Files
- [x] 3.1 Create src/utils/color.ts with color conversion functions
- [x] 3.2 Create src/utils/common.ts with helper functions
- [x] 3.3 Create src/utils/ctrlCesium/Controller.ts for map control
- [x] 3.4 Create src/utils/ctrlCesium/imageryProvider/BaiduImageryProvider.ts

## 4. Configuration
- [x] 4.1 Create src/mock/baseMapData.ts with water-ink style config

## 5. Component Updates
- [x] 5.1 Update CesiumViewer.vue to use Controller
- [x] 5.2 Update cesium store with real Cesium functions

## 6. Validation
- [x] 6.1 Run npm run build to verify no TypeScript errors
- [ ] 6.2 Visual verification of water-ink map style
