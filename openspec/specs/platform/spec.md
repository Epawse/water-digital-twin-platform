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

### Requirement: Distance Measurement Tool
The system SHALL provide an interactive distance measurement tool accessible from the TopRibbon.

#### Scenario: Activate Distance Tool
- **WHEN** the user clicks the "空间测距" button in TopRibbon
- **THEN** the button shows active state (highlighted)
- **AND** the cursor changes to crosshair
- **AND** the map enters measurement mode

#### Scenario: Start Distance Measurement
- **WHEN** the distance tool is active
- **AND** the user clicks on the map
- **THEN** a start point marker appears at the clicked location
- **AND** a preview line follows the cursor
- **AND** a circle outline centered on the start point shows the current radius

#### Scenario: Complete Distance Measurement
- **WHEN** a start point is set
- **AND** the user clicks a second point
- **THEN** an end point marker appears
- **AND** a line connects start to end
- **AND** a label displays the distance (in meters or kilometers)
- **AND** the measurement is added to history
- **AND** the preview circle disappears

#### Scenario: Cancel Measurement
- **WHEN** drawing is in progress
- **AND** the user presses ESC or right-clicks
- **THEN** the current drawing is cancelled
- **AND** preview entities are removed
- **AND** the tool remains active for new measurement

### Requirement: Area Measurement Tool
The system SHALL provide an interactive area measurement tool accessible from the TopRibbon.

#### Scenario: Activate Area Tool
- **WHEN** the user clicks the "面积测量" button in TopRibbon
- **THEN** the button shows active state
- **AND** the map enters polygon drawing mode

#### Scenario: Draw Polygon Vertices
- **WHEN** the area tool is active
- **AND** the user clicks on the map
- **THEN** a vertex marker appears
- **AND** edges connect to previous vertices
- **AND** a preview shows the polygon closing to cursor position

#### Scenario: Complete Area Measurement
- **WHEN** at least 3 vertices are placed
- **AND** the user double-clicks
- **THEN** the polygon is completed
- **AND** the area is calculated and displayed at centroid
- **AND** the polygon is filled with semi-transparent color
- **AND** the measurement is added to history

### Requirement: Measurement History Management
The system SHALL maintain a list of measurements with create, read, and delete operations.

#### Scenario: View Measurement History
- **WHEN** measurements exist
- **THEN** a panel displays list of measurements
- **AND** each item shows type icon, value, and delete button

#### Scenario: Delete Single Measurement
- **WHEN** the user clicks delete on a measurement item
- **THEN** the measurement is removed from history
- **AND** corresponding map entities are removed

#### Scenario: Clear All Measurements
- **WHEN** the user clicks "Clear All"
- **THEN** all measurements are removed
- **AND** all measurement entities are removed from the map

