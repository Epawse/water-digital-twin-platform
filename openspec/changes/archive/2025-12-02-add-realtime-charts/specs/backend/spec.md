## ADDED Requirements

### Requirement: WebSocket Real-time Push
The backend SHALL provide a WebSocket endpoint for real-time data streaming to connected clients.

#### Scenario: Connection Establishment
- **WHEN** a client connects to `/ws/realtime`
- **THEN** the server accepts the connection and adds it to the broadcast pool

#### Scenario: Sensor Data Push
- **WHEN** new sensor readings are available
- **THEN** the server broadcasts a `sensor_update` message containing sensor_id, metric, value, and timestamp

#### Scenario: Alert Notification
- **WHEN** a new warning is detected (value exceeds threshold)
- **THEN** the server broadcasts an `alert_new` message containing sensor_id, level, message, and timestamp

#### Scenario: Connection Cleanup
- **WHEN** a client disconnects
- **THEN** the server removes it from the broadcast pool without affecting other connections
