# GIS 功能迁移计划

> 从 OpenLayers 2D 到 Cesium 3D 的功能迁移方案
>
> 目标项目：水利数字孪生基础平台
>
> 创建时间：2025-12-03

---

## 📋 迁移优先级矩阵

| 功能 | 2D 实现 | 3D 可行性 | 优先级 | 状态 |
|------|---------|-----------|--------|------|
| **测量工具** |
| 距离测量 | ✅ LineString | ✅ Cesium 大地测量 | **P0** | ✅ **已完成** |
| 面积测量 | ✅ Polygon.getArea() | ✅ EllipsoidTangentPlane | **P0** | ✅ **已完成** |
| **绘制工具** |
| 点标注 | ✅ Draw Point | ✅ Entity Point | **P1** | 🔄 待实现 |
| 线绘制 | ✅ Draw LineString | ✅ Entity Polyline | **P1** | 🔄 待实现 |
| 多边形绘制 | ✅ Draw Polygon | ✅ Entity Polygon | **P1** | 🔄 待实现 |
| 圆形绘制 | ✅ Draw Circle | ✅ Entity Ellipse | **P1** | 🔄 待实现 |
| 矩形绘制 | ✅ Draw Box | ✅ Entity Rectangle | **P1** | 🔄 待实现 |
| 自由手绘 | ✅ Freehand | ⚠️ 性能受限 | **P3** | ⏸️ 暂不实现 |
| **选择与编辑** |
| 要素选择 | ✅ Select Interaction | ✅ Pick + Highlight | **P1** | 🔄 待实现 |
| 要素移动 | ✅ Translate | ✅ 动态位置更新 | **P2** | 🔄 待实现 |
| 顶点编辑 | ✅ Modify Interaction | ✅ CallbackProperty | **P2** | 🔄 待实现 |
| 要素删除 | ✅ 键盘/按钮 | ✅ 已有删除逻辑 | **P0** | ✅ **已完成** |
| **捕捉功能** |
| 顶点捕捉 | ✅ Snap to Vertex | ✅ 计算最近点 | **P2** | 🔄 待实现 |
| 边捕捉 | ✅ Snap to Edge | ✅ 投影到线段 | **P2** | 🔄 待实现 |
| **样式系统** |
| 颜色配置 | ✅ Fill/Stroke | ✅ Material | **P1** | 🔄 待实现 |
| 线型样式 | ✅ LineDash | ✅ PolylineDash | **P2** | 🔄 待实现 |
| 文本标注 | ✅ Text Style | ✅ Label | **P1** | 🔄 待实现 |
| **数据管理** |
| 属性编辑 | ✅ Feature.set() | ✅ Entity.properties | **P2** | 🔄 待实现 |
| GeoJSON 导入 | ✅ GeoJSON Format | ✅ GeoJsonDataSource | **P2** | 🔄 待实现 |
| GeoJSON 导出 | ✅ writeFeatures | ✅ 手动序列化 | **P2** | 🔄 待实现 |
| Shapefile 导入 | ✅ shpjs | ✅ shpjs + 转换 | **P3** | ⏸️ 暂不实现 |

---

## 🎯 Phase 1: 增强绘制工具（P1 优先级）

### 目标
在现有测量工具基础上，添加完整的几何绘制功能

### 功能清单

#### 1.1 点标注工具
```typescript
// 功能描述
- 单击地图添加点标记
- 支持自定义图标
- 支持文本标注
- 支持颜色配置

// Cesium 实现
viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(lng, lat),
  point: {
    pixelSize: 10,
    color: Cesium.Color.RED,
    outlineColor: Cesium.Color.WHITE,
    outlineWidth: 2
  },
  label: {
    text: '标注文本',
    font: '14px sans-serif',
    fillColor: Cesium.Color.WHITE
  }
})
```

#### 1.2 线绘制工具
```typescript
// 功能描述
- 连续点击绘制折线
- 右键或 ESC 完成
- 支持线型（实线、虚线）
- 显示实时长度

// Cesium 实现
viewer.entities.add({
  polyline: {
    positions: Cesium.Cartesian3.fromDegreesArray([
      lng1, lat1, lng2, lat2, ...
    ]),
    width: 3,
    material: new Cesium.PolylineDashMaterialProperty({
      color: Cesium.Color.CYAN,
      dashLength: 16
    }),
    clampToGround: true
  }
})
```

#### 1.3 多边形绘制工具
```typescript
// 功能描述
- 连续点击绘制顶点
- 双击完成（已实现）
- 支持填充颜色和透明度
- 显示实时面积

// 状态：基础功能已实现，需增强样式配置
```

#### 1.4 圆形绘制工具
```typescript
// 功能描述
- 第一次点击确定圆心
- 拖动确定半径
- 第二次点击完成

// Cesium 实现
viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(centerLng, centerLat),
  ellipse: {
    semiMinorAxis: radius,
    semiMajorAxis: radius,
    material: Cesium.Color.YELLOW.withAlpha(0.3),
    outline: true,
    outlineColor: Cesium.Color.YELLOW,
    outlineWidth: 3
  }
})
```

#### 1.5 矩形绘制工具
```typescript
// 功能描述
- 拖拽方式绘制矩形
- 支持按住 Shift 绘制正方形（可选）

// Cesium 实现
viewer.entities.add({
  rectangle: {
    coordinates: Cesium.Rectangle.fromDegrees(west, south, east, north),
    material: Cesium.Color.RED.withAlpha(0.3),
    outline: true,
    outlineColor: Cesium.Color.RED,
    outlineWidth: 3
  }
})
```

---

## 🎯 Phase 2: 要素选择与编辑（P1-P2）

### 2.1 要素选择（P1）

#### 功能描述
- 点击选中已绘制的要素
- 高亮显示选中状态
- 显示要素属性
- 支持多选（Ctrl+Click）

#### 实现方案
```typescript
// 1. 拾取要素
const pickedObject = viewer.scene.pick(screenPosition)

// 2. 高亮显示
if (Cesium.defined(pickedObject)) {
  const entity = pickedObject.id

  // 保存原始颜色
  originalColor = entity.polygon.material.color.getValue()

  // 设置高亮颜色
  entity.polygon.material = Cesium.Color.YELLOW.withAlpha(0.7)
}

// 3. 显示属性面板
showPropertiesPanel(entity.properties)
```

### 2.2 要素移动（P2）

#### 功能描述
- 拖拽选中的要素
- 实时更新位置
- 支持 Undo/Redo

#### 实现方案
```typescript
// 使用 ScreenSpaceEventHandler 监听拖拽
handler.setInputAction((movement) => {
  if (isDragging && selectedEntity) {
    const cartesian = scene.pickPosition(movement.endPosition)

    // 更新实体位置
    selectedEntity.position = cartesian

    // 或更新多边形顶点
    updatePolygonPositions(selectedEntity, offset)
  }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
```

### 2.3 顶点编辑（P2）

#### 功能描述
- 双击要素进入编辑模式
- 拖拽顶点修改几何
- 删除顶点（Shift+Click）
- 插入顶点（边中点）

#### 实现方案
```typescript
// 1. 显示可编辑顶点
vertices.forEach((position, index) => {
  viewer.entities.add({
    position: position,
    point: {
      pixelSize: 8,
      color: Cesium.Color.ORANGE,
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 2
    },
    properties: {
      type: 'edit_vertex',
      parentEntity: entity,
      vertexIndex: index
    }
  })
})

// 2. 拖拽顶点更新几何
// 使用 CallbackProperty 动态更新
entity.polygon.hierarchy = new Cesium.CallbackProperty(() => {
  return new Cesium.PolygonHierarchy(editableVertices)
}, false)
```

---

## 🎯 Phase 3: 捕捉与样式系统（P2）

### 3.1 捕捉功能

#### 功能描述
- 自动捕捉到附近的顶点（10像素容差）
- 自动捕捉到边（投影到最近边）
- 视觉反馈（高亮捕捉目标）

#### 实现方案
```typescript
function findSnapTarget(screenPosition, tolerance = 10) {
  // 1. 检查附近顶点
  for (const entity of allEntities) {
    const vertices = getEntityVertices(entity)
    for (const vertex of vertices) {
      const screenPos = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
        scene, vertex
      )
      if (Cesium.Cartesian2.distance(screenPos, screenPosition) < tolerance) {
        return { type: 'vertex', position: vertex, entity }
      }
    }
  }

  // 2. 检查边
  // ... 计算点到线段的投影距离

  return null
}
```

### 3.2 样式配置面板

#### 功能描述
- 填充颜色选择器
- 边框颜色选择器
- 线宽调整（1-10px）
- 透明度滑块（0-100%）
- 线型选择（实线/虚线）

#### UI 组件
```vue
<template>
  <div class="style-panel">
    <div class="style-item">
      <label>填充颜色</label>
      <input type="color" v-model="fillColor" />
    </div>
    <div class="style-item">
      <label>边框颜色</label>
      <input type="color" v-model="strokeColor" />
    </div>
    <div class="style-item">
      <label>线宽</label>
      <el-slider v-model="strokeWidth" :min="1" :max="10" />
    </div>
    <div class="style-item">
      <label>透明度</label>
      <el-slider v-model="opacity" :min="0" :max="100" />
    </div>
  </div>
</template>
```

---

## 🎯 Phase 4: 数据管理（P2）

### 4.1 属性编辑

#### 功能描述
- 编辑要素名称
- 添加自定义属性
- 属性类型：文本、数字、日期

#### 数据结构
```typescript
interface FeatureProperties {
  id: string
  name: string
  type: 'point' | 'line' | 'polygon' | 'circle' | 'rectangle'
  style: StyleConfig
  customAttributes: Record<string, any>
  createdAt: Date
  updatedAt: Date
}
```

### 4.2 GeoJSON 导入导出

#### 导出功能
```typescript
function exportToGeoJSON() {
  const features = measurements.map(m => ({
    type: 'Feature',
    properties: {
      id: m.id,
      type: m.type,
      value: m.type === 'distance' ? m.distance : m.area,
      createdAt: m.createdAt
    },
    geometry: {
      type: m.type === 'distance' ? 'LineString' : 'Polygon',
      coordinates: formatCoordinates(m)
    }
  }))

  const geojson = {
    type: 'FeatureCollection',
    features
  }

  downloadJSON(geojson, 'measurements.geojson')
}
```

#### 导入功能
```typescript
async function importFromGeoJSON(file: File) {
  const geojson = JSON.parse(await file.text())

  geojson.features.forEach(feature => {
    const { geometry, properties } = feature

    // 根据几何类型创建相应的 Cesium Entity
    if (geometry.type === 'Polygon') {
      addPolygonEntity(geometry.coordinates, properties)
    } else if (geometry.type === 'LineString') {
      addLineEntity(geometry.coordinates, properties)
    }
    // ... 其他类型
  })
}
```

---

## 📐 技术实现对照表

### 2D OpenLayers → 3D Cesium 映射

| OpenLayers 概念 | Cesium 概念 | 说明 |
|----------------|-------------|------|
| **数据层** |
| `Feature` | `Entity` | 单个地理要素 |
| `VectorSource` | `EntityCollection` | 要素集合 |
| `VectorLayer` | `CustomDataSource` | 图层容器 |
| **几何类型** |
| `Point` | `PointGraphics` | 点 |
| `LineString` | `PolylineGraphics` | 线 |
| `Polygon` | `PolygonGraphics` | 面 |
| `Circle` | `EllipseGraphics` | 圆 |
| `Box` | `RectangleGraphics` | 矩形 |
| **样式** |
| `Fill` | `ColorMaterialProperty` | 填充 |
| `Stroke` | `PolylineOutlineMaterial` | 边框 |
| `Text` | `LabelGraphics` | 文本 |
| `Icon` | `BillboardGraphics` | 图标 |
| **交互** |
| `Draw` | `ScreenSpaceEventHandler` | 绘制 |
| `Select` | `scene.pick()` | 选择 |
| `Modify` | `CallbackProperty` | 编辑 |
| `Snap` | 距离计算 | 捕捉 |
| **坐标** |
| `[x, y]` (EPSG:3857) | `Cartesian3` (WGS84) | 坐标系 |
| `transform()` | `Cartographic` ↔ `Cartesian3` | 转换 |

---

## 🎨 UI/UX 设计建议

### 工具栏布局

```
┌─────────────────────────────────────────────────────────┐
│  🎯 选择  │  📍 点  │  📏 线  │  ▭ 面  │  ⭕ 圆  │  ▢ 矩形  │
├─────────────────────────────────────────────────────────┤
│  ✂️ 编辑  │  🎨 样式  │  📤 导出  │  📥 导入  │  🗑️ 清空  │
└─────────────────────────────────────────────────────────┘
```

### 样式面板（侧边栏）

```
╔═══════════════════════════╗
║  🎨 样式配置              ║
╠═══════════════════════════╣
║  填充颜色  [🎨]           ║
║  ▓▓▓▓▓▓▓▓▓▓▓ 50%         ║
║                           ║
║  边框颜色  [🎨]           ║
║  线宽      [━━━●━━] 3px  ║
║  线型      [实线 ▼]      ║
║                           ║
║  文本标注  [输入框...]   ║
║  字体大小  [14 ▼]        ║
╚═══════════════════════════╝
```

### 属性面板

```
╔═══════════════════════════╗
║  📋 要素属性              ║
╠═══════════════════════════╣
║  类型      多边形         ║
║  面积      1,234.56 m²   ║
║  周长      152.34 m       ║
║  创建时间  2025-12-03    ║
║                           ║
║  [➕ 添加属性]            ║
║  ────────────────────    ║
║  [✏️ 编辑] [🗑️ 删除]      ║
╚═══════════════════════════╝
```

---

## 📅 实施时间表

### Sprint 1: 增强绘制工具（2-3天）
- ✅ 距离测量（已完成）
- ✅ 面积测量（已完成）
- 🔄 点标注工具
- 🔄 线绘制工具
- 🔄 圆形绘制工具
- 🔄 矩形绘制工具

### Sprint 2: 选择与编辑（3-4天）
- 要素选择与高亮
- 要素移动
- 顶点编辑
- 样式配置面板

### Sprint 3: 高级功能（2-3天）
- 捕捉功能
- 属性编辑
- GeoJSON 导入导出
- 撤销/重做

---

## 🔍 已有基础设施复用

### 当前项目已实现

✅ **MeasureLayer 基础设施**
- 事件处理框架（点击、双击、右键、移动）
- CallbackProperty 动态更新
- Entity 管理与删除
- 测量历史管理

✅ **UI 组件**
- TopRibbon 工具栏
- MeasurePanel 记录面板
- 折叠/展开交互

✅ **Store 状态管理**
- Pinia Store 架构
- 工具状态管理
- 数据持久化接口

### 需要扩展的部分

🔄 **DrawLayer 组件**（新建）
- 扩展 MeasureLayer 功能
- 支持多种几何类型
- 样式配置接口

🔄 **StylePanel 组件**（新建）
- 颜色选择器
- 样式预设
- 实时预览

🔄 **PropertiesPanel 组件**（新建）
- 属性编辑表单
- 自定义字段
- 数据验证

---

## 🎯 关键技术挑战

### 1. 顶点编辑的性能
**问题**：实时更新多个顶点时可能卡顿
**解决方案**：
- 使用 CallbackProperty 延迟更新
- 节流鼠标移动事件（16ms）
- 限制可编辑要素数量

### 2. 捕捉精度
**问题**：3D 环境下捕捉计算复杂
**解决方案**：
- 屏幕空间计算（2D 投影）
- 空间索引（Quadtree/R-tree）
- 可配置容差

### 3. 样式预览
**问题**：修改样式需要立即反馈
**解决方案**：
- 样式缓存
- 批量更新
- 防抖延迟应用

---

## 📊 预期收益

### 用户价值
- ✅ **完整的 GIS 绘制工具集**：支持所有常用几何类型
- ✅ **直观的编辑体验**：拖拽、顶点编辑、实时预览
- ✅ **数据可管理**：导入导出、属性编辑、持久化

### 技术价值
- ✅ **代码复用**：基于现有测量工具扩展
- ✅ **模块化设计**：独立的 Draw/Edit/Style 组件
- ✅ **可扩展性**：易于添加新的几何类型

### 业务价值
- ✅ **场景标注**：在 3D 场景中标注重要位置
- ✅ **规划辅助**：绘制规划区域、路径
- ✅ **数据采集**：现场标注、测量记录

---

## 🔗 相关资源

- **Cesium 官方文档**: https://cesium.com/learn/cesiumjs/ref-doc/
- **Cesium 绘制示例**: https://sandcastle.cesium.com/
- **GeoJSON 规范**: https://geojson.org/
- **当前项目 OpenSpec**: `/openspec/changes/implement-gis-measure-tools/`

---

**文档版本：** v1.0
**创建时间：** 2025-12-03
**维护者：** Water Digital Twin Team
