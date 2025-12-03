## 1. Backend API - Paginated List Endpoints
- [x] 1.1 Create `backend/app/api/admin.py` router with common pagination logic
- [x] 1.2 Add `GET /api/v1/admin/sensors` with pagination, sorting, search
- [x] 1.3 Add `GET /api/v1/admin/readings` with pagination, time range filter
- [x] 1.4 Add `GET /api/v1/admin/hydrological_stations` with pagination
- [x] 1.5 Add `GET /api/v1/admin/facilities` with pagination
- [x] 1.6 Add `GET /api/v1/admin/sections` with pagination
- [x] 1.7 Create schemas inline in `backend/app/api/admin.py` (PaginatedResponse, etc.)
- [x] 1.8 Register admin router in `backend/app/api/router.py`

## 2. Backend API - CRUD Endpoints
- [x] 2.1 Add `POST /api/v1/admin/sensors` (create sensor)
- [x] 2.2 Add `PUT /api/v1/admin/sensors/{id}` (update sensor)
- [x] 2.3 Add `DELETE /api/v1/admin/sensors/{id}` (soft delete sensor)
- [x] 2.4 Add CRUD endpoints for hydrological_stations
- [x] 2.5 Add CRUD endpoints for facilities
- [x] 2.6 Add CRUD endpoints for sections
- [x] 2.7 Add `DELETE /api/v1/admin/readings/{id}` (hard delete reading)

## 3. Frontend - Data Grid Component
- [x] 3.1 Create `src/components/common/DataGrid/DataGrid.vue` (main container with toolbar, table, pagination)
- [x] 3.2 GridToolbar integrated into DataGrid.vue (search, filters, action buttons)
- [x] 3.3 GridTable integrated into DataGrid.vue (sortable table with row actions)
- [x] 3.4 GridPagination integrated into DataGrid.vue (page navigation controls)
- [x] 3.5 Create `FormModal.vue` (create/edit modal wrapper)
- [x] 3.6 Create `DeleteConfirmModal.vue` (confirmation dialog)

## 4. Frontend - State Management
- [x] 4.1 Create `src/stores/dataManagement.ts` (pagination, filters, CRUD actions)
- [x] 4.2 Add API client functions in `src/api/admin.ts`
- [x] 4.3 Entity column configurations defined in DataGovernance.vue (inline)

## 5. Frontend - Page Integration
- [x] 5.1 Redesign `src/views/DataGovernance.vue` with tab layout
- [x] 5.2 Remove `MonitoringData.vue` component from page
- [x] 5.3 Integrate DataGrid with entity tabs
- [x] 5.4 Wire up CRUD modals with form validation
- [x] 5.5 Add export functionality (CSV download)

## 6. Validation & Testing
- [ ] 6.1 Test paginated API endpoints with curl
- [ ] 6.2 Test CRUD operations (create, update, delete)
- [ ] 6.3 Verify frontend pagination and filtering
- [ ] 6.4 Test search functionality across entities
- [x] 6.5 Run `npm run build` to verify no TypeScript errors
