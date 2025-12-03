# device-manager Specification

## Purpose
TBD - created by archiving change implement-device-manager. Update Purpose after archive.
## Requirements
### Requirement: IoT Device Topology
The system SHALL display a hierarchical or list view of all connected IoT devices.

#### Scenario: Device Selection
- **WHEN** the user clicks "Danjiangkou #01 RTU"
- **THEN** the terminal log filters to show only messages from this device
- **AND** the item is highlighted

### Requirement: Protocol Log Terminal
The system SHALL display a real-time scrolling terminal of raw hex frames and parsed JSON data.

#### Scenario: Log Formatting
- **WHEN** a log entry arrives
- **THEN** it is color-coded (Cyan for RX, Green for Data, Red for Error)
- **AND** autoscrolled to the bottom

### Requirement: Device Status Chart
The Device Manager page SHALL display device statistics in appropriately sized charts for readability.

#### Scenario: Chart Visibility
- **WHEN** viewing the Device Manager page
- **THEN** the DeviceGaugeChart displays at minimum 200px height
- **AND** the ProtocolPieChart displays at minimum 200px height
- **AND** chart labels and legends are clearly readable

### Requirement: Real Data Integration
The Device Manager SHALL display actual sensor data from the database.

#### Scenario: Sensor Status Display
- **WHEN** viewing the Device Manager page
- **THEN** the online rate gauge reflects actual sensor status counts from the database
- **AND** the protocol/type distribution chart shows real sensor type distribution

