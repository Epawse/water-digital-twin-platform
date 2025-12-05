# GIS Drawing Toolkit - MVP Plan

> **目标**：实现最小可用版本，快速验证功能价值
> **时间**：4-5 天
> **完成度**：基础可用（约 70%）

## 📋 实施计划

### Day 1-2: 基础交互层

#### 1. 创建 GISLayer.vue（统一图层管理）
**文件**：`src/components/cesium/GISLayer.vue`

**功能**：
- 监听 GISStore 的 toolType 变化
- 根据激活的工具创建对应的 Tool 实例（DrawTool, MeasureTool）
- 处理鼠标事件并转发给活动工具
- 管理工具的生命周期

**参考**：
- 现有 MeasureLayer.vue (634 lines)
- 测试页面的创建逻辑

**验证**：
```bash
# 点击 TopRibbon 按钮
# → GISLayer 激活对应工具
# → 地图上显示鼠标提示
# → 点击地图开始绘制
```

**预估**：8-10 小时

---

#### 2. 实现 DrawTool 交互逻辑

**当前状态**：DrawTool 框架完成，但缺少实际交互

**需要补充**：
```typescript
// src/cesium/gis/tools/DrawTool.ts

class DrawTool extends BaseTool {
  // 已有框架，需要补充：

  private setupMouseHandlers() {
    // LEFT_CLICK: 添加点
    // MOUSE_MOVE: 更新预览
    // RIGHT_CLICK / ESC: 取消绘制
    // DOUBLE_CLICK: 完成绘制（线/多边形）
  }

  private createPreviewGraphic() {
    // 动态预览（鼠标跟随）
  }

  private finalizeGraphic() {
    // 完成绘制，注册到 GISStore
  }
}
```

**验证**：
- ✅ 点工具：单击添加点
- ✅ 线工具：连续点击，右键完成
- ✅ 多边形：连续点击，双击完成
- ✅ 圆形/矩形：两次点击完成

**预估**：6-8 小时

---

### Day 3: 选择与高亮

#### 3. 实现基础选择功能

**新建**：`src/cesium/gis/tools/SelectTool.ts`

**功能**：
```typescript
class SelectTool extends BaseTool {
  activate() {
    // 监听 LEFT_CLICK
  }

  private handleClick(position: Cesium.Cartesian3) {
    // 1. 使用 scene.pick() 拾取实体
    // 2. 查找对应的 Graphic
    // 3. 调用 gisStore.selectFeature(id)
    // 4. 高亮显示
  }

  private highlightFeature(graphic: BaseGraphic) {
    // 改变样式（加粗边框、改变颜色）
  }
}
```

**GISStore 增强**：
```typescript
// 已有 selectedFeatureIds，需要添加：
function selectFeature(id: string) {
  selectedFeatureIds.value.add(id)
  const graphic = getGraphic(id)
  if (graphic) {
    graphic.setHighlighted(true) // 需要在 BaseGraphic 中实现
  }
}
```

**验证**：
- ✅ 点击要素 → 边框变粗/颜色变亮
- ✅ 点击空白 → 取消选择
- ✅ ESC → 取消所有选择

**预估**：4-6 小时

---

### Day 4: GeoJSON 导出

#### 4. 实现 GeoJSON 导出功能

**位置**：`src/cesium/gis/utils/geojson.ts`

**功能**：
```typescript
export function exportToGeoJSON(features: Feature[]): GeoJSON.FeatureCollection {
  return {
    type: 'FeatureCollection',
    features: features.map(f => {
      const graphic = gisStore.getGraphic(f.id)
      return graphic?.toGeoJSON() || null
    }).filter(Boolean)
  }
}

export function downloadGeoJSON(geojson: any, filename: string) {
  const blob = new Blob([JSON.stringify(geojson, null, 2)], {
    type: 'application/json'
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
}
```

**UI**：在 TopRibbon 或测试页面添加"导出 GeoJSON"按钮

**验证**：
- ✅ 点击导出按钮
- ✅ 下载 `.geojson` 文件
- ✅ 文件格式正确（可在 geojson.io 验证）

**预估**：3-4 小时

---

### Day 5: 整合与优化

#### 5. 完善交互体验

**工具提示**：
```typescript
// src/cesium/gis/utils/tooltip.ts
class CursorTooltip {
  show(message: string, position: Cesium.Cartesian2) {
    // 在光标旁显示提示文本
    // "点击开始绘制" / "右键取消" / "双击完成"
  }
}
```

**状态指示**：
- TopRibbon 按钮激活状态（已完成）
- 光标样式变化（绘制时 crosshair）
- 状态栏显示当前工具

**快捷键**（可选）：
- `ESC`: 取消当前操作
- `Delete`: 删除选中要素
- `Ctrl+Z`: 撤销（如果时间充裕）

**预估**：4-6 小时

---

#### 6. Bug 修复与测试

**检查清单**：
- [ ] 所有 5 种图形都能正常绘制
- [ ] 选择和取消选择正常
- [ ] 导出的 GeoJSON 格式正确
- [ ] 工具切换流畅，无卡顿
- [ ] 无 console 错误
- [ ] 浏览器兼容性（Chrome/Firefox/Edge）

**性能测试**：
- [ ] 绘制 100 个要素，帧率 > 30 FPS
- [ ] 内存稳定，无泄漏

**预估**：2-3 小时

---

## ✅ MVP 验收标准

### 核心功能

| 功能 | 验收标准 |
|-----|---------|
| **绘制** | 所有 5 种图形可以通过工具栏绘制 ✅ |
| **选择** | 点击要素可以选中并高亮 ✅ |
| **取消** | ESC 或点击空白取消选择 ✅ |
| **导出** | 可以导出为标准 GeoJSON 文件 ✅ |
| **清除** | 可以删除选中的要素 ✅ |

### 用户体验

| 体验 | 验收标准 |
|-----|---------|
| **提示** | 光标有工具提示信息 ✅ |
| **状态** | 按钮状态反映当前工具 ✅ |
| **流畅** | 交互无明显延迟 ✅ |
| **稳定** | 无 crash，无 console 错误 ✅ |

### 代码质量

- [ ] TypeScript 编译通过，无 error
- [ ] 核心逻辑有注释
- [ ] 遵循现有代码风格
- [ ] Git 提交信息清晰

---

## 📦 交付物

### 代码
```
src/components/cesium/GISLayer.vue          ~400 lines
src/cesium/gis/tools/DrawTool.ts            补充 ~200 lines
src/cesium/gis/tools/SelectTool.ts          ~150 lines
src/cesium/gis/utils/geojson.ts             ~100 lines
src/cesium/gis/utils/tooltip.ts             ~80 lines
```

### 文档
```
MVP_USAGE.md                                使用指南
CHANGELOG.md                                更新日志
```

---

## 🎯 之后的选择

### 选项 1：停在这里
- MVP 满足基本需求
- 暂时不需要更多功能

### 选项 2：继续完善
基于 MVP 使用反馈，选择性实施：
- Phase 9: 要素列表面板（2-3 天）
- Phase 10-11: 编辑功能（3-4 天）
- Phase 12-13: 样式/属性面板（5-6 天）

### 选项 3：高级功能
如果 MVP 验证成功且有明确需求：
- Phase 14: 导入功能 + 格式支持
- Phase 15: 捕捉功能（专业 CAD 体验）
- Phase 16: 撤销/重做
- Phase 17: 性能优化（>1000 要素）

---

## 📊 风险评估

| 风险 | 概率 | 影响 | 应对 |
|-----|------|------|------|
| 鼠标事件处理复杂 | 中 | 中 | 参考 MeasureLayer 实现 |
| Pick 性能问题 | 低 | 中 | 空间索引优化（后期） |
| GeoJSON 坐标转换错误 | 中 | 高 | 详细测试，参考 Cesium 文档 |
| 时间超出预期 | 中 | 低 | MVP 可以分批交付 |

---

## 🚀 开始实施

**准备工作**：
1. 确认 MVP 范围
2. 创建新分支或继续当前分支
3. 更新 OpenSpec tasks.md

**第一步**：
创建 `src/components/cesium/GISLayer.vue`，实现基础的工具激活逻辑。

---

**备注**：
- 本计划基于当前 60% 完成度
- 所有时间预估为纯开发时间
- 实际可能需要 +20% buffer
- 可以根据实际进度调整优先级
