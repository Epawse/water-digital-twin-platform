# Tasks: Add GIS Drawing Toolkit

> **Updated 2025-12-03**: Adopting Hybrid Architecture (Option A)
> **Strategy**: Extract algorithms from cesium-drawer + cesium_dev_kit, build custom framework
> **License**: All sources MIT licensed, will maintain proper attribution
>
> **⚠️ IMPORTANT**: This change **supersedes** `implement-gis-measure-tools`
> - Existing MeasureLayer.vue (634 lines) will be replaced by GISLayer.vue
> - Measurement tools reimplemented as MeasureTool class (extends DrawTool)
> - No need to complete remaining tasks in implement-gis-measure-tools

---

## Phase 0: Research & Architecture Setup (Week 1)

### Open Source Integration

- [x] **T0.1** Extract cesium-drawer core code
  - Clone https://github.com/hongfaqiu/cesium-drawer
  - Copy `src/utils/plugins/CesiumDrawer.ts` to `src/cesium/gis/vendor/cesium-drawer/`
  - Add MIT license header with attribution
  - Document source commit hash
  - 验证：Code compiles, no dependencies missing

- [x] **T0.2** Extract cesium_dev_kit volume calculation algorithm
  - Clone https://github.com/dengxiaoning/cesium_dev_kit
  - Extract volume calculation logic to `src/cesium/gis/utils/volume.ts`
  - Add MIT license header with attribution
  - Create unit tests for extracted algorithm
  - 验证：Volume calculation test passes

- [x] **T0.3** Research @cesium-extends/drawer
  - Install via npm OR copy source code
  - Analyze point/line/circle drawing implementation
  - Document API and integration approach
  - 验证：Can import and instantiate drawer

### Core Architecture

- [x] **T0.4** Create directory structure
  ```bash
  mkdir -p src/cesium/gis/{core,graphics,tools,utils,vendor}
  mkdir -p src/cesium/gis/vendor/{cesium-drawer,cesium-extends}
  ```
  - 验证：Directory structure matches design.md

- [x] **T0.5** Implement BaseTool abstract class
  - File: `src/cesium/gis/core/BaseTool.ts`
  - Methods: activate(), deactivate(), setupEventHandlers(), destroy()
  - Inspired by OpenLayers Interaction pattern
  - 验证：Can extend BaseTool and create instances

- [x] **T0.6** Implement BaseGraphic abstract class
  - File: `src/cesium/gis/core/BaseGraphic.ts`
  - Methods: create(), remove(), show(), hide(), startEdit(), stopEdit(), toGeoJSON()
  - Properties: id, name, type, style, entities[]
  - 验证：Can extend BaseGraphic and implement concrete classes

### Type System (3D-Ready)

- [x] **T0.7** Create 3D coordinate types `src/types/geometry.ts`
  - Coordinate3D interface (longitude, latitude, height, heightReference)
  - HeightReference enum (CLAMP_TO_GROUND, RELATIVE_TO_GROUND, ABSOLUTE)
  - Coordinate2D interface (backward compatibility)
  - Type guard: is3D(coord): coord is Coordinate3D
  - 验证：TypeScript strict mode passes

- [x] **T0.8** Create unified GIS types
  - File: `src/types/draw.ts` - DrawToolType, DrawingState
  - File: `src/types/feature.ts` - Feature interfaces, FeatureCollection
  - Measurement3D type (distance3D, distanceHorizontal, distanceVertical, slope, volume)
  - 验证：类型编译通过

### Unified Store

- [x] **T0.9** Create unified GISStore `src/stores/gis.ts`
  - State: activeTool, toolMode, features (Map), selectedIds (Set), history[]
  - Actions: setTool, addFeature, updateFeature, deleteFeature, selectFeature
  - Actions: undo, redo, exportGeoJSON, importGeoJSON
  - 验证：Store 初始化正确，Pinia devtools 可见

- [x] **T0.10** Reimplement measurement tools in new architecture
  - Create MeasureTool class (extends BaseTool, not DrawTool)
  - Distance measurement = Line + distance label
  - Area measurement = Polygon + area label
  - Migrate logic from existing MeasureLayer.vue (634 lines)
  - 验证：Distance and area measurement work as before

- [x] **T0.11** Create backward-compatible MeasurePanel
  - Update MeasurePanel.vue to use useGISStore instead of useMeasureStore
  - Filter features to show only measurements (type: 'distance' | 'area')
  - Keep existing UI unchanged
  - 验证：MeasurePanel displays without errors, shows measurements

---

## Phase 1: 2D Graphics Implementation (Week 2-3)

> **⚠️ IMPORTANT - Task Execution Order**:
> 1. **T1.7 (DrawTool) MUST be implemented FIRST** - provides shared drawing logic
> 2. Then implement Graphics in order: Point → Line → Polygon → Circle → Rectangle
> 3. MeasureTool is independent and already complete (Phase 0)
>
> **⚠️ Implementation Guidelines**:
> - Implement ONE task at a time, do NOT batch multiple tasks
> - Follow existing UI/UX patterns from TopRibbon.vue and MeasurePanel.vue
> - Keep components simple and focused
> - Test each task before moving to the next

### Drawing Tool Foundation

- [x] **T1.7** Implement DrawTool class **← START HERE**
  - File: `src/cesium/gis/tools/DrawTool.ts`
  - Extend BaseTool
  - Support all geometry types (point, line, polygon, circle, rectangle)
  - Handle mouse events (click, move, double-click, right-click)
  - Emit completion events to GISStore
  - Reference MeasureTool.ts for event handling patterns
  - 验证：Can switch between different drawing modes
  - Status: Basic framework complete, preview logic to be implemented with Graphic classes

### Polygon Drawing (Using cesium-drawer)

- [ ] **T1.1** Implement PolygonGraphic class
  - File: `src/cesium/gis/graphics/PolygonGraphic.ts`
  - Extend BaseGraphic
  - **Integrate cesium-drawer algorithm** from vendor/cesium-drawer/
  - Implement independent Polyline for outline (cesium outlineWidth limitation)
  - Use CallbackProperty for real-time preview
  - 验证：Can draw polygon with left click, right click cancel, double click complete

- [ ] **T1.2** Implement polygon vertex editing
  - Method: startEdit() - show editable vertices
  - Method: updateVertex(index, position) - drag vertex
  - Method: removeVertex(index) - Shift+Click delete
  - Method: insertVertex(index, position) - Click edge midpoint
  - **Use cesium-drawer's addOnePosition/changeOnePosition/removeOnePosition logic**
  - 验证：Vertex editing works smoothly

### Point & Line Drawing (Using @cesium-extends/drawer)

- [ ] **T1.3** Implement PointGraphic class
  - File: `src/cesium/gis/graphics/PointGraphic.ts`
  - Extend BaseGraphic
  - **Adapt code from @cesium-extends/drawer**
  - Support custom icon (billboard)
  - Support text label
  - 验证：Single click adds point with label

- [ ] **T1.4** Implement LineGraphic class
  - File: `src/cesium/gis/graphics/LineGraphic.ts`
  - Extend BaseGraphic
  - **Adapt code from @cesium-extends/drawer**
  - Use CallbackProperty for preview
  - Calculate and display length
  - 验证：Continuous clicks draw polyline

### Circle & Rectangle

- [ ] **T1.5** Implement CircleGraphic class
  - File: `src/cesium/gis/graphics/CircleGraphic.ts`
  - Extend BaseGraphic
  - Use Cesium.EllipseGraphics
  - Dynamic radius on mouse move
  - Display radius and area labels
  - 验证：Two clicks create circle

- [ ] **T1.6** Implement RectangleGraphic class
  - File: `src/cesium/gis/graphics/RectangleGraphic.ts`
  - Extend BaseGraphic
  - Use Cesium.RectangleGraphics
  - Drag to define bounds
  - Display dimensions
  - 验证：Drag creates rectangle

### Drawing Tools

- [ ] **T1.7** Implement DrawTool class
  - File: `src/cesium/gis/tools/DrawTool.ts`
  - Extend BaseTool
  - Support all geometry types (point, line, polygon, circle, rectangle)
  - Handle mouse events (click, move, double-click, right-click)
  - Emit completion events to GISStore
  - 验证：Can switch between different drawing modes

## Phase 3: 线绘制工具

- [ ] **T3.1** 实现线绘制工具点击处理
  - 连续点击添加顶点
  - 右键或 ESC 完成绘制
  - 创建 LineFeature 对象
  - 验证：点击绘制折线

- [ ] **T3.2** 实现线预览（鼠标移动）
  - 动态线段从最后顶点到光标
  - 使用 CallbackProperty 更新
  - 验证：预览线跟随光标

- [ ] **T3.3** 计算并显示线长度
  - Cesium 大地测量计算总长度
  - 标签显示在线段中点
  - 自动单位切换（m/km）
  - 验证：长度计算正确

- [ ] **T3.4** 实现线型样式
  - 实线
  - 虚线（PolylineDashMaterialProperty）
  - 点线
  - 验证：线型样式正确渲染

## Phase 4: 圆形绘制工具

- [ ] **T4.1** 实现圆形绘制交互
  - 第一次点击设置圆心
  - 鼠标移动动态调整半径
  - 第二次点击完成
  - 验证：圆形绘制流畅

- [ ] **T4.2** 实现圆形预览
  - EllipseGraphics 动态半径
  - 使用 CallbackProperty
  - 验证：预览圆跟随光标

- [ ] **T4.3** 计算圆形属性
  - 半径计算（大地测量）
  - 面积计算（π * r²）
  - 标签显示半径和面积
  - 验证：计算正确

- [ ] **T4.4** 圆形样式配置
  - 填充颜色和透明度
  - 边框颜色和宽度
  - 验证：样式正确应用

## Phase 5: 矩形绘制工具

- [ ] **T5.1** 实现矩形绘制交互
  - 第一次点击设置起点
  - 拖动鼠标到对角点
  - 第二次点击完成
  - 验证：矩形绘制正常

- [ ] **T5.2** 实现矩形预览
  - RectangleGraphics 动态坐标范围
  - 使用 CallbackProperty
  - 验证：预览矩形跟随光标

- [ ] **T5.3** 计算矩形属性
  - 长度和宽度（大地测量）
  - 面积计算
  - 标签显示尺寸
  - 验证：计算正确

## Phase 6: 多边形绘制工具增强

- [ ] **T6.1** 复用现有多边形测量工具
  - 将 MeasureLayer 的面积测量逻辑提取
  - 集成到 DrawLayer
  - 添加样式配置支持
  - 验证：功能迁移无损

- [ ] **T6.2** 增强多边形样式
  - 填充图案支持（可选）
  - 边框样式配置
  - 验证：样式丰富

## Phase 7: 绘制工具栏 UI

- [ ] **T7.1** 创建 `src/components/common/DrawToolbar.vue`
  - 工具按钮组件
  - 图标和文本
  - 激活状态样式
  - 验证：UI 显示正确

- [ ] **T7.2** 集成到 TopRibbon
  - 在测量工具后添加绘制工具
  - 工具分组（测量 | 绘制 | 操作）
  - 验证：工具栏布局合理

- [ ] **T7.3** 实现工具切换逻辑
  - 点击激活/停用工具
  - 工具互斥（同时只能激活一个）
  - 视觉反馈（高亮激活工具）
  - 验证：工具切换流畅

## Phase 8: 要素选择功能

- [ ] **T8.1** 实现选择工具交互
  - 点击地图拾取要素（scene.pick）
  - 判断是否点击到已绘制要素
  - 添加到 selectedFeatureIds
  - 验证：点击选中要素

- [ ] **T8.2** 实现高亮显示
  - 保存原始样式
  - 应用高亮样式（颜色变化）
  - 取消选中时恢复
  - 验证：高亮效果明显

- [ ] **T8.3** 实现多选支持
  - Ctrl+Click 添加到选区
  - Shift+Click 范围选择（可选）
  - 点击空白取消选择
  - 验证：多选逻辑正确

## Phase 9: 要素列表面板

- [ ] **T9.1** 创建 `src/components/common/FeatureListPanel.vue`
  - 列表容器和样式
  - 按类型分组
  - 滚动区域
  - 验证：面板显示正常

- [ ] **T9.2** 实现要素列表项
  - 图标（根据类型）
  - 名称（可编辑）
  - 操作按钮（显示/隐藏、编辑、删除）
  - 验证：列表项交互正常

- [ ] **T9.3** 实现搜索过滤
  - 输入框
  - 实时过滤
  - 按名称/类型搜索
  - 验证：搜索功能正常

- [ ] **T9.4** 实现批量操作
  - 全选/反选
  - 批量显示/隐藏
  - 批量删除
  - 验证：批量操作正常

- [ ] **T9.5** 挂载到 MainLayout
  - 侧边栏位置
  - 可折叠/展开
  - 验证：面板集成正常

## Phase 10: 要素移动功能

- [ ] **T10.1** 实现拖拽检测
  - 鼠标按下选中要素
  - 鼠标移动触发拖拽
  - 鼠标抬起完成移动
  - 验证：拖拽检测准确

- [ ] **T10.2** 实现点要素移动
  - 更新 position 属性
  - 实时渲染
  - 验证：点移动流畅

- [ ] **T10.3** 实现线/面要素移动
  - 计算偏移量
  - 更新所有顶点坐标
  - 使用 CallbackProperty 实时更新
  - 验证：复杂要素移动正常

- [ ] **T10.4** 移动完成后更新 Store
  - 更新 featureStore
  - 记录历史（撤销/重做）
  - 验证：数据持久化

## Phase 11: 顶点编辑功能

- [ ] **T11.1** 创建 `src/components/cesium/EditLayer.vue`
  - 双击要素进入编辑模式
  - 显示可编辑顶点（点实体）
  - 验证：编辑模式激活

- [ ] **T11.2** 实现顶点拖拽
  - 鼠标按下顶点
  - 拖拽更新顶点位置
  - 使用 CallbackProperty 更新几何
  - 验证：顶点拖拽流畅

- [ ] **T11.3** 实现顶点删除
  - Shift+Click 删除顶点
  - 限制最小顶点数（线>=2，面>=3）
  - 验证：删除逻辑正确

- [ ] **T11.4** 实现顶点插入
  - 点击边的中点插入顶点
  - 自动计算插入位置
  - 验证：插入功能正常

- [ ] **T11.5** 退出编辑模式
  - ESC 退出
  - 点击空白退出
  - 保存修改到 Store
  - 验证：退出逻辑正确

## Phase 12: 样式配置面板

- [ ] **T12.1** 创建 `src/components/common/StylePanel.vue`
  - 面板容器和布局
  - 折叠/展开功能
  - 验证：面板显示正常

- [ ] **T12.2** 实现颜色选择器
  - 填充颜色选择
  - 边框颜色选择
  - 透明度滑块
  - 验证：颜色选择器工作正常

- [ ] **T12.3** 实现线宽和线型配置
  - 线宽滑块（1-10px）
  - 线型下拉选择（实线/虚线/点线）
  - 验证：配置项正常

- [ ] **T12.4** 实现点大小配置
  - 点大小滑块（5-20px）
  - 实时预览
  - 验证：点大小调整正常

- [ ] **T12.5** 实现样式实时应用
  - 监听样式变化
  - 更新选中要素样式
  - 更新 Cesium 实体
  - 验证：样式实时生效

- [ ] **T12.6** 实现样式预设
  - 预设样式库（5-10个）
  - 保存当前样式为预设
  - 快速应用预设
  - 验证：预设功能正常

## Phase 13: 属性编辑面板

- [ ] **T13.1** 创建 `src/components/common/PropertiesPanel.vue`
  - 面板容器和布局
  - 基础属性展示（类型、创建时间等）
  - 验证：面板显示正常

- [ ] **T13.2** 实现名称和描述编辑
  - 名称输入框
  - 描述文本区域
  - 实时保存
  - 验证：编辑功能正常

- [ ] **T13.3** 实现自定义属性
  - 添加自定义字段
  - 字段类型（文本、数字、日期）
  - 删除字段
  - 验证：自定义属性正常

- [ ] **T13.4** 实现几何属性显示
  - 距离/长度（线）
  - 面积（面/圆）
  - 半径（圆）
  - 只读显示
  - 验证：属性计算正确

## Phase 14: 数据导入导出

- [ ] **T14.1** 实现 GeoJSON 导出
  - 转换 Feature 到 GeoJSON 格式
  - 坐标系转换（Cartesian3 → WGS84）
  - 样式信息保存（properties）
  - 文件下载（file-saver）
  - 验证：导出的 GeoJSON 格式正确

- [ ] **T14.2** 实现导出选项
  - 导出全部/仅选中
  - 文件名自定义
  - 格式验证
  - 验证：导出选项正常

- [ ] **T14.3** 实现 GeoJSON 导入
  - 文件上传
  - JSON 解析
  - GeoJSON 格式验证
  - 验证：文件读取正常

- [ ] **T14.4** 实现 GeoJSON 解析
  - 解析不同几何类型
  - 坐标系转换（WGS84 → Cartesian3）
  - 样式恢复
  - 验证：导入的要素正确显示

- [ ] **T14.5** 错误处理
  - 格式错误提示
  - 坐标系不支持提示
  - 部分导入失败处理
  - 验证：错误处理完善

## Phase 15: 捕捉功能

- [ ] **T15.1** 实现顶点捕捉
  - 检测附近顶点（屏幕空间）
  - 捕捉容差配置（5-20px）
  - 视觉反馈（高亮目标顶点）
  - 验证：顶点捕捉准确

- [ ] **T15.2** 实现边捕捉
  - 计算点到线段的投影
  - 捕捉到最近边
  - 视觉反馈（高亮目标边）
  - 验证：边捕捉准确

- [ ] **T15.3** 捕捉性能优化
  - 空间索引（R-tree 或 Quadtree）
  - 限制捕捉范围（视窗内）
  - 节流处理
  - 验证：捕捉流畅，无卡顿

- [ ] **T15.4** 捕捉开关和配置
  - 全局开关（drawStore.snapEnabled）
  - 容差配置（drawStore.snapTolerance）
  - UI 开关按钮
  - 验证：配置生效

## Phase 16: 撤销/重做

- [ ] **T16.1** 实现历史记录栈
  - 操作历史数组（最多50步）
  - 当前指针
  - 添加操作记录
  - 验证：历史记录正确

- [ ] **T16.2** 实现撤销功能
  - Ctrl+Z 快捷键
  - 恢复上一步状态
  - 更新 featureStore
  - 验证：撤销正常

- [ ] **T16.3** 实现重做功能
  - Ctrl+Y 快捷键
  - 恢复下一步状态
  - 更新 featureStore
  - 验证：重做正常

- [ ] **T16.4** 历史记录 UI（可选）
  - 显示操作历史列表
  - 跳转到任意历史点
  - 验证：历史 UI 正常

## Phase 17: 集成与优化

- [ ] **T17.1** 整合测量工具
  - 将距离测量整合为线绘制的测量模式
  - 将面积测量整合为多边形绘制的测量模式
  - 保持向后兼容
  - 验证：测量功能无损

- [ ] **T17.2** 性能优化
  - 实体池管理
  - 批量更新
  - 懒加载大量要素
  - 验证：100个要素时流畅

- [ ] **T17.3** 快捷键系统
  - ESC 取消当前操作
  - Delete 删除选中要素
  - Ctrl+Z/Y 撤销/重做
  - Ctrl+A 全选
  - 验证：快捷键正常

- [ ] **T17.4** 工具提示（Tooltip）
  - 按钮悬停提示
  - 快捷键提示
  - 操作引导
  - 验证：提示友好

---

## Phase 5+: Future Enhancements (Deferred)

### 3D Analysis Tools (Phase 5-6, 2-3 weeks)

Planned for future implementation after 2D foundation is solid:

- [ ] **Volume Calculation Tool**
  - Integrate cesium_dev_kit volume algorithm
  - UI panel for volume results
  - Support reservoir capacity calculation

- [ ] **Flood Simulation Tool**
  - Integrate cesium_dev_kit flood simulation
  - Water level input slider
  - Dynamic inundation visualization

- [ ] **Terrain Profile Tool**
  - Sample terrain heights along line
  - Generate profile chart (ECharts)
  - Export profile data

- [ ] **3D Measurement Tool**
  - Measure 3D distance (horizontal + vertical + slope)
  - Height mode switcher (HeightModePanel component)
  - Keyboard shortcuts: Shift (terrain), Ctrl (custom height), Alt (relative)

See `design.md` for detailed 3D feature roadmap.

---

## Testing & Documentation

- [ ] **T-Test.1** 功能测试
  - 所有绘制工具功能正常
  - 选择、编辑、样式配置正常
  - 导入导出正常
  - 验证：无阻断性 bug

- [ ] **T-Test.2** 性能测试
  - 100个要素绘制和交互 (>30fps)
  - 内存占用测试
  - 长时间运行稳定性
  - 验证：性能达标

- [ ] **T-Test.3** 浏览器兼容性测试
  - Chrome 最新版
  - Firefox 最新版
  - Edge 最新版
  - 验证：主流浏览器兼容

- [ ] **T-Test.4** 构建验证
  - npm run build 通过
  - TypeScript 编译无错误
  - 产物大小合理（增量<200KB after gzip）
  - 验证：构建成功

- [ ] **T-Doc.1** License attribution
  - Create THIRD_PARTY_LICENSES.md
  - List cesium-drawer, cesium_dev_kit, @cesium-extends/drawer
  - Include MIT license text and copyright notices
  - 验证：Legal compliance confirmed

- [ ] **T-Doc.2** 更新 tasks.md
  - 所有任务标记为完成
  - 记录实际耗时
  - 验证：任务列表完整

---

## Task Statistics (Updated)

**Phase 0: Foundation** - 10 tasks (Open Source Integration + Core Architecture + Type System + Store)
**Phase 1: 2D Graphics** - 7 tasks (Polygon + Point/Line + Circle/Rectangle + DrawTool)
**Phase 2: Selection & Management** - 5 tasks (SelectTool + FeatureListPanel)
**Phase 3: Editing** - 5 tasks (MoveTool + ModifyTool)
**Phase 4: UI & Style** - 10 tasks (Toolbar + StylePanel + PropertiesPanel)
**Phase 5+: Future (3D)** - 4+ tasks (Volume + Flood + Profile + 3D Measure) - **Deferred**
**Testing & Docs** - 6 tasks

**Total Phase 0-4: ~43 tasks (2D features complete)**
**Total with 3D: ~47+ tasks**

> **Note**: Original 67-task plan restructured to prioritize 2D foundation (Phase 0-4) before 3D features (Phase 5+). This aligns with Hybrid Architecture decision to deliver incrementally.
