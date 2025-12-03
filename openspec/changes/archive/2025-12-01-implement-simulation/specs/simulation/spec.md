## ADDED Requirements
### Requirement: Simulation Engines
The system SHALL support configuration for three specific simulation engines:
1.  **HEC-RAS** (Flood Evolution)
2.  **MIKE Hydro** (Basin Hydrodynamics)
3.  **HST-Stat** (Dam Safety Regression)

#### Scenario: Engine Selection
- **WHEN** the user selects "HST-Stat" from the dropdown
- **THEN** the parameter form updates to show "Water Level", "Temperature", and "Aging Factor"

### Requirement: Parameter Configuration
The system SHALL provide real-time input controls (sliders/inputs) for simulation parameters.

#### Scenario: Flow Adjustment
- **WHEN** the user drags the "Inflow" slider
- **THEN** the value updates in real-time
- **AND** the store state is updated

### Requirement: Result Visualization
The system SHALL display key result metrics appropriate to the selected engine.

#### Scenario: Flood Result
- **WHEN** HEC-RAS is active
- **THEN** "Submerged Area" (km²) is displayed in Red color

#### Scenario: Dam Result
- **WHEN** HST-Stat is active
- **THEN** "Radial Displacement" (mm) is displayed in Yellow color

### Requirement: Time Control
The system SHALL provide a timeline playback control at the bottom of the screen for time-series simulation data.

#### Scenario: Playback
- **WHEN** the user clicks "Play"
- **THEN** the progress bar advances
- **AND** the time label updates (e.g., "+02:00h")
