# platform Specification Delta

## ADDED Requirements

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
