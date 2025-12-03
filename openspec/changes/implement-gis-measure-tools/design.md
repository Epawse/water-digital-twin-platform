# Design: GIS Measure Tools

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      TopRibbon                              │
│  ┌─────────┐ ┌─────────┐                                   │
│  │ 测距 📏 │ │ 面积 ⬡ │  ← Tool Buttons (toggle active)    │
│  └────┬────┘ └────┬────┘                                   │
└───────┼──────────┼─────────────────────────────────────────┘
        │          │
        ▼          ▼
┌─────────────────────────────────────────────────────────────┐
│                   MeasureManager (Store)                    │
│  - activeTool: 'distance' | 'area' | null                  │
│  - measurements: Measurement[]                              │
│  - currentDrawing: DrawingState                            │
└─────────────────────────────────────────────────────────────┘
        │
        ▼
┌─────────────────────────────────────────────────────────────┐
│              MeasureLayer.vue (in App.vue)                  │
│  ┌──────────────────┐  ┌──────────────────┐                │
│  │ DistanceHandler  │  │ AreaHandler      │                │
│  │ - preview line   │  │ - preview polygon│                │
│  │ - radius circle  │  │ - vertex markers │                │
│  │ - result label   │  │ - result label   │                │
│  └──────────────────┘  └──────────────────┘                │
└─────────────────────────────────────────────────────────────┘
        │
        ▼
┌─────────────────────────────────────────────────────────────┐
│                 MeasurePanel.vue (Floating)                 │
│  - 历史记录列表                                              │
│  - 新增/删除/清空按钮                                        │
│  - 单条记录：类型图标 + 数值 + 删除按钮                       │
└─────────────────────────────────────────────────────────────┘
```

## State Management

### measureStore.ts
```typescript
interface MeasureState {
  activeTool: 'distance' | 'area' | null;
  isPanelVisible: boolean;
  measurements: Measurement[];
  currentDrawing: {
    type: 'distance' | 'area' | null;
    points: Cartesian3[];
    previewPoint: Cartesian3 | null;
  };
}

interface Measurement {
  id: string;
  type: 'distance' | 'area';
  points: [number, number, number][]; // [lon, lat, height][]
  value: number; // meters or square meters
  createdAt: Date;
  label?: string;
}
```

## Cesium Entities Structure

### Distance Measurement
```
Entity Group (id: `measure-distance-${id}`)
├── Point Entity (起点)
├── Point Entity (终点)
├── Polyline Entity (连接线)
├── Ellipse Entity (圆周辅助线，绘制时显示)
└── Label Entity (距离标注)
```

### Area Measurement
```
Entity Group (id: `measure-area-${id}`)
├── Point Entity × N (顶点)
├── Polygon Entity (填充)
├── Polyline Entity (边界线)
└── Label Entity (面积标注)
```

## Event Handling

### Distance Tool Events
| Event | State | Action |
|-------|-------|--------|
| LEFT_CLICK | No points | Set start point, show circle preview |
| MOUSE_MOVE | 1 point | Update preview line & circle |
| LEFT_CLICK | 1 point | Set end point, complete measurement |
| RIGHT_CLICK | Any | Cancel current drawing |

### Area Tool Events
| Event | State | Action |
|-------|-------|--------|
| LEFT_CLICK | Any | Add vertex |
| MOUSE_MOVE | ≥1 points | Update preview polygon |
| LEFT_DOUBLE_CLICK | ≥3 points | Complete polygon |
| RIGHT_CLICK | Any | Cancel current drawing |

## API Integration (Optional)

```typescript
// POST /api/measurements
interface CreateMeasurementRequest {
  type: 'distance' | 'area';
  points: [number, number, number][];
  value: number;
  label?: string;
}

// GET /api/measurements
interface MeasurementsResponse {
  items: Measurement[];
  total: number;
}

// DELETE /api/measurements/:id
```

## Visual Style
- **起点/终点**: 8px圆点，neon-cyan色，发光效果
- **连接线**: 2px宽，neon-cyan虚线（绘制中）/ 实线（完成）
- **圆周**: 1px白色虚线，50%透明度
- **面积填充**: neon-cyan，20%透明度
- **标注**: 白色文字，黑色描边，显示在线段/多边形中心
