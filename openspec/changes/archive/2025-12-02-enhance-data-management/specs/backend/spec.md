# backend Specification Delta

## ADDED Requirements

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
