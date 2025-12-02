import os
import pandas as pd
from typing import Dict, Any, List, Optional
from .scanner import DATA_ROOT, scan_data_directory, get_relative_path
from .reader import read_excel_data
from .mock_data import get_mock_stations_by_type

# --- Helper to find specific files ---
def find_files_by_keywords(keywords: List[str], exclude_keywords: Optional[List[str]] = None) -> List[Dict[str, Any]]:
    """
    扫描数据目录，根据关键词查找文件
    返回文件节点列表，包含 full_path 和 relative_path
    """
    all_nodes = scan_data_directory(DATA_ROOT)
    found_files = []

    def traverse(nodes, current_path_parts: List[str]):
        for node in nodes:
            node_name = node['label']
            
            # Construct a path string for keyword matching
            current_full_name = "/".join(current_path_parts + [node_name])
            
            if node['type'] == 'directory':
                # Check directory name first
                if any(k in node_name for k in keywords):
                    traverse(node.get('children', []), current_path_parts + [node_name])
                else: # If directory itself doesn't match, still check its children for file matches
                    traverse(node.get('children', []), current_path_parts + [node_name])
            elif node['type'] == 'file':
                file_name = node['label']
                # Check if file path (including parent directories) contains any keyword
                if any(k in current_full_name for k in keywords):
                    # Check for exclude keywords
                    if exclude_keywords and any(k in current_full_name for k in exclude_keywords):
                        continue # Skip if excluded
                    found_files.append({
                        "full_path": node['path'],
                        "relative_path": get_relative_path(node['path']),
                        "filename": file_name,
                        "parent_dir": os.path.basename(os.path.dirname(node['path']))
                    })
    
    # Start traversal from the top-level nodes of the data root
    data_root_nodes = scan_data_directory(DATA_ROOT)
    for node in data_root_nodes:
        traverse([node], []) 
    
    return found_files


# --- 统计总览数据 ---
def calculate_overview_stats() -> Dict[str, Any]:
    """
    计算项目总览页所需的统计数据
    """
    stats = {
        "online_devices": 0,
        "total_devices": 0,
        "today_alerts": 0,
        "reservoir_capacity_percent": 0.0, # Use float for percentage
        "average_rainfall_mm": 0.0,
    }

    # Real files
    all_files_meta = find_files_by_keywords(
        ["Df-", "Pcg-", "Tf-", "Nf-", "M4f-", "水位", "渗压", "温度", "应变", "位移", "钢筋", "锚杆", "混凝土"]
    )
    
    # Mock stations (count unique IDs)
    mock_res = get_mock_stations_by_type("reservoir")
    mock_hydro = get_mock_stations_by_type("hydrological")
    mock_rain = get_mock_stations_by_type("rain")
    
    stats["total_devices"] = len(all_files_meta) + len(mock_res) + len(mock_hydro) + len(mock_rain)
    stats["online_devices"] = max(0, stats["total_devices"] - 5) 

    # Mock alerts
    stats["today_alerts"] = 2 + len([s for s in mock_res + mock_hydro + mock_rain if s["status"] != "normal"])

    # 库容占比 (Real + Mock)
    water_level_files = find_files_by_keywords(["水位", "Df-"])
    reservoir_levels_ratio_sum = 0
    reservoir_count_with_data = 0
    
    mock_guarantee_levels = {
        "Df-1.xlsx": {"guarantee_level": 1968} 
    }

    # Real Data
    for file_meta in water_level_files:
        excel_data = read_excel_data(file_meta["full_path"])
        if excel_data and "data" in excel_data and excel_data["data"]:
            latest_record = excel_data["data"][-1]
            level_key = next((col for col in latest_record if "水位" in col or "Level" in col), None)
            if level_key and latest_record[level_key] is not None:
                try:
                    current_level = float(latest_record[level_key])
                    file_name = file_meta["filename"]
                    if file_name in mock_guarantee_levels:
                        guarantee_level = mock_guarantee_levels[file_name]["guarantee_level"]
                        reservoir_levels_ratio_sum += (current_level / guarantee_level)
                        reservoir_count_with_data += 1
                except (ValueError, TypeError):
                    pass 
    
    # Mock Data
    for s in mock_res:
        if "waterLevel" in s and "guaranteeLevel" in s:
             reservoir_levels_ratio_sum += (s["waterLevel"] / s["guaranteeLevel"])
             reservoir_count_with_data += 1

    if reservoir_count_with_data > 0:
        stats["reservoir_capacity_percent"] = round(reservoir_levels_ratio_sum / reservoir_count_with_data * 100, 1)
    else:
        stats["reservoir_capacity_percent"] = 68.5 

    # 平均降雨 (Real + Mock)
    rain_files = find_files_by_keywords(["雨量", "降雨", "rain"], exclude_keywords=["渗压"]) 
    total_rainfall_sum = 0.0
    rain_station_readings_count = 0
                                    
    # Real
    for file_meta in rain_files:
        excel_data = read_excel_data(file_meta["full_path"])
        if excel_data and "data" in excel_data and excel_data["data"]:
            latest_record = excel_data["data"][-1]
            rain_key = next((col for col in latest_record if "降雨量" in col or "Rainfall" in col), None)
            if rain_key and latest_record[rain_key] is not None:
                try:
                    total_rainfall_sum += float(latest_record[rain_key])
                    rain_station_readings_count += 1
                except (ValueError, TypeError):
                    pass 
    
    # Mock
    for s in mock_rain:
        if "rainfall" in s:
            total_rainfall_sum += s["rainfall"]
            rain_station_readings_count += 1
                                    
    if rain_station_readings_count > 0:
        stats["average_rainfall_mm"] = round(total_rainfall_sum / rain_station_readings_count, 1)
    else:
        stats["average_rainfall_mm"] = 24.5 

    return stats


# --- 各面板数据 ---
def get_water_level_data() -> List[Dict[str, Any]]:
    """
    获取所有水位监测点的最新数据 (Real + Mock)
    """
    result = []
    
    # 1. Real Data from Files
    water_level_files = find_files_by_keywords(["水位", "Df-"])
    for file_meta in water_level_files:
        excel_data = read_excel_data(file_meta["full_path"])
        if excel_data and "data" in excel_data and excel_data["data"]:
            latest_record = excel_data["data"][-1]
            level_key = next((col for col in latest_record if "水位" in col or "Level" in col), None)
            time_key = next((col for col in latest_record if "时间" in col or "Time" in col or "日期" in col), None)
            
            if level_key and latest_record[level_key] is not None:
                current_level = latest_record[level_key]
                record_time = latest_record[time_key] if time_key else "N/A"
                
                is_warning = False
                if isinstance(current_level, (int, float)) and current_level > 800: 
                     is_warning = True
                
                mock_guarantee_level_for_station = 1968 if "Df-1.xlsx" in file_meta["filename"] else 1000 

                result.append({
                    "station_name": file_meta["parent_dir"] + "-" + file_meta["filename"].replace(".xlsx", ""),
                    "latest_level": current_level,
                    "unit": "m",
                    "time": record_time,
                    "is_warning": is_warning,
                    "file_path": file_meta["relative_path"], 
                    "guarantee_level": mock_guarantee_level_for_station,
                    "data_source": "real" # Label
                })

    # 2. Mock Data
    mock_stations = get_mock_stations_by_type("reservoir") + get_mock_stations_by_type("hydrological")
    for s in mock_stations:
        result.append({
            "station_name": s["name"],
            "latest_level": s.get("waterLevel", 0),
            "unit": "m",
            "time": "2025-11-27 15:00:00", # Simulated time
            "is_warning": s["status"] != "normal",
            "file_path": None,
            "guarantee_level": s.get("guaranteeLevel", 1000),
            "data_source": "simulated" # Label
        })
        
    return result

def get_rainfall_data() -> List[Dict[str, Any]]:
    """
    获取所有雨量监测点的最新数据 (Real + Mock)
    """
    result = []
    
    # 1. Real Data
    rain_files = find_files_by_keywords(["雨量", "降雨", "rain"], exclude_keywords=["渗压"])
    for file_meta in rain_files:
        excel_data = read_excel_data(file_meta["full_path"])
        if excel_data and "data" in excel_data and excel_data["data"]:
            latest_record = excel_data["data"][-1]
            rain_key = next((col for col in latest_record if "降雨量" in col or "Rainfall" in col), None)
            time_key = next((col for col in latest_record if "时间" in col or "Time" in col or "日期" in col), None)
            
            if rain_key and latest_record[rain_key] is not None:
                current_rainfall = latest_record[rain_key]
                record_time = latest_record[time_key] if time_key else "N/A"
                
                is_warning = False
                if isinstance(current_rainfall, (int, float)) and current_rainfall > 10:
                     is_warning = True

                result.append({
                    "station_name": file_meta["parent_dir"] + "-" + file_meta["filename"].replace(".xlsx", ""),
                    "latest_rainfall": current_rainfall,
                    "unit": "mm",
                    "time": record_time,
                    "is_warning": is_warning,
                    "file_path": file_meta["relative_path"],
                    "data_source": "real" # Label
                })

    # 2. Mock Data
    mock_stations = get_mock_stations_by_type("rain")
    for s in mock_stations:
        result.append({
            "station_name": s["name"],
            "latest_rainfall": s.get("rainfall", 0),
            "unit": "mm",
            "time": "2025-11-27 15:00:00",
            "is_warning": s["status"] != "normal",
            "file_path": None,
            "data_source": "simulated" # Label
        })

    return result

def get_warning_data() -> List[Dict[str, Any]]:
    """
    模拟或根据数据派生告警信息 (Real + Mock)
    """
    warnings = []
    
    # Check for water level warnings (Real + Mock covered by helper)
    water_levels = get_water_level_data()
    for wl in water_levels:
        if wl["is_warning"]:
            warnings.append({
                "id": f"wl_{wl['station_name']}",
                "level": "Yellow",
                "message": f"{wl['station_name']} 水位异常: {wl['latest_level']}{wl['unit']}",
                "time": wl['time'],
                "file_path": wl["file_path"],
                "data_source": wl["data_source"]
            })
            
    # Check for rainfall warnings
    rainfall_data = get_rainfall_data()
    for rf in rainfall_data:
        if rf["is_warning"]:
            warnings.append({
                "id": f"rf_{rf['station_name']}",
                "level": "Yellow",
                "message": f"{rf['station_name']} 降雨量偏高: {rf['latest_rainfall']}{rf['unit']}",
                "time": rf['time'],
                "file_path": rf["file_path"],
                "data_source": rf["data_source"]
            })
            
    # Add some mock generic warnings
    warnings.append({
        "id": "mock_pressure_warning",
        "level": "Red",
        "message": "钢岔管段渗压超限，请立即检查！",
        "time": "2025-11-27 15:30:00",
        "file_path": "4 发电引水洞/1 钢岔管段/1 钢岔管段渗压/渗压计/Pcg-1.xlsx",
        "data_source": "simulated"
    })
    warnings.append({
        "id": "mock_temperature_warning",
        "level": "Blue",
        "message": "某处温度异常，可能设备故障。",
        "time": "2025-11-27 15:35:00",
        "file_path": "4 发电引水洞/8 温度/温度计/Tf-1.xlsx",
        "data_source": "simulated"
    })
            
    return warnings
