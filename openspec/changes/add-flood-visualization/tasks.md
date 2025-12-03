# Tasks: Add Flood Visualization

## Phase 1: Mock Data Infrastructure
- [ ] **T1.1** Create `src/mock/floodScenarios.ts` with 2-3 predefined flood scenarios
  - Each scenario: 10-20 time frames
  - Polygons covering Urumqi river basin area
  - Validation: Import and log data structure

- [ ] **T1.2** Create `src/utils/floodInterpolator.ts` for frame interpolation
  - Input: progress (0-100), scenario
  - Output: interpolated flood state
  - Validation: Unit test interpolation at 0, 50, 100

## Phase 2: Cesium Integration
- [ ] **T2.1** Create `src/components/cesium/FloodLayer.vue`
  - Watch `simulationStore.state.progress`
  - Manage Cesium entities lifecycle
  - Validation: Component mounts without errors

- [ ] **T2.2** Implement water surface rendering
  - Use `PolygonGraphics` with `ColorMaterialProperty`
  - Water color gradient based on depth
  - Validation: Static polygon visible on map

- [ ] **T2.3** Connect to TimelineControl
  - Animate polygons based on progress
  - Update `simulationStore.result.floodArea` from mock data
  - Validation: Dragging timeline changes flood extent

## Phase 3: Visual Polish
- [ ] **T3.1** Add water surface animation effect
  - Subtle opacity/color pulsing
  - Optional: wave pattern using `StripeMaterialProperty`
  - Validation: Visual inspection of animation smoothness

- [ ] **T3.2** Add flood boundary outline
  - Polyline around flood extent
  - Neon cyan color matching theme
  - Validation: Outline visible and updates with flood

## Phase 4: Integration
- [ ] **T4.1** Mount FloodLayer in Simulation.vue
  - Conditional render when engine is 'flood' or 'hydro'
  - Cleanup on unmount
  - Validation: Switch to dam engine hides flood layer

- [ ] **T4.2** Sync with SimResult display
  - FloodProgressChart uses same data source
  - Metrics match visual representation
  - Validation: Chart and map show consistent values

## Dependencies
- T2.* depends on T1.*
- T3.* depends on T2.*
- T4.* depends on T3.*

## Estimated Complexity
- Phase 1: Low (data structures only)
- Phase 2: Medium (Cesium integration)
- Phase 3: Medium (visual effects)
- Phase 4: Low (wiring)
