## 1. Foundation Setup
- [x] 1.1 Initialize Vite project (Vue 3, TypeScript) and clean up default files.
- [x] 1.2 Configure `vite.config.ts` (alias `@`, SCSS options).
- [x] 1.3 Install dependencies: `pinia`, `vue-router`, `cesium`, `@vueuse/core`, `lodash-es`, `sass`.
- [x] 1.4 Setup TypeScript (`tsconfig.json` with strict mode).

## 2. Design System & Assets
- [x] 2.1 Create `src/assets/styles/_variables.scss` (Colors, Fonts, Z-Index).
- [x] 2.2 Create `src/assets/styles/_mixins.scss` (Glass Panel, Neon Glow).
- [x] 2.3 Create `src/assets/styles/main.scss` (Global reset).

## 3. Core Architecture
- [x] 3.1 Setup Pinia Stores (`app.ts`, `cesium.ts` with `shallowRef`).
- [x] 3.2 Setup Vue Router (`router/index.ts`) with routes for 6 modules.
- [x] 3.3 Implement `CesiumViewer.vue` (Layer 0).
- [x] 3.4 Implement `MainLayout.vue` (Layering strategy).

## 4. Layout Components
- [x] 4.1 Create `GlassPanel.vue` (Base component).
- [x] 4.2 Create `TopRibbon.vue` (Header & Toolbars).
- [x] 4.3 Create `BottomDock.vue` (Navigation).
- [x] 4.4 Integrate layout into `App.vue`.