# 开发环境配置指南

## 前端环境

### 1. Node.js 与依赖安装
```bash
# 检查 Node.js 版本（推荐 18+）
node --version
npm --version

# 安装依赖
npm install
```

### 2. 环境变量配置

创建 `.env.local` 文件（此文件已在 `.gitignore` 中，不会被追踪）：

```env
# 天地图 API Key（免费申请）
VITE_TIANDITU_KEY=YOUR_TIANDITU_KEY
```

**获取天地图 API Key**:
- 访问 [天地图开发者平台](https://console.tianditu.gov.cn/)
- 注册账号后申请开发者 Key（免费）
- 将 Key 填入 `VITE_TIANDITU_KEY`

### 3. 启动前端开发服务器

```bash
npm run dev
```

访问 `http://localhost:5174` 开始开发

### 4. 构建生产版本

```bash
npm run build
```

## 后端环境

### 1. Python 环境准备

```bash
# 检查 Python 版本（需要 3.10+）
python3 --version

# 创建虚拟环境
cd backend
python3 -m venv venv

# 激活虚拟环境
# Linux/macOS:
source venv/bin/activate
# Windows:
venv\Scripts\activate

# 安装依赖
pip install -r requirements.txt
```

### 2. 数据库配置

**前置要求**:
- PostgreSQL 15+（已安装）
- PostGIS 扩展（用于地理数据）

**创建数据库和用户**:
```bash
# 连接到 PostgreSQL
psql -U postgres

# 创建用户
CREATE USER your_username WITH PASSWORD 'your_password';

# 创建数据库
CREATE DATABASE your_database_name OWNER your_username;

# 连接到新数据库
\c your_database_name

# 启用 PostGIS 扩展
CREATE EXTENSION postgis;
```

### 3. 环境变量配置

在 `backend/` 目录创建 `.env` 文件：

```env
# 数据库连接配置
DATABASE_URL=postgresql+asyncpg://your_username:your_password@localhost:5432/your_database_name
DATABASE_URL_SYNC=postgresql+psycopg2://your_username:your_password@localhost:5432/your_database_name

# API 配置
API_PREFIX=/api
DEBUG=true

# 演示数据开关（开发环境可设为 true）
ENABLE_SEED_DATA=true
```

**参数说明**:
- `DATABASE_URL`: 异步连接串（用于 FastAPI）
- `DATABASE_URL_SYNC`: 同步连接串（用于数据库迁移）
- `DEBUG=true`: 开发模式，显示详细错误信息
- `ENABLE_SEED_DATA=true`: 自动生成演示数据

### 4. 初始化数据库

```bash
cd backend

# 生成数据库表结构
alembic upgrade head

# 可选：导入演示数据
python -m scripts.seed_data
```

### 5. 启动后端服务

```bash
cd backend
uvicorn app.main:app --reload --port 8000
```

访问 `http://localhost:8000/api/health` 验证服务运行

**API 文档** (Swagger UI): `http://localhost:8000/docs`

## 完整开发流程

### 同时运行前后端

**终端 1 - 前端**:
```bash
npm run dev
```

**终端 2 - 后端**:
```bash
cd backend
source venv/bin/activate  # 或 venv\Scripts\activate
uvicorn app.main:app --reload
```

访问 `http://localhost:5174` 开始开发

### 常见问题排查

#### 前端

**问题**: Vite 编译失败
```bash
# 清空 node_modules 重新安装
rm -rf node_modules package-lock.json
npm install
```

**问题**: Cesium 加载失败
- 检查 `index.html` 中的 `CESIUM_BASE_URL` 配置
- 确保 Cesium 文件存在（项目较大，可能需要单独下载）

**问题**: 天地图无法显示
- 检查 `.env.local` 中的 `VITE_TIANDITU_KEY` 是否正确
- 在浏览器控制台查看是否有 CORS 错误

#### 后端

**问题**: 数据库连接失败
```bash
# 检查数据库是否运行
psql -U postgres -c "SELECT version();"

# 验证连接串格式
# postgresql+asyncpg://用户名:密码@localhost:5432/数据库名
```

**问题**: PostGIS 扩展不存在
```bash
# 在数据库中启用 PostGIS
psql -d your_database_name -c "CREATE EXTENSION IF NOT EXISTS postgis;"
```

**问题**: Alembic 迁移失败
```bash
# 查看迁移历史
alembic history

# 回滚到上一版本
alembic downgrade -1

# 重新升级
alembic upgrade head
```

## IDE 推荐配置

### VS Code 扩展

**前端开发**:
- Volar (Vue Language Features)
- TypeScript Vue Plugin
- ESLint
- Prettier

**后端开发**:
- Python
- Pylance
- FastAPI

### VS Code 工作区设置

创建 `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[python]": {
    "editor.defaultFormatter": "ms-python.python",
    "editor.formatOnSave": true
  },
  "python.linting.pylintEnabled": true,
  "python.linting.enabled": true
}
```

## Docker 运行（可选）

如果希望跨环境一致，可以使用 Docker：

```bash
# 构建镜像
docker-compose build

# 启动服务
docker-compose up
```

## 数据导入（开发中的真实数据）

如果有 Excel 监测数据需要导入，使用提供的脚本（需要在本地项目中）：

```bash
cd backend
python -m scripts.import_excel --root "路径/到/数据文件夹"
```

> ⚠️ 注意：真实数据处理脚本已从公开仓库中排除，这是为了保护数据隐私
