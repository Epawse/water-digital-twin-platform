## ADDED Requirements
### Requirement: Project Architecture
The system SHALL be built using Vue 3, TypeScript, and Vite, following the defined directory structure and layering strategy.

#### Scenario: Directory Verification
- **WHEN** the project is initialized
- **THEN** `src/views`, `src/components`, `src/stores` directories exist
- **AND** `src/assets/styles/_variables.scss` exists

### Requirement: Cesium Integration
The system SHALL integrate CesiumJS as a persistent background layer (Layer 0) that is not destroyed during route navigation.

#### Scenario: Viewer Persistence
- **WHEN** the user navigates between Dashboard and Simulation pages
- **THEN** the Cesium Viewer instance remains active and does not reload

### Requirement: State Management
The system SHALL use Pinia for global state management, specifically for controlling the view mode ('workstation' vs 'focus') and Cesium interaction.

#### Scenario: View Mode Switching
- **WHEN** the user enters the "Data Governance" module
- **THEN** the global view mode changes to 'focus'
- **AND** the map background becomes blurred
