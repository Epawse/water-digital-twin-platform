from functools import lru_cache
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application configuration loaded from environment or .env"""

    database_url: str = "postgresql+asyncpg://user:password@localhost:5432/water_twin"
    database_url_sync: str = "postgresql+psycopg2://user:password@localhost:5432/water_twin"
    api_prefix: str = "/api"
    enable_seed_data: bool = False
    debug: bool = True

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


@lru_cache
def get_settings() -> Settings:
    return Settings()

