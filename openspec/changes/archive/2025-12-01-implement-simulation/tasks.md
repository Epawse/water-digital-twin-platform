## 1. Store & Types
- [x] 1.1 Define TypeScript interfaces for Simulation Params.
- [x] 1.2 Implement `src/stores/simulation.ts` with state for engine selection and parameters.

## 2. Components
- [x] 2.1 Create `src/components/business/SimConfig.vue` (Left Panel).
    - Support switching between 'flood', 'hydro', 'dam'.
    - Bind inputs to Pinia store.
- [x] 2.2 Create `src/components/business/SimResult.vue` (Right Panel).
    - Display results based on current engine.
- [x] 2.3 Create `src/components/common/TimelineControl.vue` (Bottom Panel).

## 3. Simulation View
- [x] 3.1 Implement `src/views/Simulation.vue`.
- [x] 3.2 Integrate Config, Result, and Timeline components.
- [x] 3.3 Ensure layout matches the "Immersive Workstation" mode.