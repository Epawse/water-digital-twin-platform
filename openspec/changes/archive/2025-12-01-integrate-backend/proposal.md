# Change: Integrate Backend

## Why
The project now includes a Python FastAPI backend (copied from an existing implementation) that handles data ingestion (Excel), PostgreSQL storage, and API endpoints for sensors and monitoring data. We need to integrate this into our OpenSpec workflow and current architecture.

## What Changes
- Acknowledge the new `backend/` directory structure.
- Configure the frontend to consume these APIs (instead of mock data where applicable).
- Ensure `requirements.txt` and environment setup are documented.
- Add a "Backend" capability to OpenSpec to track API changes.

## Impact
- Affected specs: `platform`, `backend` (new)
- Affected code: `src/stores/`, `backend/`
