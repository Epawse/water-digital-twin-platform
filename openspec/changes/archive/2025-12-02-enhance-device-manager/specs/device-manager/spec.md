# device-manager Specification Delta

## MODIFIED Requirements

### Requirement: Device Status Chart
The Device Manager page SHALL display device statistics in appropriately sized charts for readability.

#### Scenario: Chart Visibility
- **WHEN** viewing the Device Manager page
- **THEN** the DeviceGaugeChart displays at minimum 200px height
- **AND** the ProtocolPieChart displays at minimum 200px height
- **AND** chart labels and legends are clearly readable

## ADDED Requirements

### Requirement: Real Data Integration
The Device Manager SHALL display actual sensor data from the database.

#### Scenario: Sensor Status Display
- **WHEN** viewing the Device Manager page
- **THEN** the online rate gauge reflects actual sensor status counts from the database
- **AND** the protocol/type distribution chart shows real sensor type distribution
