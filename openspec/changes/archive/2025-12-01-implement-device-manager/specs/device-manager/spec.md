## ADDED Requirements
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
