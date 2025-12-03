# data-governance Specification Delta

## REMOVED Requirements

### Requirement: Cleaning Logs
(Replaced by comprehensive Data Management Grid)

## MODIFIED Requirements

### Requirement: Data Quality Monitoring
The system SHALL provide data management capabilities for all database entities with pagination, filtering, and CRUD operations.

#### Scenario: Stats Display
- **WHEN** viewing Data Management
- **THEN** the header displays total record counts for the active entity tab

## ADDED Requirements

### Requirement: Entity Navigation
The Data Management page SHALL provide tabbed navigation to switch between data entity types.

#### Scenario: Tab Selection
- **WHEN** viewing Data Management
- **THEN** tabs for "传感器", "读数", "水文站", "设施", "断面" are visible
- **AND** clicking a tab loads the corresponding entity data into the grid

#### Scenario: Default Tab
- **WHEN** entering Data Management
- **THEN** the "传感器" (Sensors) tab is active by default

### Requirement: Data Grid Display
The system SHALL display database records in a paginated, sortable data grid.

#### Scenario: Paginated Table
- **WHEN** viewing any entity tab
- **THEN** records are displayed in a table with columns specific to the entity type
- **AND** pagination controls show current page, total pages, and navigation buttons

#### Scenario: Sorting
- **WHEN** clicking a column header
- **THEN** the grid sorts by that column in ascending order
- **AND** clicking again toggles to descending order

#### Scenario: Page Size
- **WHEN** using the page size selector
- **THEN** options of 10, 20, 50 records per page are available

### Requirement: Search and Filter
The system SHALL provide search and filtering capabilities for the data grid.

#### Scenario: Text Search
- **WHEN** typing in the search input
- **THEN** results are filtered to match the search term across relevant text fields
- **AND** search is debounced by 300ms to prevent excessive API calls

#### Scenario: Field Filters
- **WHEN** using filter dropdowns (e.g., status, type)
- **THEN** results are filtered to match the selected values

#### Scenario: Clear Filters
- **WHEN** clicking the clear button
- **THEN** all search and filter criteria are reset

### Requirement: CRUD Operations
The system SHALL support Create, Read, Update, and Delete operations for data entities.

#### Scenario: Create Record
- **WHEN** clicking the "新增" button
- **THEN** a modal form opens with fields for the active entity type
- **AND** submitting the form creates a new record

#### Scenario: Edit Record
- **WHEN** clicking the edit icon on a row
- **THEN** a modal form opens pre-filled with the record's current values
- **AND** submitting the form updates the record

#### Scenario: Delete Record
- **WHEN** clicking the delete icon on a row
- **THEN** a confirmation dialog appears
- **AND** confirming the action deletes the record from the database

### Requirement: Data Export
The system SHALL support exporting data to file formats.

#### Scenario: CSV Export
- **WHEN** clicking the "导出" button
- **THEN** the current filtered dataset is downloaded as a CSV file
