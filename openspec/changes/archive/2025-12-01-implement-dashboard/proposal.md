# Change: Implement Dashboard

## Why
The "Dashboard" module is the primary entry point for the application, providing situational awareness. Currently, the view is empty (`<div>Dashboard</div>`). We need to implement the 3-column layout (Left Sidebar, Right Sidebar) with the core widgets defined in the requirements.

## What Changes
- Implement `Dashboard.vue` with a 2-sidebar layout (Left: KPI, Weather, Layers; Right: Hydro, CCTV, AI).
- Create reusable widgets:
    - `KpiBoard.vue`: Key Performance Indicators.
    - `WeatherStrip.vue`: Weather forecast.
    - `LayerControl.vue`: GIS layer toggles.
    - `WaterSituation.vue`: Real-time water level/flow.
    - `CctvPlayer.vue`: Video surveillance.
    - `AiAssistant.vue`: Chat interface.
- Ensure responsiveness and integration with `GlassPanel`.

## Impact
- Affected specs: `dashboard`
- Affected code: `src/views/Dashboard.vue`, `src/components/business/`
