# backend Specification

## Purpose
TBD - created by archiving change integrate-backend. Update Purpose after archive.
## Requirements
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

### Requirement: WebSocket Real-time Push
The backend SHALL extend real-time push to include hydrological flow rate metrics.

#### Scenario: Flow Rate Push
- **WHEN** new flow rate readings are available
- **THEN** the server broadcasts a `sensor_update` message with metric="flow_rate"

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

### Requirement: Admin API Namespace
The backend SHALL expose an `/api/v1/admin/` namespace for data management operations.

#### Scenario: Router Registration
- **WHEN** the FastAPI app starts
- **THEN** the admin router is registered at `/api/v1/admin/`

### Requirement: Paginated List Endpoints
The backend SHALL provide paginated list endpoints for core data entities.

#### Scenario: Sensor List
- **WHEN** `GET /api/v1/admin/sensors` is called with pagination parameters
- **THEN** a paginated response with sensors, total count, and page info is returned

#### Scenario: Reading List
- **WHEN** `GET /api/v1/admin/readings` is called with optional time range filter
- **THEN** a paginated response with sensor readings is returned

#### Scenario: Hydrological Station List
- **WHEN** `GET /api/v1/admin/hydrological_stations` is called
- **THEN** a paginated response with station data is returned

#### Scenario: Facility List
- **WHEN** `GET /api/v1/admin/facilities` is called
- **THEN** a paginated response with monitoring facility data is returned

#### Scenario: Section List
- **WHEN** `GET /api/v1/admin/sections` is called
- **THEN** a paginated response with monitoring section data is returned

### Requirement: CRUD Endpoints
The backend SHALL provide Create, Update, and Delete endpoints for data entities.

#### Scenario: Create Sensor
- **WHEN** `POST /api/v1/admin/sensors` is called with valid sensor data
- **THEN** a new sensor record is created and returned

#### Scenario: Update Sensor
- **WHEN** `PUT /api/v1/admin/sensors/{id}` is called with updated data
- **THEN** the sensor record is updated and the new state is returned

#### Scenario: Delete Sensor
- **WHEN** `DELETE /api/v1/admin/sensors/{id}` is called
- **THEN** the sensor is soft-deleted (status set to "deleted")

#### Scenario: Delete Reading
- **WHEN** `DELETE /api/v1/admin/readings/{id}` is called
- **THEN** the sensor reading is hard-deleted from the database

### Requirement: Search and Filter Query Parameters
The admin list endpoints SHALL accept query parameters for filtering and sorting.

#### Scenario: Search Parameter
- **WHEN** `search=xyz` query parameter is provided
- **THEN** results are filtered to records containing "xyz" in searchable text fields

#### Scenario: Sort Parameters
- **WHEN** `sort_by=name&sort_order=desc` parameters are provided
- **THEN** results are sorted by the specified field in descending order

#### Scenario: Pagination Parameters
- **WHEN** `page=2&page_size=20` parameters are provided
- **THEN** the second page of 20 records is returned

