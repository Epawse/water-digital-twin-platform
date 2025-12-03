# Design: enhance-data-management

## Overview

Transform the Data Governance page from a read-only dashboard with mock data into a full-featured data management interface with:
- Tabbed navigation for different data entity types
- Paginated data grid with sorting, filtering, and search
- CRUD operations with inline editing and modal forms
- Real data from the PostgreSQL database

## Architecture

### Frontend Components

```
src/views/DataGovernance.vue (Redesigned)
├── DataEntityTabs.vue (Tab navigation)
├── DataGrid.vue (Reusable data grid with pagination)
│   ├── GridToolbar.vue (Search, filters, actions)
│   ├── GridTable.vue (Table with sorting)
│   ├── GridPagination.vue (Page controls)
│   └── GridRowActions.vue (Edit/Delete buttons)
├── EntityFormModal.vue (Create/Edit modal)
└── DeleteConfirmModal.vue (Delete confirmation)
```

### Data Entity Categories

| Tab | Entity | Primary Fields | API Endpoint |
|-----|--------|----------------|--------------|
| 传感器 | Sensor | point_code, status, section, type | `/api/v1/admin/sensors` |
| 读数 | SensorReading | reading_time, value, sensor, metric | `/api/v1/admin/readings` |
| 水文站 | HydrologicalStation | station_code, station_name, river | `/api/v1/admin/hydrological_stations` |
| 设施 | MonitoringFacility | code, name, facility_type, location | `/api/v1/admin/facilities` |
| 断面 | MonitoringSection | code, name, section_type, chainage | `/api/v1/admin/sections` |
| 产品 | RasterProduct/VectorProduct/ModelProduct | name, type, created_at | `/api/v1/admin/products` |

### Backend API Design

#### Paginated List Pattern

```
GET /api/v1/admin/{entity}
Query params:
  - page: int (1-based)
  - page_size: int (10-100, default 20)
  - sort_by: string (column name)
  - sort_order: "asc" | "desc"
  - search: string (full-text search)
  - filter_{field}: value (field-specific filters)

Response:
{
  "items": [...],
  "total": int,
  "page": int,
  "page_size": int,
  "total_pages": int
}
```

#### CRUD Endpoints

```
POST   /api/v1/admin/{entity}        # Create
GET    /api/v1/admin/{entity}/{id}   # Read single
PUT    /api/v1/admin/{entity}/{id}   # Update
DELETE /api/v1/admin/{entity}/{id}   # Delete
```

### UI Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  数据管理中心                               [导出] [+ 新增]     │
├─────────────────────────────────────────────────────────────────┤
│  [传感器] [读数] [水文站] [设施] [断面] [产品]                  │
├─────────────────────────────────────────────────────────────────┤
│  🔍 搜索...   [状态 ▼] [类型 ▼] [时间范围]        共 1,234 条   │
├─────────────────────────────────────────────────────────────────┤
│  编号 ▲  │  名称      │  类型    │  状态   │  更新时间  │ 操作 │
├──────────┼────────────┼──────────┼─────────┼────────────┼──────┤
│  S001    │  Pcg-1     │  渗压计  │  在线   │  12:00:01  │ ✏️ 🗑 │
│  S002    │  Rcg-2     │  应力计  │  离线   │  11:58:30  │ ✏️ 🗑 │
│  ...     │  ...       │  ...     │  ...    │  ...       │ ...  │
├─────────────────────────────────────────────────────────────────┤
│                    [<] [1] [2] [3] ... [62] [>]                 │
└─────────────────────────────────────────────────────────────────┘
```

### State Management

New store: `src/stores/dataManagement.ts`

```typescript
interface DataManagementState {
  // Current tab/entity
  activeEntity: EntityType;

  // Pagination
  currentPage: number;
  pageSize: number;
  totalItems: number;

  // Sorting
  sortBy: string | null;
  sortOrder: 'asc' | 'desc';

  // Filtering
  searchQuery: string;
  filters: Record<string, any>;

  // Data
  items: any[];
  isLoading: boolean;
  error: string | null;

  // Selected items for bulk actions
  selectedIds: number[];

  // Modal state
  editingItem: any | null;
  isFormModalOpen: boolean;
}
```

## Key Decisions

### 1. Single DataGrid vs Entity-specific Tables

**Decision**: Single reusable `DataGrid` component with configuration per entity.

**Rationale**:
- Reduces code duplication
- Consistent UX across entities
- Column definitions passed as props

### 2. Inline Edit vs Modal Edit

**Decision**: Modal form for create/edit, inline display only.

**Rationale**:
- Complex entities need more space for editing
- Validation feedback clearer in modal
- Simpler table rendering

### 3. API Namespace

**Decision**: New `/api/v1/admin/` namespace for CRUD operations.

**Rationale**:
- Separates admin operations from read-only public endpoints
- Easier to apply auth/permission middleware later
- Doesn't break existing frontend code

### 4. Delete Strategy

**Decision**: Soft delete with confirmation modal, hard delete for readings only.

**Rationale**:
- Readings are high-volume, soft delete would bloat DB
- Core entities (sensors, stations) need audit trail
- Confirmation prevents accidental deletion

## Performance Considerations

1. **Database indexes**: Ensure indexes on frequently filtered/sorted columns
2. **Lazy loading**: Only fetch data for active tab
3. **Debounced search**: 300ms debounce on search input
4. **Virtual scrolling**: Consider for page sizes > 50 (future enhancement)

## Security Considerations

1. **Input validation**: Pydantic schemas validate all write operations
2. **SQL injection prevention**: SQLAlchemy ORM prevents raw SQL injection
3. **CORS**: Already configured in backend
4. **Future**: Add role-based access control for write operations
