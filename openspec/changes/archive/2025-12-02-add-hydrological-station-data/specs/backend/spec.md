# backend Specification Delta

## ADDED Requirements

### Requirement: Hydrological Station Data Model
The system SHALL support a dedicated `HydrologicalStation` entity for managing hydrological monitoring stations with cross-section geometry stored in PostGIS.

#### Scenario: Station Creation
- **GIVEN** a hydrological station with code "MQG" and name "马圈沟水文站"
- **WHEN** the station is created with cross-section geometry
- **THEN** the station is stored with `cross_section` as PostGIS LINESTRINGZ (SRID 4549)

#### Scenario: Station Query
- **WHEN** GET `/api/v1/hydrological_stations` is called
- **THEN** a list of hydrological stations with their latest flow readings is returned

### Requirement: Hydrological Data API
The system SHALL provide REST endpoints for querying hydrological station data and flow rate readings.

#### Scenario: Station List
- **WHEN** GET `/api/v1/hydrological_stations` is called
- **THEN** all stations are returned with `station_code`, `station_name`, `river_name`, `is_simulated`, and latest readings

#### Scenario: Station Readings
- **WHEN** GET `/api/v1/hydrological_stations/{id}/readings` is called with query params `start_time`, `end_time`
- **THEN** time-series readings for flow_rate, velocity, water_level are returned

#### Scenario: Flow Rate Data
- **WHEN** GET `/api/v1/flow_rates` is called
- **THEN** the latest flow rate readings for all stations are returned (similar to `/api/water_levels`)

### Requirement: Hydrological Data Ingestion
The system SHALL provide scripts to ingest hydrological station data from Excel files into the database.

#### Scenario: Radar Flow Meter Data Import
- **GIVEN** an Excel file with columns: 日期时间, 水位(m), 流速(m/s), 瞬时流量(m³/s), 水面高程(m)
- **WHEN** the ingestion script runs
- **THEN** SensorReading records are created with corresponding metric_keys: water_level, velocity, flow_rate, surface_elevation

#### Scenario: Cross Section Import
- **GIVEN** an Excel file with columns: 点名, X坐标/m, Y坐标/m, 高程/m
- **WHEN** the ingestion script runs
- **THEN** the points are converted to a PostGIS LINESTRINGZ and stored in `cross_section`

#### Scenario: Manual Calibration Import
- **GIVEN** an Excel file with manual measurement values
- **WHEN** the ingestion script runs
- **THEN** SensorReading records are created with `manual_flow_rate` metric for comparison analysis

### Requirement: Simulated Station Generation
The system SHALL support generating simulated hydrological stations with synthetic data based on real station data patterns.

#### Scenario: Simulated Data Creation
- **GIVEN** real station data from 马圈沟
- **WHEN** the generation script runs for station "板房沟"
- **THEN** a new station is created with `is_simulated=True` and 7-day synthetic readings

## MODIFIED Requirements

### Requirement: WebSocket Real-time Push
The backend SHALL extend real-time push to include hydrological flow rate metrics.

#### Scenario: Flow Rate Push
- **WHEN** new flow rate readings are available
- **THEN** the server broadcasts a `sensor_update` message with metric="flow_rate"
