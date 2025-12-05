# Project Context

## Purpose
To build a **Water Conservancy Digital Twin Platform (水利数字孪生基础平台)** integrating high-precision 3D GIS (Cesium), multi-physics simulation, IoT device monitoring, and Generative AI decision support. The system serves three roles: Command (Leaders), Analysis (Engineers), and Operations (Admins), providing capabilities from macro situational awareness to micro data governance.

## Tech Stack
- **Build Tool**: Vite 5.x (configured with `@` alias, SCSS preprocessing)
- **Framework**: Vue 3.4+ (Composition API + `<script setup>`)
- **Language**: TypeScript 5.x (Strict Mode: `true`)
- **State Management**: Pinia (Setup Store syntax)
- **Routing**: Vue Router 4 (Overlay strategy)
- **Styles**: SCSS (Global variables & Mixins, no Tailwind)
- **3D Engine**: CesiumJS 1.1xx (Official npm package)
- **Charts**: ECharts 5.x (On-demand import)
- **Utils**: `@vueuse/core`, `lodash-es`

## Project Conventions

### Code Style
- **Strict Mode**: Strict adherence to TypeScript strict mode.
- **Styles**: No hardcoded colors in CSS; strictly use `src/assets/styles/_variables.scss`.
- **Components**: Use `<script setup>` syntax.
- **Naming**:
    -   Directories: `kebab-case` (e.g., `components/common`)
    -   Components: `PascalCase` (e.g., `GlassPanel.vue`)
    -   Variables/Functions: `camelCase`

### Architecture Patterns
- **"1+5" Architecture**: 1 Dashboard (Situational Awareness) + 5 Business Subsystems (Simulation, Meteorology, Data Governance, Device Manager, AI Engineering).
- **Rendering Layering Strategy**:
    -   **Layer 0**: `CesiumViewer` (Persistent, Z=0, never destroyed).
    -   **Layer 1**: `MeteoSplitLayer` (Split screen mask, Z=1).
    -   **Layer 2**: `RouterView` (UI Layer, Z=10).
    -   **Layer 3-6**: `SplitSlider`, `TopRibbon`, `FloodPanel`, `BottomDock`.
- **State Management**:
    -   `app.ts`: Global UI state (viewMode: 'workstation' | 'focus').
    -   `cesium.ts`: Must use `shallowRef` for Viewer instance to prevent performance issues.

### Git Workflow

#### Branch Naming
- **Feature branches**: `feature/<short-kebab-title>`
  - Example: `feature/gis-toolkit-phase0-drawtools`
- **Bug fixes**: `fix/<short-kebab-title>`
  - Example: `fix/cesium-memory-leak`
- **Maintenance/tooling**: `chore/<short-kebab-title>`
  - Example: `chore/update-deps`
- **Main branch**: `main` (primary development branch)

#### Commit Messages
Follow **Conventional Commits** style with prefixes:

- `feat:` - New features
  - Example: `feat(gis): add getCenter() method to all Graphic classes`
- `fix:` - Bug fixes
  - Example: `fix(types): resolve critical type errors and exclude tests from build`
- `perf:` - Performance improvements
  - Example: `perf(gis): optimize drawing preview performance`
- `docs:` - Documentation changes
  - Example: `docs(phase-0): migrate legacy documents to structured workflow`
- `chore:` - Maintenance, tooling, dependencies
  - Example: `chore(openspec): archive implement-gis-measure-tools as superseded`
- `test:` - Adding or updating tests
  - Example: `test(gis): add LineGraphic unit tests`
- `refactor:` - Code refactoring without feature changes
  - Example: `refactor(store): unify measure and draw into gis store`

**Format**: `<type>(<scope>): <short description>`
- **Type**: Required (feat, fix, perf, docs, chore, test, refactor)
- **Scope**: Optional but recommended (gis, cesium, backend, ui, openspec)
- **Description**: Short, present tense, lowercase, no period at end

**Multi-line commits**: Use body for detailed explanation when needed
```
feat(gis): implement dynamic preview for all drawing tools

- Add CallbackProperty support for real-time updates
- Optimize preview rebuild strategy (only on vertex count change)
- Improve throttle timing from 16ms to 50ms

Resolves performance issue with <30fps during drawing.
```

#### Commit Granularity
- **Prefer small, focused commits** - One logical change per commit
- **Align with OpenSpec tasks** when possible - Reference task IDs in commit messages or PR descriptions
- **Commit working state** - Ensure code compiles and tests pass (or are explicitly excluded)

#### OpenSpec Integration
- **Proposed changes** are documented in `openspec/changes/` before implementation
- **Follow the workflow**:
  1. Create change proposal: `/openspec:proposal <change-title>`
  2. Implement tasks from `tasks.md`
  3. Update `worklog.md` regularly
  4. Archive when complete: `/openspec:archive <change-id>`
- **Branch per change** (optional) - Can work directly on `main` for small changes, or create feature branch for large changes

## Domain Context
- **Core Models**:
    -   **HEC-RAS**: Flood evolution (Inputs: Flow, Roughness; Outputs: Submerged Area).
    -   **MIKE Hydro**: Basin hydrodynamics.
    -   **HST-Stat**: Dam safety regression (Inputs: Water Level, Temp, Aging; Outputs: Displacement).
- **Meteorology**: Radar reflectivity (Z) to Rainfall rate (R) inversion ($Z = a \cdot R^b$).
- **IoT Protocols**: SL651-2014 (Hydrology), Modbus RTU.

## Important Constraints
- **Performance**:
    -   Pause Cesium rendering when in "Focus Mode" (blurred background).
    -   Use `will-change` for high-frequency UI updates (sliders) to avoid ghosting.
    -   Use `shallowRef` for Cesium instances.
- **Visual Style**:
    -   **Theme**: "HUD Immersive Cockpit" (Deep Blue + Cyber Neon).
    -   **Glassmorphism**: Translucent panels with `backdrop-filter: blur(16px)`.
    -   **Resolution**: Developed for 1920x1080 baseline.
- **Responsive**: Sidebar fixed width 340px, adaptive height.

## External Dependencies
- **CesiumJS**: 3D Geospatial visualization.
- **DeepSeek-R1**: AI Assistant for water situation briefings.
- **ECharts**: Data visualization.