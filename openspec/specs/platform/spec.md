# platform Specification

## Purpose
TBD - created by archiving change init-project-structure. Update Purpose after archive.
## Requirements
### Requirement: Project Architecture
The system SHALL be built using Vue 3, TypeScript, and Vite, following the defined directory structure and layering strategy. The codebase SHALL be free of temporary debug logs and artifacts.

#### Scenario: Production Build
- **WHEN** the project is built for production
- **THEN** no console logs indicating "Mounting Vue app" appear

### Requirement: Cesium Integration
The system SHALL integrate a modified CesiumJS 1.82 build with color adjustment support as a persistent background layer (Layer 0) displaying a water-ink style basemap.

#### Scenario: Viewer Persistence
- **WHEN** the user navigates between Dashboard and Simulation pages
- **THEN** the Cesium Viewer instance remains active and does not reload

#### Scenario: Map Initialization
- **WHEN** the application loads
- **THEN** a Cesium 3D globe is displayed with AutoNavi basemap
- **AND** color inversion filter creates water-ink aesthetic (dark with blue tint)
- **AND** navigation controls (compass, zoom, distance legend) are available

#### Scenario: Initial View
- **WHEN** the application initializes
- **THEN** the camera flies to the configured initial location (Xinjiang/Urumqi area)
- **AND** the transition duration is configurable

### Requirement: State Management
The system SHALL use Pinia for global state management, specifically for controlling the view mode ('workstation' vs 'focus') and Cesium interaction.

#### Scenario: View Mode Switching
- **WHEN** the user enters the "Data Governance" module
- **THEN** the global view mode changes to 'focus'
- **AND** the map background becomes blurred

