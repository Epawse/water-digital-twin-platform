import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

try:
    from app.utils.mock_data import MOCK_STATIONS
    print("Successfully imported mock_data")
except Exception:
    import traceback
    traceback.print_exc()
