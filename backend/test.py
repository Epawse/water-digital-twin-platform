import asyncio
import os
from sqlalchemy import text
from app.database import AsyncSessionLocal
from app.utils.excel_importer import ExcelImporter

ROOT = "/home/haoran/projects/水利数字孪生/vue3-vite-cesium-new/安全监测数据-MMK发电引水洞/4 发电引水洞"


async def run():
    async with AsyncSessionLocal() as s:
        rows = (await s.execute(text("select path from ingest_files where rows_imported = 0"))).all()
        files = [r[0] for r in rows]
        print("remaining zero-row:", len(files))
        imp = ExcelImporter(session=s, data_root=ROOT)
        for rel in files:
            abs_path = os.path.join(ROOT, rel)
            res = await imp.import_file(abs_path)
            await s.commit()
            print(res)
asyncio.run(run())
