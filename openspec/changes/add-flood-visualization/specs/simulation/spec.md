# simulation Specification Delta

## ADDED Requirements

### Requirement: Flood Visualization
The system SHALL render flood extent as animated water surfaces on the Cesium map when HEC-RAS or MIKE Hydro engines are selected.

#### Scenario: Flood Display Activation
- **WHEN** the user selects "HEC-RAS" or "MIKE Hydro" engine
- **AND** a flood event is selected
- **THEN** a water surface polygon appears on the map at the event's location

#### Scenario: Timeline Animation
- **WHEN** the user drags the timeline slider
- **THEN** the flood extent polygon updates to match the time step
- **AND** the water surface color intensity reflects water depth
- **AND** the displayed "淹没面积" metric matches the visual extent

#### Scenario: Engine Switch Cleanup
- **WHEN** the user switches to "HST-Stat" (dam) engine
- **THEN** all flood visualization entities are removed from the map

### Requirement: Flood Data Interpolation
The system SHALL interpolate flood states between keyframes for smooth animation.

#### Scenario: Smooth Transition
- **WHEN** the timeline progress is between two keyframes (e.g., 25% between frame 2 and 3)
- **THEN** the flood polygon coordinates are linearly interpolated
- **AND** the water level value is linearly interpolated
