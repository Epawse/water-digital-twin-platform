# Change: Initialize Project Structure

## Why
The project is currently empty (no `src/` directory). We need to initialize the base Vue 3 + Vite architecture integrated with CesiumJS and Pinia, as defined in the technical architecture documentation, to serve as the foundation for the "1+5" Digital Twin platform.

## What Changes
- Initialize Vite project with Vue 3 + TypeScript.
- Configure SCSS global variables and mixins (`src/assets/styles/`).
- Set up Pinia for state management.
- Integrate CesiumJS as a persistent background layer.
- Create the "1+5" directory structure (`views/`, `components/`, `layout/`).
- Implement the core layout components (GlassPanel, TopRibbon, BottomDock).

## Impact
- Affected specs: `platform`
- Affected code: `src/` (newly created), `package.json`, `vite.config.ts`
