## 1. Store Logic
- [x] 1.1 Update `src/stores/cesium.ts` to support 2D/3D mode switching state.
- [x] 1.2 Create `useMeteoStore` (or keep local) for split-screen position (0-100%).

## 2. Components
- [x] 2.1 Create `src/components/business/MeteoConfig.vue` (Left Panel).
    - Sliders for parameters `a` and `b`.
- [x] 2.2 Create `src/components/business/MeteoLayerControl.vue` (Right Panel).
- [x] 2.3 Create `src/components/business/MeteoSplitLayer.vue` (The Visual Splitter).
    - Needs a draggable handle.
    - Needs a masked container for the "Left" layer.

## 3. Meteorology View
- [x] 3.1 Implement `src/views/Meteorology.vue`.
- [x] 3.2 Add `onMounted` hook to force 2D mode.
- [x] 3.3 Add `onUnmounted` hook to restore 3D mode.