# Change: Implement Simulation

## Why
The "Simulation" module is the engineer's workbench for running hydraulic and structural safety models. The current view is empty. We need to implement the configuration panel (Left Sidebar) and results panel (Right Sidebar), supporting 3 different engines (HEC-RAS, MIKE, HST-Stat).

## What Changes
- Implement `Simulation.vue` with the standard 2-sidebar layout.
- Create `SimConfig.vue`: A dynamic form that changes based on the selected engine.
    - HEC-RAS/MIKE: Flow, Roughness inputs.
    - HST-Stat: Water Level, Temperature, Aging inputs.
- Create `SimResult.vue`: Displays simulation outputs.
    - Flood: Area (km²), Submerged duration curve (placeholder).
    - Dam: Displacement (mm), Regression plot (placeholder).
- Create `TimelineControl.vue`: A playback bar for time-series data (bottom).
- Update `simulation.ts` store to manage these parameters.

## Impact
- Affected specs: `simulation`
- Affected code: `src/views/Simulation.vue`, `src/components/business/`, `src/stores/simulation.ts`
