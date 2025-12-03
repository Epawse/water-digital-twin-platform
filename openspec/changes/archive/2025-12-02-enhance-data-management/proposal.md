# Proposal: enhance-data-management

## Why

The current Data Governance page (`数据治理中心`) has limited functionality:
- Uses mock data for the data cleaning table
- The `MonitoringData` sidebar panel shows only a subset of sensor data (pore pressure + stress)
- No ability to browse, search, filter, or manage actual database records
- No CRUD operations for data entities
- No pagination support for large datasets

Users need a comprehensive data management interface that provides full visibility and control over all database entities (sensors, readings, stations, products, etc.) with standard data grid functionality.

## What Changes

1. **Remove** the `MonitoringData` sidebar panel (limited utility, redundant with Dashboard)
2. **Replace** the static mock table with a full-featured data management grid
3. **Add** entity-type tabs to switch between different data categories
4. **Add** pagination, search, and filtering capabilities
5. **Add** CRUD operations (Create, Read, Update, Delete) for data entities
6. **Add** backend endpoints for paginated queries and write operations

## Scope

- **Frontend**: Redesign `DataGovernance.vue` with tabbed data browser
- **Backend**: Add paginated list endpoints with search/filter, plus CRUD endpoints
- **Specs**: Update `data-governance` spec, add backend CRUD requirements

## Risks

- **Data integrity**: Write operations need validation to prevent corrupted data
- **Performance**: Large tables need proper pagination and indexing
- **Permissions**: Consider role-based access for write operations (future scope)

## Dependencies

- Existing database models (Sensor, SensorReading, HydrologicalStation, etc.)
- Existing API infrastructure (FastAPI router pattern)
