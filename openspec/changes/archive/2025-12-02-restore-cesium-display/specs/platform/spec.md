# platform Specification Delta

## MODIFIED Requirements

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
