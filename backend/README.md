# Backend Setup (PostgreSQL + PostGIS)

## 1. 环境要求
- Python 3.10+
- PostgreSQL 15+，已安装 PostGIS
- 已创建数据库与用户

## 2. 安装依赖
```bash
cd backend
pip install -r requirements.txt
```

## 3. 配置环境变量
拷贝 `.env.example` 为 `.env` 并填写实际连接串：
```
DATABASE_URL=postgresql+asyncpg://用户名:密码@localhost:5432/数据库名
DATABASE_URL_SYNC=postgresql+psycopg2://用户名:密码@localhost:5432/数据库名
API_PREFIX=/api
DEBUG=true
ENABLE_SEED_DATA=true   # 仅演示可设为 true
```

## 4. 初始化数据库
```bash
# 生成/更新表结构（会尝试创建 PostGIS 扩展）
cd backend
alembic upgrade head

# 可选：写入演示数据（11 个模拟传感器 + 产品数据）
python -m scripts.seed_data
```

## 5. 启动服务
```bash
cd backend
uvicorn app.main:app --reload --port 8000
```
健康检查：`curl http://localhost:8000/api/health`

## 6. API 快速校验
- 最新水位：`curl "http://localhost:8000/api/water_levels?is_simulated=true"`
- 最新雨量：`curl "http://localhost:8000/api/rainfall_data?is_simulated=true"`
- 传感器列表：`curl http://localhost:8000/api/v1/sensors`
- 产品：`curl http://localhost:8000/api/model_products`（栅格/矢量同理）

## 7. 导入真实 Excel 数据
```bash
# 默认读取 ../安全监测数据-MMK发电引水洞/4 发电引水洞 下全部 xls/xlsx
cd backend
DEBUG=true PYTHONPATH=. python3 -m scripts.import_excel

# 如目录不同
DEBUG=true PYTHONPATH=. python3 -m scripts.import_excel --root /path/to/excel_root
```
- 幂等：基于 `ingest_files (sensor_id, checksum)` 跳过重复文件；已有读数不会重复插入。
- 传感器/metric 不存在时自动创建，`is_simulated=false`。
- 未识别列落入 `raw_values`，时间列自动识别包含“观测日期/日期/时间”的列。

## 8. 迁移说明
- Alembic 头部版本 `fbe2...` 会调用 ORM 元数据创建所有表，并尝试 `CREATE EXTENSION IF NOT EXISTS postgis`，PostGIS 不可用时会跳过但仍建非空间表。
- `alembic/env.py` 过滤了 PostGIS 系统表（spatial_ref_sys 等），避免 autogenerate 噪音。

## 9. TODO（落地真实数据）
- [ ] Excel 导入器：已提供 `scripts.import_excel` 基础版，可进一步完善表头偏差配置、单位校正与失败报告。
- [ ] 桩号坐标：生成/导入桩号→坐标映射，缺坐标用模拟点并标记 `is_simulated=true`，后续替换。
- [ ] 告警/统计：为关键 metric 设置 warn_low/warn_high，`/api/warnings` 去掉模拟 fallback，`/api/stats` 增加时间窗。
- [ ] 前端切换：前端全部改调后端 API，移除本地 mock，基于 `is_simulated` 做提示/过滤。
- [ ] 产品扩展：按栅格/矢量/模型产品表入库真实气象格点、洪水预报、资源目录数据。
