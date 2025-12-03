# Tasks: Implement GIS Measure Tools

## Phase 1: Infrastructure
- [x] **T1.1** Create `src/stores/measure.ts`
  - State: activeTool, measurements[], currentDrawing
  - Actions: setTool, addMeasurement, removeMeasurement, clearAll
  - Validation: Store initializes correctly, actions work

- [x] **T1.2** Create `src/types/measure.ts`
  - Measurement interface
  - DrawingState interface
  - Tool type definitions
  - Validation: Types compile without errors

## Phase 2: Distance Measurement
- [x] **T2.1** Create `src/components/cesium/MeasureLayer.vue`
  - Mount in App.vue (persistent across pages)
  - Watch measureStore.activeTool
  - Setup Cesium event handlers
  - Validation: Component mounts, no console errors

- [x] **T2.2** Implement distance tool click handling
  - First click: create start point entity
  - Second click: create end point + line + label
  - Calculate geodesic distance
  - Validation: Two clicks create visible measurement

- [x] **T2.3** Implement distance preview (mouse move)
  - Dynamic line from start to cursor
  - Circle centered on start point with radius = distance
  - Update preview on each move
  - Validation: Preview line and circle follow cursor

- [x] **T2.4** Style distance measurement entities
  - Neon-cyan color scheme
  - Glow effect on points
  - Distance label formatting (m/km auto-switch)
  - Validation: Visual matches design spec

## Phase 3: Area Measurement
- [x] **T3.1** Implement area tool click handling
  - Each click adds vertex
  - Double-click completes polygon (≥3 vertices)
  - Calculate polygon area
  - Validation: Clicks create polygon, double-click finishes

- [x] **T3.2** Implement area preview (mouse move)
  - Preview polygon with cursor as temporary last vertex
  - Closing line from last vertex to first
  - Validation: Preview polygon updates on move

- [x] **T3.3** Style area measurement entities
  - Semi-transparent fill
  - Solid boundary line
  - Area label at centroid (m²/km² auto-switch)
  - Validation: Visual matches design spec

## Phase 4: UI Integration
- [x] **T4.1** Connect TopRibbon buttons to measureStore
  - Toggle active tool on click
  - Visual feedback for active state
  - Validation: Buttons toggle tool state

- [x] **T4.2** Create `src/components/common/MeasurePanel.vue`
  - Floating panel showing measurement history
  - List with type icon, value, delete button
  - New/Clear all actions
  - Validation: Panel shows, lists measurements

- [x] **T4.3** Implement measurement deletion
  - Remove from store
  - Remove Cesium entities
  - Validation: Delete removes item and visual

## Phase 5: Polish & Optional Backend
- [x] **T5.1** Add keyboard shortcuts
  - ESC: cancel current drawing
  - Delete: remove selected measurement
  - Validation: Shortcuts work as expected

- [x] **T5.2** Add right-click cancel
  - Cancel drawing in progress
  - Clear preview entities
  - Validation: Right-click cancels cleanly

- [ ] **T5.3** (Optional) Backend API integration
  - POST/GET/DELETE /api/measurements
  - Auto-save on complete
  - Load on app init
  - Validation: Measurements persist across reload

## Dependencies
- T2.* depends on T1.*
- T3.* depends on T2.1 (shared infrastructure)
- T4.* depends on T2.*, T3.*
- T5.* depends on T4.*

## Estimated Complexity
- Phase 1: Low
- Phase 2: Medium-High (Cesium interaction)
- Phase 3: Medium (similar to Phase 2)
- Phase 4: Medium
- Phase 5: Low-Medium
