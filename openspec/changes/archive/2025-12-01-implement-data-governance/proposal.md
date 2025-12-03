# Change: Implement Data Governance

## Why
The "Data Governance" module is designed for managing data quality and cleaning rules. Unlike the previous modules which are "Immersive Workstations" (UI over clear map), this module uses "Focus Mode" where the background map is blurred and dimmed to minimize distraction.

## What Changes
- Implement `DataGovernance.vue` with a centered modal layout (`ModalBox.vue`).
- Implement `ModalBox.vue`: A reusable container for focus-mode pages.
- Create `DataStats.vue`: Top row summary cards (Intercepted, Fixed, Rate).
- Create `DataCleaningTable.vue`: A data grid showing cleaning logs.
- Ensure entering this route triggers the `is-blurred` class on the Cesium container (already handled by `app.ts` store logic, needs verification).

## Impact
- Affected specs: `data-governance`
- Affected code: `src/views/DataGovernance.vue`, `src/components/common/ModalBox.vue`, `src/components/business/`
