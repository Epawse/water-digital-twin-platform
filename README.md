# 水利数字孪生基础平台

基于 Vue3 + TypeScript + Cesium 1.136 构建的水利数字孪生可视化平台，提供数字流域、气象监测、设备管理、数据治理等功能模块。

## 📸 系统截图

### 数据看板
![数据看板](pics/dashboard.png)

### 气象监测
![气象监测](pics/meteo.png)

### 设备管理
![设备管理](pics/device.png)

### 数据治理
![数据治理](pics/data.png)

### 仿真模拟
![仿真模拟](pics/simulation.png)

### AI 工程
![AI工程](pics/ai.png)

## 🚀 技术栈

### 前端
- **框架**: Vue 3.5 + TypeScript 5.6
- **构建工具**: Vite 6
- **3D 引擎**: Cesium 1.136（含自定义 Globe 滤镜）
- **状态管理**: Pinia
- **UI 组件**: Element Plus
- **图表**: ECharts 5

### 后端
- **框架**: FastAPI + Python 3.10+
- **数据库**: PostgreSQL 15 + PostGIS
- **ORM**: SQLAlchemy 2 (async)
- **迁移工具**: Alembic

## 📦 项目结构

```
water-digital-new/
├── src/                    # 前端源码
│   ├── components/         # 组件
│   │   ├── business/       # 业务组件
│   │   ├── cesium/         # Cesium 相关组件
│   │   ├── charts/         # 图表组件
│   │   └── common/         # 通用组件
│   ├── views/              # 页面视图
│   ├── stores/             # Pinia 状态管理
│   ├── utils/              # 工具函数
│   └── api/                # API 接口
├── backend/                # 后端服务
│   ├── app/                # FastAPI 应用
│   ├── alembic/            # 数据库迁移
│   └── scripts/            # 脚本工具
├── public/                 # 静态资源
│   └── Cesium-1.136/       # Cesium 库
└── openspec/               # 项目规范文档
```

## 🛠️ 快速开始

### 前端

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### 后端

```bash
cd backend

# 安装依赖
pip install -r requirements.txt

# 配置环境变量
cp .env.example .env
# 编辑 .env 文件，填写数据库连接信息

# 初始化数据库
alembic upgrade head

# 启动服务
uvicorn app.main:app --reload --port 8000
```

## ⚙️ 环境变量配置

### 后端 (.env)
```env
DATABASE_URL=postgresql+asyncpg://用户名:密码@localhost:5432/数据库名
DATABASE_URL_SYNC=postgresql+psycopg2://用户名:密码@localhost:5432/数据库名
API_PREFIX=/api
DEBUG=true
```

### 前端地图服务
需要在 `src/mock/baseMapData.ts` 中配置天地图 API Key：
```typescript
// 将 YOUR_TIANDITU_KEY 替换为你的天地图开发者 Key
tk=YOUR_TIANDITU_KEY
```

> 💡 天地图开发者 Key 可在 [天地图开发者平台](https://console.tianditu.gov.cn/) 免费申请

## ✨ 主要功能

- **数据看板**: 实时数据概览、关键指标监控
- **气象监测**: 雷达回波/降雨分屏对比、气象数据可视化
- **设备管理**: 传感器设备状态监控、地图标注
- **数据治理**: 数据资产管理、ETL 流程
- **仿真模拟**: 洪水演进、水动力学模拟
- **AI 工程**: 智能分析、预测模型

## 🎨 特色功能

- **科技风滤镜**: Cesium Globe 自定义着色器，支持一键切换地图风格
- **分屏对比**: 气象页面支持雷达/降雨数据左右分屏
- **实时数据**: WebSocket 推送实时监测数据
- **响应式布局**: 适配多种屏幕尺寸

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
