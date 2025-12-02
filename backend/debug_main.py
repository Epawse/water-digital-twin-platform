import sys
import os

# Add the parent directory to sys.path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

try:
    print("Attempting to import app.main...")
    from app.main import app
    print("Successfully imported app.main.app")
except Exception as e:
    print("Failed to import app.main:")
    import traceback
    traceback.print_exc()
