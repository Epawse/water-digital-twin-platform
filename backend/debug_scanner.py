import sys
import os

# Add the parent directory to sys.path to allow importing app
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

try:
    from app.utils.scanner import scan_data_directory, DATA_ROOT
    print(f"DATA_ROOT is: {DATA_ROOT}")
    print(f"Exists: {os.path.exists(DATA_ROOT)}")
    
    print("Starting scan...")
    result = scan_data_directory()
    print("Scan complete.")
    print(f"Found {len(result)} top-level items.")
    # Print first item to check structure
    if result:
        print(f"First item: {result[0]}")
        
except Exception as e:
    print("An error occurred:")
    import traceback
    traceback.print_exc()
