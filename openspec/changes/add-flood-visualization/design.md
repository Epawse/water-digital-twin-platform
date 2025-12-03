# Design: Flood Visualization

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Simulation Page                          │
├──────────────┬──────────────────────────┬──────────────────┤
│  SimConfig   │      Cesium Viewer       │   SimResult      │
│  (Left)      │   ┌──────────────────┐   │   (Right)        │
│              │   │  FloodLayer      │   │                  │
│  - Engine    │   │  - WaterSurface  │   │  - Metrics       │
│  - Params    │   │  - FloodPolygons │   │  - Charts        │
│              │   └──────────────────┘   │                  │
├──────────────┴──────────────────────────┴──────────────────┤
│                   TimelineControl                           │
│                   (drives animation)                        │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

1. **TimelineControl** → `simulationStore.state.progress` (0-100)
2. **FloodLayer** watches `progress` → interpolates water level & extent
3. **FloodDataGenerator** provides mock flood polygon sequences
4. **Cesium** renders water surface with animated material

## Key Components

### 1. FloodLayer.vue
- 挂载在Simulation.vue中
- 监听`simulationStore.state`变化
- 管理Cesium Entity/Primitive生命周期

### 2. FloodDataGenerator (utils/floodData.ts)
- 生成模拟洪水数据
- 输入：时间步(0-100)、洪水事件配置
- 输出：`{ polygons: Coordinate[][], waterLevel: number, area: number }`

### 3. Water Material
- 使用Cesium内置水面材质或自定义Shader
- 参数：baseWaterColor, frequency, amplitude

## Mock Data Structure

```typescript
interface FloodFrame {
  time: number;           // 0-100
  waterLevel: number;     // 水位高度(m)
  polygons: number[][][]; // [[[lon,lat], ...], ...]
  area: number;           // 淹没面积(km²)
}

interface FloodScenario {
  id: string;
  name: string;
  region: { center: [lon, lat], extent: number };
  frames: FloodFrame[];
}
```

## Performance Considerations
- 使用`CallbackProperty`实现平滑动画
- 限制多边形顶点数（每个polygon < 100点）
- 水面材质使用简化版本（无反射）
