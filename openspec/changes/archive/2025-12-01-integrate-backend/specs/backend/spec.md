## ADDED Requirements
### Requirement: Backend API
The system SHALL provide a RESTful API via FastAPI to serve sensor data, alerts, and product metadata.

#### Scenario: IoT Device List
- **WHEN** GET `/api/iot_devices` is called
- **THEN** a list of devices (Real or Simulated) is returned

#### Scenario: Water Level Data
- **WHEN** GET `/api/water_levels` is called
- **THEN** the latest water level readings for configured stations are returned

#### Scenario: Data Ingestion
- **WHEN** the backend starts
- **THEN** it SHALL scan the `data/` directory for Excel files (安全监测数据) and ingest them if configured
