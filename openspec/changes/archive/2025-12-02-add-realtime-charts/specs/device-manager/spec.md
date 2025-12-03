## ADDED Requirements

### Requirement: Device Status Chart
The Device Manager SHALL display a visual chart showing device online/offline distribution.

#### Scenario: Gauge Display
- **WHEN** the Device Manager opens
- **THEN** a gauge chart displays online device percentage with color zones (green > 80%, yellow 50-80%, red < 50%)

#### Scenario: Real-time Status Update
- **WHEN** a device status change arrives via WebSocket
- **THEN** the gauge updates within 500ms

#### Scenario: Protocol Distribution
- **WHEN** device list is loaded
- **THEN** a pie chart shows distribution by protocol type (SL651, ModbusRTU, RS485)
