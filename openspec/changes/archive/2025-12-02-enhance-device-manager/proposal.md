# Proposal: enhance-device-manager

## Why

The current Device Manager (设备运维中心) page has usability issues:
- Charts (DeviceGaugeChart, ProtocolPieChart) are only 140px tall - too small to read
- Data is primarily simulated/mock (latency, logs are client-side generated)
- Could leverage real database data (sensors, readings) for more meaningful display

## What Changes

1. **Increase chart heights** from 140px to 220px for better visibility
2. **Improve layout** to better utilize available space
3. **Connect to real database data** via existing admin API endpoints
4. **Show actual sensor counts** and status distribution from the database
5. **Improve DeviceTopology** to show real sensors with their actual status

## Scope

- Frontend only changes
- Use existing admin API endpoints (no new backend work needed)
- Minimal changes to maintain existing functionality
