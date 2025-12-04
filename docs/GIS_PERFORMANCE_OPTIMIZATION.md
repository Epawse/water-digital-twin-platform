# GIS Drawing Tool Performance Optimization

## 问题诊断 (2025-12-04)

### 症状
- 动态预览功能已实现,但鼠标移动时非常不流畅
- 用户体验差,严重影响绘制操作

### 根本原因分析

1. **过于频繁的实体创建/销毁**
   - 原实现:每次鼠标移动 (`handleMouseMove`) → 调用 `updatePreview()` → 先 `clearPreviewEntities()` 删除所有预览实体 → 重新创建新的预览实体
   - 创建/销毁 Cesium.Entity 是非常昂贵的操作
   - 即使有节流(16ms),仍然会导致频繁的 GC 和渲染压力

2. **节流时间不足**
   - 原设置: `MOVE_THROTTLE_MS = 16` (~60fps)
   - 对于实体创建/销毁来说太快了

## 优化方案

### 1. 使用 CallbackProperty 替代静态属性

**优化前:**
```typescript
// 每次鼠标移动都创建新实体
const previewLine = this.viewer.entities.add({
  polyline: {
    positions: [lastCartesian, this.drawCursorPosition], // 静态值
    // ...
  }
})
```

**优化后:**
```typescript
// 只创建一次实体,使用 CallbackProperty 动态更新
const previewLine = this.viewer.entities.add({
  polyline: {
    positions: new Cesium.CallbackProperty(() => {
      return this.drawCursorPosition ? [lastCartesian, this.drawCursorPosition] : []
    }, false), // 动态回调
    // ...
  }
})
```

**优势:**
- 实体只创建一次
- 鼠标移动时只更新 `drawCursorPosition` 值
- Cesium 自动调用 CallbackProperty 回调更新渲染
- 无需手动删除/重新创建实体

### 2. 智能预览重建策略

**优化前:**
```typescript
private updatePreview(): void {
  if (!this.drawCursorPosition) return

  this.clearPreviewEntities() // 每次都清除!

  switch (this.geometryType) {
    case 'line': this.updateLinePreview(); break
    // ...
  }
}
```

**优化后:**
```typescript
private updatePreview(): void {
  if (!this.drawCursorPosition) return

  // 只在顶点数量变化时重新创建
  const needsRecreate = this.vertices.length !== this.lastPreviewVerticesCount

  if (needsRecreate) {
    this.clearPreviewEntities()
    this.lastPreviewVerticesCount = this.vertices.length
    // 重新创建预览实体
  }
  // 否则 CallbackProperty 自动更新,无需操作
}
```

**优势:**
- 鼠标移动时:0 次实体创建/销毁(CallbackProperty 自动更新)
- 点击添加顶点时:才重新创建预览实体(必要操作)
- 大幅减少 Entity 管理开销

### 3. 增加节流时间

**优化:**
```typescript
private readonly MOVE_THROTTLE_MS = 50 // ~20fps - optimized for preview performance
```

**理由:**
- 20fps 对于预览来说已经足够流畅
- 减少回调函数执行频率
- 降低 CPU 负担

## 性能提升预估

### 优化前
- **鼠标移动**: 每 16ms 创建/销毁 1-3 个 Entity
- **1秒内**: ~60 次 × 3 = 180 次 Entity 创建/销毁
- **结果**: 卡顿、GC 压力大

### 优化后
- **鼠标移动**: 每 50ms 触发 CallbackProperty 回调
- **1秒内**: ~20 次回调,0 次 Entity 创建/销毁
- **点击顶点**: 仅创建 1-3 个 Entity(按需)
- **结果**: 流畅,无卡顿

## 优化代码涵盖范围

1. ✅ **LineGraphic 预览** (`updateLinePreview`)
2. ✅ **PolygonGraphic 预览** (`updatePolygonPreview`)
3. ✅ **CircleGraphic 预览** (`updateCirclePreview`)
4. ✅ **RectangleGraphic 预览** (`updateRectanglePreview`)
5. ✅ **智能重建策略** (`updatePreview`)
6. ✅ **节流优化** (`MOVE_THROTTLE_MS`)
7. ✅ **状态重置** (`reset`)

## 技术细节

### CallbackProperty 使用场景

```typescript
// 动态位置
position: new Cesium.CallbackProperty(() => this.drawCursorPosition || centerCartesian, false)

// 动态文本
text: new Cesium.CallbackProperty(() => {
  if (!this.drawCursorPosition) return ''
  const radius = Cesium.Cartesian3.distance(centerCartesian, this.drawCursorPosition)
  return `r=${(radius / 1000).toFixed(2)}km`
}, false)

// 动态几何
hierarchy: new Cesium.CallbackProperty(() => {
  if (!this.drawCursorPosition) return new Cesium.PolygonHierarchy(staticPositions)
  return new Cesium.PolygonHierarchy([...staticPositions, this.drawCursorPosition])
}, false)
```

**注意:**
- 第二个参数 `false` 表示回调函数不是固定的(isConstant)
- 这样 Cesium 每帧都会调用回调检查更新

### 状态管理

```typescript
/** 上次预览时的顶点数量(用于检测是否需要重新创建预览) */
private lastPreviewVerticesCount: number = 0

private reset(): void {
  this.vertices = []
  this.drawCursorPosition = null
  this.lastPreviewVerticesCount = 0 // 重置计数器
}
```

## 测试验证

### 验证方法
1. 打开浏览器开发者工具 Performance 面板
2. 开始性能录制
3. 激活圆形/矩形/多边形绘制工具
4. 移动鼠标观察预览
5. 停止录制,分析:
   - FPS 是否稳定在 60fps
   - 是否有频繁的 GC (Garbage Collection)
   - Entity 数量是否稳定

### 预期结果
- ✅ FPS: 稳定 60fps (优化前可能降到 20-30fps)
- ✅ 内存: 无频繁波动
- ✅ Entity 数量: 绘制过程中保持稳定
- ✅ 用户体验: 预览跟随鼠标流畅无延迟

## 未来优化方向

1. **WebGL 原语 (Primitives)**: 对于大量要素,考虑使用 Primitive API 替代 Entity API
2. **LOD (细节层次)**: 根据相机距离动态调整几何精度
3. **批处理**: 多个要素合并为单个 Primitive
4. **Web Worker**: 复杂计算(如面积/长度)放到 Worker 线程

## 参考资料

- [Cesium Entity API Performance](https://cesium.com/learn/cesiumjs/ref-doc/Entity.html)
- [CallbackProperty Documentation](https://cesium.com/learn/cesiumjs/ref-doc/CallbackProperty.html)
- [Cesium Performance Tips](https://cesium.com/learn/cesiumjs-learn/cesiumjs-performance/)
