## ADDED Requirements
### Requirement: Focus Mode
The system SHALL switch to "Focus Mode" when entering management modules (Data, Device, AI).
In Focus Mode:
1.  The 3D map background is blurred and dimmed.
2.  The UI is presented in a centered, modal-like container.
3.  Sidebars are hidden.

#### Scenario: Visual Distraction Reduction
- **WHEN** the user clicks "Data" in the dock
- **THEN** the map becomes blurry
- **AND** a large central panel appears

### Requirement: Data Quality Monitoring
The system SHALL display real-time statistics on data ingestion quality.

#### Scenario: Stats Display
- **WHEN** viewing Data Governance
- **THEN** cards for "Intercepted Anomalies" and "Auto-Fixed" are shown with counters

### Requirement: Cleaning Logs
The system SHALL provide a tabular view of recent data cleaning actions.

#### Scenario: Log Table
- **WHEN** viewing the table
- **THEN** rows show Timestamp, Station ID, Raw Value, and Cleaning Rule (e.g., "Extreme Value Check")
