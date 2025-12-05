> ⚠️ **HISTORICAL DOCUMENT - FOR REFERENCE ONLY**
>
> This document is preserved for historical context. Content may be outdated.
>
> **For current information, refer to:**
> - OpenSpec changes: `openspec/changes/`
> - Active documentation: `docs/`
> - Project context: `openspec/project.md`
>
> **Migration date**: 2025-12-05
>
> ---

# GIS 相关代码汇总

提取项目中地图绘制、编辑、底图与投影等 GIS 功能相关的主要源码，并在每节给出简要说明。

## src/views/Map.vue

主地图视图，整合 OpenLayers 绘制、编辑、量测、弹窗、图例、图层管理、底图切换等完整工作流。

```vue
<template>
  <!-- 头部导航 -->
  <HeaderBar />

  <div class="container">
    <div class="map-wrapper">
      <!-- 地图相关内容 -->
      <div id="mapDom" class="map"></div>
      
      <!-- 弹出框 -->
      <div id="popup" class="ol-popup glass-panel" v-show="uiStore.isShowingPopup">
        <a href="#" id="popup-closer" class="ol-popup-closer">X</a>
        <div id="popup-content"></div>
      </div>

      <!-- 图表面板 -->
      <div class="chart-panel glass-panel" v-show="uiStore.chartVisible">
        <div class="chart-header">
          <span>{{ chartTitle }}</span>
          <i class="el-icon-close" @click="uiStore.closeChart()"></i>
        </div>
        <!-- 可达性表 -->
        <div class="chart-body-1" v-show="uiStore.chartVisible && dataStore.selectedDataType[0] === 'greenAccessibility'">
          <el-table :data="tableData" height="300" style="width: 100%">
            <el-table-column
              v-for="(header, index) in tableHeaders"
              :key="index"
              :prop="header"
              :label="header"
            >
            </el-table-column>
          </el-table>
        </div>
        <!-- 公平性表 -->
        <div class="chart-body-2" v-show="uiStore.chartVisible && dataStore.selectedDataType[0] === 'greenEquity'">
          <div v-for="(image, index) in images" :key="image" class="block">
            <span class="demonstration">{{ demonstrations[index] }}</span>
            <el-image style="width: 200px; height: 130px" :src="image" :fit="'fill'"></el-image>
          </div>
        </div>
      </div>

      <!-- 建议面板 -->
      <div class="suggestion-panel glass-panel" v-show="uiStore.suggestionVisible">
        <div v-html="suggestionContent"></div>
      </div>

      <!-- 组件：图层管理 -->
      <LayerManager />

      <!-- 组件：工具栏 -->
      <MapTools :activeTool="activeTool" @command="handleCommand" />

      <!-- 组件：底图选择 -->
      <BasemapSelector 
        v-model:visible="uiStore.basemapVisible" 
        @basemap-change="setBasemap" 
      />

      <!-- 图例 -->
      <div class="legend glass-panel" v-show="isLegend">
        <img :src="legendSrc" alt="Legend" v-if="legendSrc" />
      </div>
    </div>

    <!-- GeoJSON 查看区域 -->
    <div class="geojson-viewer glass-panel" v-if="uiStore.geoJSONViewerVisible">
      <el-card class="box-card" style="border: none; background: transparent; box-shadow: none;">
        <div class="clearfix">
          <span>GeoJSON 查看</span>
          <el-button @click="uiStore.hideGeoJSONViewer()" type="text" class="close-button">X</el-button>
        </div>
        <div>
          <vue-json-pretty
            :data="parsedGeoJSON"
            :deep="3"
            selectableType="single"
            :highlightMouseoverNode="true"
            path="res"
          ></vue-json-pretty>
        </div>
      </el-card>
    </div>
  </div>

  <!-- 属性面板 -->
  <div class="attribute-panel glass-panel" v-show="features.length > 0">
    <el-table :data="features" style="width: 100%; background: transparent;" max-height="250" :fit="true">
      <el-table-column prop="id" label="ID" min-width="100"></el-table-column>
      <el-table-column prop="type" label="类型" min-width="100"></el-table-column>
      <el-table-column prop="area" label="面积(m²)" min-width="100">
        <template #default="scope">
          {{ Math.round(scope.row.area * 100) / 100 }}
        </template>
      </el-table-column>
      <el-table-column prop="selected" label="选中" min-width="80">
        <template #default="scope">
          <el-checkbox
            v-model="scope.row.selected"
            @change="onFeatureSelectChange(scope.row)"
          ></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="280">
        <template #default="scope">
          <el-button size="small" link type="primary" @click="locateFeature(scope.row)">定位</el-button>
          <el-button size="small" link type="danger" @click="deleteFeature(scope.row)">删除</el-button>
          <el-button size="small" link @click="viewFeatureGeoJSON(scope.row)">JSON</el-button>
          <el-button size="small" link @click="exportFeatureGeoJSON(scope.row)">导出</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// OpenLayers 样式
import "ol/ol.css";

// OpenLayers Core
import Map from "ol/Map";
import View from "ol/View";
import { Vector as VectorLayer } from "ol/layer";
import TileLayer from "ol/layer/Tile.js";
import { OSM, Vector as VectorSource, TileWMS } from "ol/source";
import { Fill, Stroke, Style, Circle, Circle as CircleStyle } from "ol/style";
import { Point, LineString } from "ol/geom";
import { Draw, Select, Translate, Modify } from "ol/interaction";
import { Collection } from "ol";
import { getCenter, getHeight, getWidth } from "ol/extent";
import { platformModifierKeyOnly, primaryAction, singleClick, never } from "ol/events/condition.js";
import { getLength } from "ol/sphere";
import { toStringHDMS } from "ol/coordinate.js";
import { toLonLat } from "ol/proj";
import Overlay from "ol/Overlay";
import GeoJSON from "ol/format/GeoJSON";
import Zoom from "ol/control/Zoom.js";
import ZoomSlider from "ol/control/ZoomSlider.js";
import ZoomToExtent from "ol/control/ZoomToExtent.js";
import ScaleLine from "ol/control/ScaleLine.js";
import MousePosition from "ol/control/MousePosition.js";
import { OverviewMap } from "ol/control.js";
import { createStringXY } from "ol/coordinate.js";

// External Libs
import VueJsonPretty from "vue-json-pretty/lib/vue-json-pretty.js";
import "vue-json-pretty/lib/styles.css";
import shp from "shpjs";
import * as d3 from "d3";
import { ElMessage } from "element-plus";
import { mapWritableState, mapStores } from 'pinia';

// Stores
import { useDataStore, useUIStore, useLayersStore, useMapStore } from '@/stores';

// Components
import HeaderBar from "@/components/map/HeaderBar.vue";
import LayerManager from "@/components/map/LayerManager.vue";
import MapTools from "@/components/map/MapTools.vue";
import BasemapSelector from "@/components/basemap/BasemapSelector.vue";

// Utils
import newLayer from "../utils/newLayer.js";

export default {
  components: {
    VueJsonPretty,
    HeaderBar,
    LayerManager,
    MapTools,
    BasemapSelector,
  },
  provide() {
    return {
      loadShp: this.loadShp
    }
  },
  data() {
    return {
      // Map Core
      map: {},
      view: null,
      zoom: null,
      center: null,
      rotation: null,

      // Drawing
      drawSource: null, // Will get from store
      drawVector: null, // Will get from store
      draw: {},
      features: [],
      idList: [],
      undoStack: [],

      // Interactions
      select: null,
      activeTool: null,
      measureInteraction: null,
      modify: null,
      translate: null,
      transform: null,

      // GeoJSON
      selectedFeatureGeoJSON: null,
      parsedGeoJSON: null,

      // Chart Data
      chartData: [],
      images: [],
      demonstrations: [],
      tableData: [],
      tableHeaders: [],

      // Legend
      legendSrc: null,
      isLegend: false,

      // Suggestion
      suggestionContent: "",

      // Styles
      myStyle: new Style({
        fill: new Fill({
          color: "rgba(245, 243, 240, 0.6)",
        }),
        stroke: new Stroke({
          color: "#ffcc33",
          width: 2,
        }),
        image: new Circle({
          radius: 7,
          fill: new Fill({
            color: "#ffcc33",
          }),
        }),
      }),
    };
  },
  computed: {
    ...mapWritableState(useDataStore, ['selectedDataType', 'selectedYear', 'selectedPolicy', 'isPredict']),
    ...mapStores(useUIStore, useLayersStore, useMapStore, useDataStore),
    
    chartTitle() {
        if (this.selectedDataType[0] === 'greenEquity') return "绿地公平性指标";
        return `${this.selectedYear} 年绿地可达性指标`;
    }
  },
  watch: {
    // Watch for Data Store changes to trigger logic
    'dataStore.selectedDataType': {
        handler() {
             // Logic moved to Store watcher or handled by loadShp
        }
    },
    // Watch for UI store changes that might need map interaction
    'uiStore.chartVisible': {
        handler(val) {
            if (val) this.showChart();
        }
    },
    'uiStore.suggestionVisible': {
        handler(val) {
            if (val) this.showSeggestion();
        }
    }
  },
  mounted() {
    this.initMap();
    this.initDrawLayer(); // Use Store
    this.resetStatus();
  },
  methods: {
    // Command Handler from MapTools
    handleCommand(cmd, ...args) {
        if (typeof this[cmd] === 'function') {
            this[cmd](...args);
        } else {
            console.warn(`Command ${cmd} not found`);
        }
    },

    // Initialize Map
    initMap() {
      this.map = new Map({
        target: "mapDom",
        view: new View({
          projection: "EPSG:3857",
          center: [12758612.973162018, 3562849.0216611675],
          zoom: 17.5,
          minZoom: 2,
          maxZoom: 20,
          smoothResolutionConstraint: true,
        }),
        pixelRatio: 1,
      });

      // Set Map Instance in Store
      this.mapStore.setMapInstance(this.map);

      // Default Basemap
      this.setBasemap("Gaode");

      this.view = this.map.getView();
      this.zoom = this.view.getZoom();
      this.center = this.view.getCenter();
      this.rotation = this.view.getRotation();

      // Controls
      // Remove default Zoom controls
      // this.map.addControl(new Zoom());
      // this.map.addControl(new ZoomSlider());
      // this.map.addControl(new ZoomToExtent());
      
      // OverviewMap (Eagle Eye) - Optional, keeping it for now or remove if "all default tools" means this too.
      // User said "openlayers自带的工具", usually means Zoom/Attribution. OverviewMap is a bit advanced.
      // I'll keep OverviewMap but maybe style it later? Or remove if user insists on *all*.
      // Let's remove the standard on-map zoom buttons as requested.
      
      const baseLayer = this.map.getLayers().item(0);
      const miniMap = new OverviewMap({
        className: "ol-overviewmap ol-custom-overviewmap",
        collapsed: false,
        layers: [new TileLayer({ source: baseLayer.getSource() })],
      });
      // this.map.addControl(miniMap); // Hiding OverviewMap too per "hide tools" request

      const mousePos = new MousePosition({
        coordinateFormat: createStringXY(4),
        projection: "EPSG:4326",
        className: "custom-mouse-position", // Add custom class
      });
      this.map.addControl(mousePos);

      // this.scale = new ScaleLine();
      // this.map.addControl(this.scale); // Hiding ScaleLine

      // Select Interaction
      this.select = new Select({
        condition: singleClick,
        toggleCondition: platformModifierKeyOnly,
        style: new Style({
          fill: new Fill({ color: "rgba(255, 255, 0, 0.7)" }),
          stroke: new Stroke({ color: "rgba(0, 0, 0, 0.7)", width: 2 }),
          image: new Circle({
            radius: 7,
            fill: new Fill({ color: "rgba(0, 0, 0, 0.7)" }),
          }),
        }),
      });
      this.map.addInteraction(this.select);
    },

    initDrawLayer() {
        // Initialize via Store
        this.layersStore.initDrawLayer();
        // Link local references to Store
        this.drawSource = this.layersStore.drawSource;
        this.drawVector = this.layersStore.drawLayer;
    },

    resetStatus() {
      this.activeTool = null;
      this.map.removeInteraction(this.draw);
      this.map.removeInteraction(this.modify);
      this.map.removeInteraction(this.translate);
      this.map.removeInteraction(this.transform);
      this.map.removeInteraction(this.measureInteraction);
      this.select.getFeatures().clear();
      this.select.setActive(false);
      this.features.forEach((row) => { row.selected = false; });
      this.uiStore.hidePopup();
    },

    loadShp() {
      if (this.selectedDataType.length === 0 || !this.selectedYear) {
        ElMessage.error("请选择政策类型和数据年份");
        return;
      } 

      let url;
      let workspace;
      let layerName;
      switch (this.selectedDataType[0]) {
        case "landuse":
          workspace = "Landuse";
          layerName = "土地利用";
          break;
        case "greenAccessibility":
          workspace = "GreenAccessibility";
          layerName = "绿地可达性";
          break;
        case "greenEquity":
          workspace = "GreenEquity";
          break;
        case "others":
          workspace = "Others";
          break;
      }
      // Get URL from env or default to localhost
      const baseUrl = import.meta.env.VITE_GEOSERVER_URL || 'http://localhost:8080/geoserver';
      url = `${baseUrl}/${workspace}/wms`;
      const params = {
        LAYERS: `${workspace}:${this.selectedDataType[0]}_${this.selectedDataType[1]}_${this.selectedPolicy}_${this.selectedYear}`,
        TILED: true,
        STYLES: `${this.selectedDataType[0]}_${this.selectedDataType[1]}_style`,
      };

      const shpLayer = new TileLayer({
        properties: {
          name: layerName + `_${this.selectedDataType[1]}_${this.selectedPolicy}_${this.selectedYear}`,
        },
        source: new TileWMS({
          url,
          params,
          serverType: "geoserver",
          transition: 0,
          projection: "EPSG:4326",
        }),
      });

      // Use Store to Add Layer
      this.layersStore.addLayer(shpLayer.getProperties().name, shpLayer);

      // Load GeoJSON for overlay
      let geojsonFilePath;
      if (this.selectedDataType[0] === "landuse") {
        geojsonFilePath = "/geojson/greenAccessibility_2030.geojson";
      } else {
        geojsonFilePath = `/geojson/${this.selectedDataType[0]}_${this.selectedYear}.geojson`;
      }

      fetch(geojsonFilePath)
        .then((response) => response.json())
        .then((data) => {
          const features = new GeoJSON().readFeatures(data);
          const source = new VectorSource();
          source.addFeatures(features);
          
           // Overlay Layer (transparent)
           const layer = new VectorLayer({
              source: source,
              style: new Style({
                  fill: new Fill({ color: "rgba(0, 0, 0, 0)" }),
                  stroke: new Stroke({ color: "rgba(0,0,0,0)", width: 0.5 }),
              }),
              zIndex: 1000
            });
            
            this.map.addLayer(layer); // Add directly to map, maybe track later
            this.map.getView().fit(source.getExtent());
        })
        .catch((error) => {
          console.error("获取GeoJSON数据失败:", error);
        });

      // Legend Logic
      if (this.selectedDataType[0] === "landuse") {
          this.legendSrc = "/images/legend_landuse.png";
          this.isLegend = true;
        } else if (this.selectedDataType[0] === "greenAccessibility") {
          this.isLegend = true;
          if (this.selectedDataType[1] === "walk") {
            this.legendSrc = "/images/legend_walk.png";
          } else if (this.selectedDataType[1] === "near") {
            this.legendSrc = "/images/legend_near.png";
          } else if (this.selectedDataType[1] === "car") {
            this.legendSrc = "/images/legend_car.png";
          } else if (this.selectedDataType[1] === "sum") {
            this.legendSrc = "/images/legend_sum.png";
          }
        } else {
          this.isLegend = false;
        }
    },

    showChart() {
        // Simplified chart logic using store data
       if (this.selectedDataType[0] === "greenEquity") {
        this.images = ["/images/步行公平性.png", "/images/驾车公平性.png", "/images/近邻公平性.png", "/images/总体公平性.png"];
        this.demonstrations = ["步行公平性", "驾车公平性", "近邻公平性", "总体公平性"];
      } else if (this.selectedDataType[0] === "greenAccessibility") {
        const tableUrl = `/tables/分区统计Aij_${this.selectedYear}.csv`;
        d3.csv(tableUrl).then((data) => {
            this.tableHeaders = Object.keys(data[0]);
            this.tableData = data;
        }).catch(() => {
            ElMessage.error("加载表格数据失败");
        });
      }
    },

    showSeggestion() {
      const suggestionUrl = `/suggestions/suggestion_${this.selectedYear}.txt`;
      fetch(suggestionUrl)
        .then((response) => response.text())
        .then((text) => {
          this.suggestionContent = text.replace(/\n/g, "<br>");
        })
        .catch(() => {
          ElMessage.error("加载建议内容失败");
        });
    },

    setBasemap(name) {
      const layers = this.map.getLayers();
      // Remove existing tile layers (simplified)
      layers.getArray().slice().forEach((layer) => {
        if (layer instanceof TileLayer && layer !== this.layersStore.drawLayer) { // Preserve draw layer if it was tile? No, draw is Vector.
            // Check if it's one of our base layers
           this.map.removeLayer(layer);
        }
      });

      if (name === "None") return;
      const layer = newLayer(name);
      this.map.getLayers().insertAt(0, layer);
    },

    // Draw Feature
    drawFeature(featureType) {
      this.resetStatus();
      this.activeTool = featureType;

      this.draw = new Draw({
        source: this.drawSource,
        type: featureType,
        freehand: false,
        snapTolerance: 12,
        stopClick: true,
        style: new Style({
          fill: new Fill({ color: "rgba(255, 255, 255, 0.8)" }),
          stroke: new Stroke({ color: "#ffcc33", width: 2 }),
          image: new Circle({ radius: 7, fill: new Fill({ color: "#ffcc33" }) }),
        }),
      });
      this.map.addInteraction(this.draw);

      this.draw.on("drawend", (event) => {
        const feature = event.feature;
        const type = feature.getGeometry().getType();
        let id = this.randomId();
        feature.setId(id);
        feature.setStyle(this.myStyle);
        let area = 0;
        if (type === "Polygon") area = feature.getGeometry().getArea();

        this.features.unshift({
          id: feature.getId(),
          type: type,
          area: area,
          selected: false,
        });
        this.undoStack.push(this.drawSource.getFeatures());
      });
    },
    
    randomId() {
      const id = Math.floor(Math.random() * 10000);
      if (this.idList.includes(id)) return this.randomId();
      this.idList.push(id);
      return id;
    },
    
    undo() {
      if (this.undoStack.length >= 1) {
        let lastStep = this.undoStack[this.undoStack.length - 1];
        this.undoStack.pop();
        this.drawSource.clear();
        this.drawSource.addFeatures(lastStep);
        this.features = lastStep;
      }
    },

    clearDrawLayer() {
        this.layersStore.clearDrawLayer();
        this.features = [];
        this.undoStack = [];
        this.map.getOverlays().clear();
        this.resetStatus();
    },

    measureDistance() {
        this.resetStatus();
        this.activeTool = "measureDistance";
        this.measureInteraction = new Draw({
            source: this.drawSource,
            type: "LineString",
            style: new Style({
                stroke: new Stroke({ color: "rgba(0, 0, 255, 0.5)", lineDash: [10, 10], width: 2 }),
            }),
        });
        this.map.addInteraction(this.measureInteraction);
        
        this.measureInteraction.on("drawstart", (event) => {
            this.createMeasureTooltip(event.feature);
        });
        this.measureInteraction.on("drawend", (event) => {
             const feature = event.feature;
             feature.setStyle(new Style({
                 stroke: new Stroke({ color: "rgba(0, 0, 255, 0.5)", lineDash: [10, 10], width: 3 }),
             }));
             this.createFinalTooltip(feature);
        });
    },

    createMeasureTooltip(feature) {
      let tooltipElement = document.createElement("div");
      tooltipElement.className = "ol-tooltip ol-tooltip-measure";
      tooltipElement.innerHTML = "起点";
      const tooltip = new Overlay({
        element: tooltipElement,
        offset: [0, -15],
        positioning: "bottom-center",
      });
      this.map.addOverlay(tooltip);
      feature.getGeometry().on("change", (evt) => {
        const geom = evt.target;
        const coordinates = geom.getCoordinates();
        const totalLength = this.formatLength(geom);
        tooltipElement.innerHTML = `总长: ${totalLength}`;
        tooltip.setPosition(coordinates[coordinates.length - 1]);
      });
    },

    createFinalTooltip(feature) {
        const geom = feature.getGeometry();
        const coordinates = geom.getCoordinates();
        coordinates.forEach((coordinate, index) => {
            if (index === 0) return;
            const segmentLength = this.formatLength(new LineString([coordinates[index - 1], coordinate]));
            let tooltipElement = document.createElement("div");
            tooltipElement.className = "ol-tooltip ol-tooltip-measure";
            tooltipElement.innerHTML = `段长: ${segmentLength}`;
            const tooltip = new Overlay({
                element: tooltipElement,
                offset: [0, 15],
                positioning: "bottom-center",
            });
            this.map.addOverlay(tooltip);
            tooltip.setPosition(coordinate);
        });
    },
    
    formatLength(line) {
        const length = getLength(line);
        if (length > 100) return Math.round((length / 1000) * 100) / 100 + " km";
        return Math.round(length * 100) / 100 + " m";
    },

    selectFeature() {
        this.resetStatus();
        this.activeTool = 'selectFeature';
        this.select.setActive(true);
        
        // Sync with local features list
        // Note: this.select is already added to map in initMap
        this.select.on("select", (event) => {
             const selected = event.selected;
             const deselected = event.deselected;
             selected.forEach((feature) => {
                 const row = this.features.find(r => r.id === feature.getId());
                 if (row) row.selected = true;
             });
             deselected.forEach((feature) => {
                 const row = this.features.find(r => r.id === feature.getId());
                 if (row) row.selected = false;
             });
        });
    },
    
    checkArea() {
        this.resetStatus();
        this.activeTool = 'checkArea';
        this.uiStore.showPopup();
        this.select.setActive(true);
        
        const container = document.getElementById("popup");
        const content = document.getElementById("popup-content");
        const closer = document.getElementById("popup-closer");
        
        const overlay = new Overlay({ element: container });
        closer.onclick = () => {
            overlay.setPosition(undefined);
            closer.blur();
            return false;
        };
        this.map.addOverlay(overlay);
        
        this.select.on("select", (e) => {
             e.target.getFeatures().getArray().forEach((item) => {
                 const props = item.getProperties();
                 let html = `<p>地块名称: ${props.SQNAME || '未知'}</p>`;
                 if (props.near_Aij_n) html += `<p>near_Aij_n: ${props.near_Aij_n}</p>`;
                 // ... Add other props
                 content.innerHTML = html;
                 overlay.setPosition(item.getGeometry().getCoordinates());
             });
        });
        
        this.map.on("singleclick", (evt) => {
             overlay.setPosition(evt.coordinate);
        });
    },
    
    translateFeature() {
        this.resetStatus();
        this.activeTool = "translateFeature";
        this.translate = new Translate({ features: this.select.getFeatures() });
        this.map.addInteraction(this.translate);
        // Enable select to choose what to translate
        this.select.setActive(true);
    },
    
    editVertices() {
        this.resetStatus();
        this.activeTool = "editVertices";
        this.modify = new Modify({ source: this.drawSource });
        this.map.addInteraction(this.modify);
    },
    
    rotateFeature() {
      this.resetStatus();
      this.activeTool = "rotateFeature";

      // 对每个要素启用旋转
      this.features.forEach((row) => {
        const feature = this.drawSource.getFeatureById(row.id);
        if (feature) {
          this.enableFeatureRotate(feature);
        }
      });

      // 初始化默认样式
      this.defaultStyle = new Modify({ source: this.drawSource })
        .getOverlay()
        .getStyleFunction();
    },

    enableFeatureRotate(feature) {
      // 旋转交互
      this.transform = new Modify({
        source: this.drawSource,
        features: new Collection([feature]),
        condition: (event) => {
          return primaryAction(event) && !platformModifierKeyOnly(event);
        },
        deleteCondition: never,
        insertVertexCondition: never,
        // 旋转样式
        style: (feature) => {
          feature.get("features").forEach((modifyFeature) => {
            const modifyGeometry = modifyFeature.get("modifyGeometry");
            // 如果有旋转要素，则进行旋转
            if (modifyGeometry) {
              const point = feature.getGeometry().getCoordinates();
              let modifyPoint = modifyGeometry.point;
              // 如果没有旋转点，则设置旋转点
              if (!modifyPoint) {
                modifyPoint = point;
                modifyGeometry.point = modifyPoint;
                modifyGeometry.geometry0 = modifyGeometry.geometry;
                const result = this.calculateCenter(modifyGeometry.geometry0);
                modifyGeometry.center = result.center;
                modifyGeometry.minRadius = result.minRadius;
              }
              // 计算旋转中心，最小半径，坐标
              const center = modifyGeometry.center;
              const minRadius = modifyGeometry.minRadius;
              const coordinates = modifyGeometry.geometry.getCoordinates();
              let dx, dy;
              dx = modifyPoint[0] - center[0];
              dy = modifyPoint[1] - center[1];
              const initialRadius = Math.sqrt(dx * dx + dy * dy);
              if (initialRadius > minRadius) {
                const initialAngle = Math.atan2(dy, dx);
                dx = point[0] - center[0];
                dy = point[1] - center[1];
                const currentRadius = Math.sqrt(dx * dx + dy * dy);
                if (currentRadius > 0) {
                  const currentAngle = Math.atan2(dy, dx);
                  const geometry = modifyGeometry.geometry0.clone();
                  geometry.scale(currentRadius / initialRadius, undefined, center);
                  geometry.rotate(currentAngle - initialAngle, center);
                  modifyGeometry.geometry = geometry;
                }
              }
            }
          });
          return this.defaultStyle(feature);
        },
      });

      // 添加旋转交互
      this.map.addInteraction(this.transform);
      this.transform.on("modifystart", (event) => {
        // 保存旋转前的要素
        event.features.forEach((feature) => {
          feature.set("modifyGeometry", { geometry: feature.getGeometry().clone() }, true);
        });
      });

      // 旋转结束
      this.transform.on("modifyend", (event) => {
        event.features.forEach((feature) => {
          // 旋转结束后，删除旋转前的要素
          const modifyGeometry = feature.get("modifyGeometry");
          if (modifyGeometry) {
            feature.setGeometry(modifyGeometry.geometry);
            feature.unset("modifyGeometry", true);
          }
        });
      });
    },

    calculateCenter(geometry) {
      let center, coordinates, minRadius;
      const type = geometry.getType();
      if (type === "Polygon") {
        let x = 0;
        let y = 0;
        let i = 0;
        coordinates = geometry.getCoordinates()[0].slice(1);
        coordinates.forEach((coordinate) => {
          x += coordinate[0];
          y += coordinate[1];
          i++;
        });
        center = [x / i, y / i];
      } else if (type === "LineString") {
        center = geometry.getCoordinateAt(0.5);
        coordinates = geometry.getCoordinates();
      } else {
        center = getCenter(geometry.getExtent());
      }
      let sqDistances;
      if (coordinates) {
        sqDistances = coordinates.map((coordinate) => {
          const dx = coordinate[0] - center[0];
          const dy = coordinate[1] - center[1];
          return dx * dx + dy * dy;
        });
        minRadius = Math.sqrt(Math.max.apply(Math, sqDistances)) / 3;
      } else {
        minRadius = Math.max(getWidth(geometry.getExtent()), getHeight(geometry.getExtent())) / 3;
      }
      return {
        center: center,
        coordinates: coordinates,
        minRadius: minRadius,
        sqDistances: sqDistances,
      };
    },

    // View Actions
    onMoveWh() {
        this.view.animate({
            center: [12709423.397, 2591463.4625],
            zoom: 11,
            duration: 1000
        });
    },
    onRestore() {
         this.view.animate({
             zoom: 17.5,
             center: [12758612.973162018, 3562849.0216611675],
             duration: 1000
         });
    },

    // File Upload
    openFileUpload() {
        // Create a hidden file input and trigger click
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json,.geojson,.zip';
        input.style.display = 'none';
        input.onchange = this.onFileUpload;
        document.body.appendChild(input);
        input.click();
        // Cleanup after click (timeout to ensure event fires)
        setTimeout(() => document.body.removeChild(input), 1000);
    },

    onFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      
      const fileName = file.name.toLowerCase();
      if (fileName.endsWith(".json") || fileName.endsWith(".geojson")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.loadJsonFile(e.target.result);
          };
          reader.readAsText(file);
      } else if (fileName.endsWith(".zip")) {
          this.loadShapefile(file);
      } else {
          ElMessage.error("不支持的文件格式");
      }
    },

    loadJsonFile(content) {
      const features = new GeoJSON().readFeatures(content);
      if (features.length > 0) {
        // Add features to the map
        this.drawSource.addFeatures(features);
        // Also add to our local list for UI
        features.forEach((feature) => {
          const type = feature.getGeometry().getType();
          let area = 0;
          if (type === "Polygon") area = feature.getGeometry().getArea();
          
          // Ensure ID
          if (!feature.getId()) feature.setId(this.randomId());

          this.features.push({
            id: feature.getId(),
            type: type,
            area: area,
            selected: false,
          });
        });
        this.view.fit(this.drawSource.getExtent(), { duration: 1000 });
        ElMessage.success("GeoJSON 加载成功");
      } else {
        ElMessage.warning("文件中未发现要素");
      }
    },

    async loadShapefile(file) {
      try {
          const reader = new FileReader();
          reader.onload = async (e) => {
            const arrayBuffer = e.target.result;
            const geojsons = await this.convertShpToGeoJSON(arrayBuffer);
            this.displayGeojson(geojsons);
          };
          reader.readAsArrayBuffer(file);
      } catch (err) {
          console.error(err);
          ElMessage.error("Shapefile 加载失败");
      }
    },

    async convertShpToGeoJSON(arrayBuffer) {
      const shpData = await shp(arrayBuffer);
      let geojsons = [];
      if (Array.isArray(shpData)) {
          shpData.forEach(data => geojsons.push(...new GeoJSON().readFeatures(data)));
      } else {
          geojsons.push(...new GeoJSON().readFeatures(shpData));
      }
      // Transform projection if needed (assuming source is 4326, map is 3857)
      // shpjs usually returns 4326.
      geojsons.forEach(feature => {
          feature.getGeometry().transform("EPSG:4326", "EPSG:3857");
      });
      return geojsons;
    },

    displayGeojson(features) {
        if (!features || features.length === 0) return;
        
        features.forEach(feature => {
            if (!feature.getId()) feature.setId(this.randomId());
            
            const type = feature.getGeometry().getType();
            let area = 0;
            if (type === "Polygon") area = feature.getGeometry().getArea();

            this.features.push({
                id: feature.getId(),
                type: type,
                area: area,
                selected: false
            });
        });
        
        this.drawSource.addFeatures(features);
        this.view.fit(this.drawSource.getExtent(), { duration: 1000 });
        ElMessage.success("Shapefile 加载成功");
    },

    // External Tests
    testWMTS() {
        this.$router.push("/testWMTS");
    },
    testWFS() {
        this.$router.push("/testWFS");
    },

    // Feature Actions
    onFeatureSelectChange(row) {
        const feature = this.drawSource.getFeatureById(row.id);
        if (row.selected) this.select.getFeatures().push(feature);
        else this.select.getFeatures().remove(feature);
    },
    locateFeature(row) {
         const feature = this.drawSource.getFeatureById(row.id);
         if (feature) this.view.fit(feature.getGeometry().getExtent(), { duration: 1000 });
    },
    deleteFeature(row) {
         const feature = this.drawSource.getFeatureById(row.id);
         if (feature) {
             this.drawSource.removeFeature(feature);
             this.features = this.features.filter(f => f.id !== row.id);
         }
    },
    viewFeatureGeoJSON(row) {
         const feature = this.drawSource.getFeatureById(row.id);
         if (feature) {
             this.parsedGeoJSON = new GeoJSON().writeFeatureObject(feature);
             this.uiStore.showGeoJSONViewer();
         }
    },
    exportFeatureGeoJSON(row) {
         const feature = this.drawSource.getFeatureById(row.id);
         if (feature) {
            const geojson = new GeoJSON().writeFeature(feature);
            const blob = new Blob([geojson], { type: "application/json" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = `feature-${row.id}.geojson`;
            link.click();
         }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.map-wrapper {
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
}

.map {
  width: 100%;
  height: 100%;
}

.chart-panel {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 300px;
  z-index: 500;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.chart-header {
  padding: 12px 20px;
  border-bottom: 1px solid var(--glass-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}

.suggestion-panel {
  position: absolute;
  top: 110px;
  right: 300px; /* Next to Layer Manager */
  width: 300px;
  padding: 20px;
  z-index: 500;
}

.attribute-panel {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
  width: 700px;
  max-height: 300px;
  z-index: 400;
  padding: 10px;
}

/* Custom Mouse Position Style */
:deep(.custom-mouse-position) {
  position: absolute;
  bottom: 8px;
  right: 80px; /* Adjust based on legend width or other elements */
  top: auto;
  left: auto;
  background: var(--glass-bg);
  backdrop-filter: blur(4px);
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid var(--glass-border);
  font-family: monospace;
  font-size: 12px;
  color: var(--text-main);
  pointer-events: none;
  z-index: 1000;
}

.legend {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 8px;
  z-index: 400;
}

.legend img {
  max-width: 200px;
  display: block;
}

.ol-popup {
  position: absolute;
  bottom: 12px;
  left: -50px;
  min-width: 280px;
  padding: 15px;
}

.ol-popup-closer {
  text-decoration: none;
  position: absolute;
  top: 2px;
  right: 8px;
  color: var(--text-secondary);
}

.geojson-viewer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 400px;
    z-index: 2000;
    overflow: hidden;
}

/* Table Override for Glass */
:deep(.el-table), :deep(.el-table__expanded-cell) {
    background-color: transparent;
}
:deep(.el-table tr), :deep(.el-table th.el-table__cell) {
    background-color: transparent;
}
:deep(.el-table td.el-table__cell), :deep(.el-table th.el-table__cell.is-leaf) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
```

## src/views/Map_new.vue

轻量版地图页面，复用 Pinia 存储和工具条，演示核心绘制/编辑流程。

```vue
<template>
  <!-- Header Component -->
  <HeaderBar />

  <div class="container">
    <div class="map-wrapper">
      <!-- Map Container -->
      <div id="mapDom" class="map"></div>

      <!-- Popup -->
      <div id="popup" class="ol-popup" v-show="uiStore.isShowingPopup">
        <a href="#" id="popup-closer" class="ol-popup-closer" @click.prevent="uiStore.hidePopup">X</a>
        <div id="popup-content"></div>
      </div>

      <!-- Integrated Components -->
      <ChartPanel />
      <SuggestionPanel />
      <LayerManager />
      <MapLegend />
      <GeoJSONViewer />
      <BasemapSelector v-model:visible="uiStore.basemapVisible" @basemap-change="setBasemap" />

      <!-- Toolbar (Preserved) -->
      <div class="toolbar">
        <div class="tool-section">
          <span class="section-title">绘制工具</span>
          <el-button :class="{ active: activeTool === 'Point' }" @click="drawFeature('Point')">点</el-button>
          <el-button :class="{ active: activeTool === 'LineString' }" @click="drawFeature('LineString')">线</el-button>
          <el-button :class="{ active: activeTool === 'Polygon' }" @click="drawFeature('Polygon')">多边形</el-button>
        </div>

        <div class="tool-section">
          <span class="section-title">编辑工具</span>
          <el-button @click="selectFeature()">选择</el-button>
          <el-button @click="translateFeature()">移动</el-button>
          <el-button @click="modifyFeature()">修改</el-button>
          <el-button @click="resetStatus()">取消</el-button>
        </div>

        <div class="tool-section">
          <span class="section-title">其他工具</span>
          <el-button @click="clearDrawLayer()">清空</el-button>
          <el-button @click="undo()">撤销</el-button>
          <input type="file" ref="fileInput" accept=".zip,.geojson,.json" style="display: none" @change="handleFileUpload" />
          <el-button @click="$refs.fileInput.click()">上传</el-button>
        </div>
      </div>

      <!-- Attribute Panel (Preserved) -->
      <div class="attribute-panel">
        <el-table :data="features" style="width: 100%" max-height="100%" :fit="true">
          <el-table-column prop="id" label="ID" min-width="100"></el-table-column>
          <el-table-column prop="type" label="类型" min-width="100"></el-table-column>
          <el-table-column prop="area" label="面积(m²)" min-width="100"></el-table-column>
          <el-table-column label="操作" min-width="200">
            <template v-slot="scope">
              <el-button size="small" @click="locateFeature(scope.row)">定位</el-button>
              <el-button size="small" type="danger" @click="deleteFeature(scope.row)">删除</el-button>
              <el-button size="small" @click="viewFeatureGeoJSON(scope.row)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>


```

## src/views/Map_simple.vue

基础 OpenLayers 示例，涵盖绘制、选择、平移、修改、WMS/矢量加载与样式。

```vue
<template>
  <HeaderBar />

  <div class="container">
    <div class="map-wrapper">
      <div id="mapDom" class="map"></div>

      <div id="popup" class="ol-popup" v-show="uiStore.isShowingPopup">
        <a href="#" id="popup-closer" class="ol-popup-closer" @click.prevent="uiStore.hidePopup">X</a>
        <div id="popup-content"></div>
      </div>

      <ChartPanel />
      <SuggestionPanel />
      <LayerManager />
      <MapLegend />
      <GeoJSONViewer />
      <BasemapSelector v-model:visible="uiStore.basemapVisible" @basemap-change="setBasemap" />

      <div class="toolbar">
        <div class="tool-section">
          <span class="section-title">绘制工具</span>
          <el-button :class="{ active: activeTool === 'Point' }" @click="drawFeature('Point')">点</el-button>
          <el-button :class="{ active: activeTool === 'LineString' }" @click="drawFeature('LineString')">线</el-button>
          <el-button :class="{ active: activeTool === 'Polygon' }" @click="drawFeature('Polygon')">多边形</el-button>
        </div>

        <div class="tool-section">
          <span class="section-title">编辑工具</span>
          <el-button @click="selectFeature()">选择</el-button>
          <el-button @click="translateFeature()">移动</el-button>
          <el-button @click="modifyFeature()">修改</el-button>
          <el-button @click="resetStatus()">取消</el-button>
        </div>

        <div class="tool-section">
          <span class="section-title">其他工具</span>
          <el-button @click="clearDrawLayer()">清空</el-button>
          <el-button @click="undo()">撤销</el-button>
          <input type="file" ref="fileInput" accept=".zip,.geojson,.json" style="display: none" @change="handleFileUpload" />
          <el-button @click="fileInput.click()">上传</el-button>
        </div>
      </div>

      <div class="attribute-panel">
        <el-table :data="features" style="width: 100%" max-height="100%" :fit="true">
          <el-table-column prop="id" label="ID" min-width="100"></el-table-column>
          <el-table-column prop="type" label="类型" min-width="100"></el-table-column>
          <el-table-column label="操作" min-width="200">
            <template v-slot="scope">
              <el-button size="small" @click="locateFeature(scope.row)">定位</el-button>
              <el-button size="small" type="danger" @click="deleteFeature(scope.row)">删除</el-button>
              <el-button size="small" @click="viewFeatureGeoJSON(scope.row)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import Overlay from 'ol/Overlay'
import { Draw, Select, Translate, Modify } from 'ol/interaction'
import { Vector as VectorLayer } from 'ol/layer'
import ImageLayer from 'ol/layer/Image'
import { Vector as VectorSource } from 'ol/source'
import ImageWMS from 'ol/source/ImageWMS'
import { Style, Fill, Stroke, Circle as CircleStyle } from 'ol/style'
import GeoJSON from 'ol/format/GeoJSON'
import { ref, onMounted, provide } from 'vue'
import { ElMessage } from 'element-plus'

import HeaderBar from '@/components/map/HeaderBar.vue'
import ChartPanel from '@/components/map/ChartPanel.vue'
import LayerManager from '@/components/map/LayerManager.vue'
import MapLegend from '@/components/map/MapLegend.vue'
import GeoJSONViewer from '@/components/map/GeoJSONViewer.vue'
import SuggestionPanel from '@/components/map/SuggestionPanel.vue'
import BasemapSelector from '@/components/basemap/BasemapSelector.vue'

import { useMapStore, useLayersStore, useFeaturesStore, useUIStore, useDataStore } from '@/stores'
import newLayer from '@/utils/newLayer.js'
import shp from 'shpjs'

const mapStore = useMapStore()
const layersStore = useLayersStore()
const featuresStore = useFeaturesStore()
const uiStore = useUIStore()
const dataStore = useDataStore()

const map = ref(null)
const activeTool = ref(null)
const features = ref([])
const fileInput = ref(null)

const draw = ref(null)
const select = ref(null)
const translate = ref(null)
const modify = ref(null)
const popup = ref(null)

provide('map', () => map.value)
provide('loadShp', loadShp)

function initMap() {
  map.value = new Map({
    target: 'mapDom',
    view: new View({
      projection: 'EPSG:3857',
      center: [12758612.973162018, 3562849.0216611675],
      zoom: 17.5,
      minZoom: 2,
      maxZoom: 20,
      smoothResolutionConstraint: true,
    }),
    pixelRatio: 1,
  })

  setBasemap('Gaode')

  popup.value = new Overlay({
    element: document.getElementById('popup'),
    autoPan: true,
  })
  map.value.addOverlay(popup.value)

  mapStore.mapInstance = map.value
}

function setBasemap(name) {
  const layers = map.value.getLayers().getArray()
  layers.forEach((layer) => {
    if (layer.get('type') === 'basemap') {
      map.value.removeLayer(layer)
    }
  })

  const basemapLayer = newLayer(name)
  if (basemapLayer) {
    basemapLayer.set('type', 'basemap')
    basemapLayer.setZIndex(0)
    map.value.addLayer(basemapLayer)
  }
}

function loadShp() {
  if (dataStore.selectedDataType.length === 0 || !dataStore.selectedYear) {
    ElMessage.error('请选择数据类型和数据年份')
    return
  }

  const workspace = 'water_twin'
  let layerName = ''

  const [type1, type2] = dataStore.selectedDataType
  const year = dataStore.selectedYear

  if (type1 === 'landUse' && type2 === 'greenSpace') {
    layerName = `绿地_${year}`
  } else if (type1 === 'greenAccessibility') {
    const accessMap = { walkAccess: '步行可达性', nearAccess: '近邻可达性', driveAccess: '驾车可达性', sumAccess: '总体可达性' }
    layerName = `${accessMap[type2]}_${year}`
  }

  if (!layerName) {
    ElMessage.error('无效的数据类型')
    return
  }

  const existingLayers = map.value.getLayers().getArray()
  existingLayers.forEach((layer) => {
    if (layer.get('type') === 'wms') {
      map.value.removeLayer(layer)
    }
  })

  const wmsLayer = new ImageLayer({
    source: new ImageWMS({
      url: 'http://localhost:8080/geoserver/wms',
      params: { LAYERS: `${workspace}:${layerName}`, TILED: true },
      serverType: 'geoserver',
    }),
  })

  wmsLayer.set('type', 'wms')
  wmsLayer.set('name', layerName)
  wmsLayer.setZIndex(100)

  map.value.addLayer(wmsLayer)
  layersStore.addLayer(layerName, wmsLayer)
  ElMessage.success(`已加载图层: ${layerName}`)
}

function drawFeature(featureType) {
  resetStatus()
  activeTool.value = featureType

  draw.value = new Draw({
    source: layersStore.drawSource,
    type: featureType,
    freehand: false,
    snapTolerance: 12,
    stopClick: true,
    style: new Style({
      fill: new Fill({ color: 'rgba(255, 204, 51, 0.2)' }),
      stroke: new Stroke({ color: '#ffcc33', width: 3 }),
      image: new CircleStyle({ radius: 7, fill: new Fill({ color: '#ffcc33' }) }),
    }),
  })

  draw.value.on('drawend', (event) => {
    const feature = event.feature
    feature.setId(Date.now())
    const geojson = new GeoJSON().writeFeatureObject(feature)
    features.value.push({ id: feature.getId(), type: featureType, feature: feature, geojson: geojson })
    ElMessage.success('绘制完成')
  })

  map.value.addInteraction(draw.value)
}

function selectFeature() {
  resetStatus()
  activeTool.value = 'Select'
  select.value = new Select({ style: new Style({ fill: new Fill({ color: 'rgba(64, 158, 255, 0.3)' }), stroke: new Stroke({ color: '#409eff', width: 3 }) }) })
  map.value.addInteraction(select.value)
}

function translateFeature() {
  resetStatus()
  activeTool.value = 'Translate'
  select.value = new Select()
  translate.value = new Translate({ features: select.value.getFeatures() })
  map.value.addInteraction(select.value)
  map.value.addInteraction(translate.value)
}

function modifyFeature() {
  resetStatus()
  activeTool.value = 'Modify'
  select.value = new Select()
  modify.value = new Modify({ features: select.value.getFeatures() })
  map.value.addInteraction(select.value)
  map.value.addInteraction(modify.value)
}

function resetStatus() {
  activeTool.value = null
  if (draw.value) { map.value.removeInteraction(draw.value); draw.value = null }
  if (select.value) { map.value.removeInteraction(select.value); select.value = null }
  if (translate.value) { map.value.removeInteraction(translate.value); translate.value = null }
  if (modify.value) { map.value.removeInteraction(modify.value); modify.value = null }
}

function clearDrawLayer() {
  if (layersStore.drawSource) {
    layersStore.drawSource.clear()
    features.value = []
    ElMessage.success('已清空绘制图层')
  }
}

function undo() {
  if (layersStore.drawSource) {
    const feats = layersStore.drawSource.getFeatures()
    if (feats.length > 0) {
      layersStore.drawSource.removeFeature(feats[feats.length - 1])
      ElMessage.success('已撤销')
    }
  }
}

function handleFileUpload(event) {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  if (file.name.endsWith('.geojson') || file.name.endsWith('.json')) {
    reader.onload = (e) => {
      try {
        const geojson = JSON.parse(e.target.result)
        const feats = new GeoJSON().readFeatures(geojson, { featureProjection: 'EPSG:3857' })
        layersStore.drawSource.addFeatures(feats)
        ElMessage.success('GeoJSON加载成功')
      } catch (error) {
        ElMessage.error('GeoJSON格式错误')
      }
    }
    reader.readAsText(file)
  } else if (file.name.endsWith('.zip')) {
    reader.onload = (e) => {
      shp(e.target.result).then((geojson) => {
        const feats = new GeoJSON().readFeatures(geojson, { featureProjection: 'EPSG:3857' })
        layersStore.drawSource.addFeatures(feats)
        ElMessage.success('Shapefile加载成功')
      }).catch(() => {
        ElMessage.error('Shapefile加载失败')
      })
    }
    reader.readAsArrayBuffer(file)
  }
}

function locateFeature(row) {
  if (row.feature) {
    const extent = row.feature.getGeometry().getExtent()
    map.value.getView().fit(extent, { padding: [50, 50, 50, 50] })
  }
}

function deleteFeature(row) {
  if (row.feature) {
    layersStore.drawSource.removeFeature(row.feature)
    features.value = features.value.filter((f) => f.id !== row.id)
    ElMessage.success('已删除')
  }
}

function viewFeatureGeoJSON(row) {
  featuresStore.currentFeatureGeoJSON = JSON.stringify(row.geojson, null, 2)
  uiStore.showGeoJSONViewer()
}

onMounted(() => {
  initMap()
  layersStore.initDrawLayer()
  resetStatus()
})
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.map-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.map {
  width: 100%;
  height: 100%;
}

.ol-popup {
  position: absolute;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  bottom: 12px;
  left: -50px;
  min-width: 280px;
}

.ol-popup-closer {
  text-decoration: none;
  position: absolute;
  top: 2px;
  right: 8px;
  color: #409eff;
}

.toolbar {
  position: absolute;
  top: 110px;
  left: 20px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  z-index: 10;
}

.tool-section {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.tool-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.section-title {
  display: block;
  font-size: 12px;
  color: #909399;
  margin-bottom: 8px;
  font-weight: bold;
}

.el-button {
  margin-right: 5px;
  margin-bottom: 5px;
}

.el-button.active {
  background-color: #ffcc33;
  border-color: #ffcc33;
  color: #333;
}

.attribute-panel {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  height: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 10;
}
</style>

```

## src/views/testWFS.vue

WFS 拉取与矢量渲染测试示例。

```vue
<template>
  <div>
    <h1>测试WFS</h1>
  </div>
  <div>
    <button @click="returnToMain">返回</button>
  </div>
  <div id="map" class="map"></div>
</template>

<script>
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { Vector as VectorLayer, Tile as TileLayer } from "ol/layer";
import { Vector as VectorSource, OSM } from "ol/source";
import { GeoJSON } from "ol/format";
import { bbox } from "ol/loadingstrategy";
import { Style, Stroke, Circle, Fill } from "ol/style";
import { Projection } from "ol/proj";
import { bbox as bboxStrategy } from "ol/loadingstrategy";
export default {
  methods: {
    init() {
    testWFS() {
      const vectorSource = new VectorSource();
      const vector = new VectorLayer({
        source: vectorSource,
        style: new Style({
          stroke: new Stroke({
            color: "rgba(0, 0, 255, 1.0)",
            width: 2,
          }),
        }),
      });
      const map = this.mapStore.mapInstance;
      map.addLayer(vector);

      const serverUrl = import.meta.env.VITE_GEOSERVER_URL || 'http://localhost:8080/geoserver';
      const url = `${serverUrl}/GreenAccessibility/ows`;
      const featureRequest = new WFS().writeGetFeature({
        srsName: "EPSG:3857",
        featureNS: "http://www.opengeospatial.net/GreenAccessibility",
        featurePrefix: "GreenAccessibility",
        featureTypes: ["greenAccessibility_walk_noFactor_2030"],
        outputFormat: "application/json",
      let wfsVectorLayer = new VectorLayer({
        properties: {
          name: "wfs",
          title: "WFS服务",
        },
        source: new VectorSource({
          format: new GeoJSON(),
          url: (extent) => {
            return (
              url +
              "?service=WFS&" +
              "version=1.0.0&request=GetFeature&typename=GreenAccessibility:greenAccessibility_sum_noFactor_2030	&" +
              "maxFeatures=10000&" +
              "outputFormat=application/json"
            );
          },
          strategy: bboxStrategy,
        }),
      });

      console.log(wfsVectorLayer);

      let map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          wfsVectorLayer,
        ],
        target: "map",
        view: new View({
          projection: "EPSG:4326",
          center: [114.169, 22.6676],
          zoom: 11,
        }),
      });
    },
    returnToMain() {
      this.$router.push("/map");
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 800px;
}
</style>

```

## src/views/testWMTS.vue

WMTS 切片加载测试示例。

```vue
<template>
  <div>
    <h1>测试WMTS</h1>
  </div>
  <div>
    <button @click="returnToMain">返回</button>
  </div>
  <div id="map" class="map"></div>
</template>

<script>
import Map from "ol/Map.js";
import View from "ol/View.js";
import { defaults as defaultControls } from "ol/control.js";
import { getWidth, getTopLeft } from "ol/extent.js";
import TileLayer from "ol/layer/Tile.js";
import { get as getProjection } from "ol/proj.js";
import OSM from "ol/source/OSM.js";
import WMTS from "ol/source/WMTS.js";
import WMTSTileGrid from "ol/tilegrid/WMTS.js";
import { Projection } from "ol/proj.js";
export default {
  methods: {
    init() {
      var gridsetName = "EPSG:4326";
      var gridNames = [
        "EPSG:4326:0",
        "EPSG:4326:1",
        "EPSG:4326:2",
        "EPSG:4326:3",
        "EPSG:4326:4",
        "EPSG:4326:5",
        "EPSG:4326:6",
        "EPSG:4326:7",
        "EPSG:4326:8",
        "EPSG:4326:9",
        "EPSG:4326:10",
        "EPSG:4326:11",
        "EPSG:4326:12",
        "EPSG:4326:13",
        "EPSG:4326:14",
        "EPSG:4326:15",
        "EPSG:4326:16",
        "EPSG:4326:17",
        "EPSG:4326:18",
        "EPSG:4326:19",
        "EPSG:4326:20",
        "EPSG:4326:21",
      ];
      const serverUrl = import.meta.env.VITE_GEOSERVER_URL || 'http://localhost:8080/geoserver';
      var baseUrl = `${serverUrl}/gwc/service/wmts`;
      var style = "";
      var format = "image/png";
      var infoFormat = "text/html";
      var layerName = "Landuse:landuse_predict_noFactor_2030";
      var projection = new Projection({
        code: "EPSG:4326",
        units: "degrees",
        axisOrientation: "neu",
      });
      var resolutions = [
        0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625, 0.010986328125,
        0.0054931640625, 0.00274658203125, 0.001373291015625, 6.866455078125e-4, 3.4332275390625e-4,
        1.71661376953125e-4, 8.58306884765625e-5, 4.291534423828125e-5, 2.1457672119140625e-5,
        1.0728836059570312e-5, 5.364418029785156e-6, 2.682209014892578e-6, 1.341104507446289e-6,
        6.705522537231445e-7, 3.3527612686157227e-7,
      ];
      var baseParams = [
        "VERSION",
        "LAYER",
        "STYLE",
        "TILEMATRIX",
        "TILEMATRIXSET",
        "SERVICE",
        "FORMAT",
      ];

      var params = {
        VERSION: "1.0.0",
        LAYER: layerName,
        STYLE: style,
        TILEMATRIX: gridNames,
        TILEMATRIXSET: gridsetName,
        SERVICE: "WMTS",
        FORMAT: format,
      };

      var url = baseUrl + "?";
      for (var i = 0; i < baseParams.length; i++) {
        var p = baseParams[i];
        url += p + "=" + params[p] + "&";
      }
      console.log(url);

      const map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
            opacity: 0.7,
          }),
          new TileLayer({
            opacity: 0.7,
            source: new WMTS({
              attributions: "...",
              url: url,
              layer: "Landuse:landuse_predict_noFactor_2030",
              matrixSet: "EPSG:4326",
              format: "image/png",
              projection: projection,
              tileGrid: new WMTSTileGrid({
                tileSize: [256, 256],
                extent: [-180.0, -90.0, 180.0, 90.0],
                origin: [-180.0, 90.0],
                resolutions: resolutions,
                matrixIds: params["TILEMATRIX"],
              }),
              style: "Landuse:landuse_predict_style",
            }),
          }),
        ],
        target: "map",
        controls: defaultControls({
          attributionOptions: {
            collapsible: false,
          },
        }),
        view: new View({
          center: [0, 0],
          zoom: 2,
          resolutions: resolutions,
          projection: projection,
          extent: [-180.0, -90.0, 180.0, 90.0],
        }),
      });
      map
        .getView()
        .fit(
          [113.73282477419558, 22.39343905200582, 114.62931714067045, 22.873719164378816],
          map.getSize()
        );
    },
    returnToMain() {
      this.$router.push("/map");
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 800px;
}
</style>

```

## src/components/map/MapTools.vue

工具条组件，触发绘制/编辑/量测/清空等命令。

```vue
<template>
  <div class="map-tools">
    <!-- Draw Tools -->
    <div class="tool-group glass-panel">
      <div class="group-title">绘制</div>
      <el-button-group vertical>
        <el-tooltip content="绘制点" placement="right" :show-after="500">
          <el-button 
            :class="{ active: activeTool === 'Point' }" 
            @click="$emit('command', 'drawFeature', 'Point')"
          >画点</el-button>
        </el-tooltip>
        <el-tooltip content="绘制线" placement="right" :show-after="500">
          <el-button 
            :class="{ active: activeTool === 'LineString' }" 
            @click="$emit('command', 'drawFeature', 'LineString')"
          >画线</el-button>
        </el-tooltip>
        <el-tooltip content="绘制面" placement="right" :show-after="500">
          <el-button 
            :class="{ active: activeTool === 'Polygon' }" 
            @click="$emit('command', 'drawFeature', 'Polygon')"
          >画面</el-button>
        </el-tooltip>
      </el-button-group>
    </div>

    <!-- Edit Tools -->
    <div class="tool-group glass-panel">
      <div class="group-title">编辑</div>
      <el-button-group vertical>
        <el-tooltip content="选择要素" placement="right" :show-after="500">
          <el-button 
            :class="{ active: activeTool === 'selectFeature' }" 
            @click="$emit('command', 'selectFeature')"
          >选择</el-button>
        </el-tooltip>
        <el-tooltip content="平移要素" placement="right" :show-after="500">
          <el-button 
            :class="{ active: activeTool === 'translateFeature' }" 
            @click="$emit('command', 'translateFeature')"
          >平移</el-button>
        </el-tooltip>
        <el-tooltip content="编辑节点" placement="right" :show-after="500">
          <el-button 
            :class="{ active: activeTool === 'editVertices' }" 
            @click="$emit('command', 'editVertices')"
          >编辑</el-button>
        </el-tooltip>
        <el-tooltip content="旋转要素" placement="right" :show-after="500">
          <el-button 
            :class="{ active: activeTool === 'rotateFeature' }" 
            @click="$emit('command', 'rotateFeature')"
          >旋转</el-button>
        </el-tooltip>
      </el-button-group>
    </div>

    <!-- Operation Tools -->
    <div class="tool-group glass-panel">
      <div class="group-title">操作</div>
      <el-button-group vertical>
        <el-tooltip content="撤销上一步" placement="right" :show-after="500">
          <el-button @click="$emit('command', 'undo')">撤回</el-button>
        </el-tooltip>
        <el-tooltip content="清除所有绘制" placement="right" :show-after="500">
          <el-button @click="$emit('command', 'clearDrawLayer')">清除</el-button>
        </el-tooltip>
        <el-tooltip content="测量距离" placement="right" :show-after="500">
          <el-button 
            :class="{ active: activeTool === 'measureDistance' }" 
            @click="$emit('command', 'measureDistance')"
          >测距</el-button>
        </el-tooltip>
         <el-tooltip content="取消当前操作" placement="right" :show-after="500">
          <el-button @click="$emit('command', 'resetStatus')">取消</el-button>
        </el-tooltip>
      </el-button-group>
    </div>
    
     <!-- View Tools -->
    <div class="tool-group glass-panel">
      <div class="group-title">视图</div>
      <el-button-group vertical>
         <el-button @click="$emit('command', 'onMoveWh')">深圳</el-button>
         <el-button @click="$emit('command', 'onRestore')">复位</el-button>
         <el-button @click="$emit('command', 'checkArea')" :class="{ active: activeTool === 'checkArea' }">信息</el-button>
      </el-button-group>
    </div>

    <!-- Data Tools -->
    <div class="tool-group glass-panel">
      <div class="group-title">数据</div>
      <el-button-group vertical>
        <el-tooltip content="上传 GeoJSON/Shapefile" placement="right" :show-after="500">
          <el-button @click="$emit('command', 'openFileUpload')">上传</el-button>
        </el-tooltip>
        <el-tooltip content="测试 WMTS 服务" placement="right" :show-after="500">
          <el-button @click="$emit('command', 'testWMTS')">WMTS</el-button>
        </el-tooltip>
        <el-tooltip content="测试 WFS 服务" placement="right" :show-after="500">
          <el-button @click="$emit('command', 'testWFS')">WFS</el-button>
        </el-tooltip>
      </el-button-group>
    </div>
  </div>
</template>

<script setup>
defineProps({
  activeTool: {
    type: String,
    default: null
  }
})

defineEmits(['command'])
</script>

<style scoped>
.map-tools {
  position: absolute;
  top: 110px;
  left: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tool-group {
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;
}

.tool-group:hover {
  transform: translateX(4px);
}

.group-title {
  font-size: 10px;
  color: var(--text-secondary);
  margin-bottom: 6px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.el-button-group > .el-button {
  width: 48px;
  height: 32px;
  padding: 0;
  font-size: 12px;
  margin-bottom: 1px;
}

.el-button.active {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}
</style>

```

## src/components/MapComponent.vue

早期地图组件示例（已注释），展示多底图切换。

```vue
<!-- <template>
  <div>
    <div ref="mapContainer" class="map-container"></div>
    <div class="map-buttons">
      <button @click="setMapSource('baidu')">百度地图</button>
      <button @click="setMapSource('gaode')">高德地图</button>
      <button @click="setMapSource('tianditu')">天地图</button>
    </div>
  </div>
</template>

<script>
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

export default {
  name: 'MapComponent',
  data() {
    return {
      map: null,
      layers: {
        baidu: new TileLayer({
          source: new XYZ({
            url: 'http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&s=1', // URL 需要根据实际情况调整
            projection: 'EPSG:3857',
            tileGrid: /* tile grid settings */
          })
        }),
        gaode: new TileLayer({
          source: new XYZ({
            url: 'http://webst{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}', // URL 需要根据实际情况调整
            projection: 'EPSG:3857'
          })
        }),
        tianditu: new TileLayer({
          source: new XYZ({
            url: 'http://t{s}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=你的天地图密钥', // URL 需要根据实际情况调整
            projection: 'EPSG:3857'
          })
        })
      }
    };
  },
  methods: {
    initMap() {
      this.map = new Map({
        target: this.$refs.mapContainer,
        layers: [this.layers.gaode],
        view: new View({
          center: [0, 0], // 初始中心点
          zoom: 4 // 初始缩放级别
        })
      });
    },
    setMapSource(source) {
      const layer = this.layers[source];
      if (layer) {
        this.map.setLayers([layer]);
      }
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style>
.map-container {
  width: 100%;
  height: 400px;
}
</style> -->

```

## src/components/basemap/BasemapSelector.vue

底图选择组件，支持 ArcGIS/Bing/OSM 等瓦片源。

```vue
<template>
  <div v-if="visible" class="basemap-container">
    <div
      v-for="basemap in basemaps"
      :key="basemap.name"
      class="basemap-item"
      @click="handleBasemapClick(basemap.name)"
    >
      <img :src="basemap.thumbnail" :alt="basemap.name" />
      <span>{{ basemap.name }}</span>
    </div>
  </div>
</template>

<script setup>
// defineProps 和 defineEmits 是编译器宏，不需要导入

// Props
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

// Emits
const emit = defineEmits(["update:visible", "basemap-change"]);

// 底图配置
const basemaps = [
  {
    name: "OSM",
    thumbnail: new URL("../../assets/images/osm-thumbnail.png", import.meta.url).href,
  },
  {
    name: "ArcGIS",
    thumbnail: new URL("../../assets/images/satellite-thumbnail.png", import.meta.url).href,
  },
  {
    name: "Tian",
    thumbnail: new URL("../../assets/images/tian-thumbnail.png", import.meta.url).href,
  },
  {
    name: "Gaode",
    thumbnail: new URL("../../assets/images/gaode-thumbnail.png", import.meta.url).href,
  },
  {
    name: "Baidu",
    thumbnail: new URL("../../assets/images/baidu-thumbnail.png", import.meta.url).href,
  },
  {
    name: "Bing",
    thumbnail: new URL("../../assets/images/bing-thumbnail.png", import.meta.url).href,
  },
  {
    name: "Google",
    thumbnail: new URL("../../assets/images/google-thumbnail.png", import.meta.url).href,
  },
  {
    name: "WMTS",
    thumbnail: new URL("../../assets/images/wmts-thumbnail.png", import.meta.url).href,
  },
  {
    name: "None",
    thumbnail: new URL("../../assets/images/none-thumbnail.png", import.meta.url).href,
  },
];

// 处理底图点击
const handleBasemapClick = (name) => {
  emit("basemap-change", name);
  emit("update:visible", false);
};
</script>

<style scoped>
.basemap-container {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 16px;
  display: flex;
  gap: 12px;
  
  /* Glassmorphism */
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  border-radius: var(--panel-radius);
  
  /* Animation */
  transition: all var(--transition-speed) ease;
}

.basemap-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
  padding: 4px;
  border-radius: 8px;
}

.basemap-item:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.4);
}

.basemap-item img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: border-color 0.2s;
}

.basemap-item:hover img {
  border-color: var(--primary-color);
}

.basemap-item span {
  margin-top: 6px;
  font-size: 12px;
  color: var(--text-main);
  font-weight: 500;
}
</style>

```

## src/stores/features.js

Pinia 特征要素存储，记录绘制结果、选中状态、撤销栈。

```js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFeaturesStore = defineStore('features', () => {
  // State
  const features = ref([])
  const selectedFeatures = ref([])
  const activeTool = ref(null)
  const undoStack = ref([])

  // Interaction instances (managed by Map.vue)
  const drawInteraction = ref(null)
  const selectInteraction = ref(null)
  const modifyInteraction = ref(null)
  const translateInteraction = ref(null)
  const measureInteraction = ref(null)
  const transformInteraction = ref(null)

  // GeoJSON Viewer state
  const selectedFeatureGeoJSON = ref(null)

  // Actions
  function addFeature(feature) {
    const id = feature.getId()
    const geometry = feature.getGeometry()
    const type = geometry.getType()
    let area = 0

    if (type === 'Polygon') {
      area = geometry.getArea()
    }

    const featureData = {
      id,
      type,
      area: area.toFixed(2),
      selected: false,
      feature, // 保存原始feature引用
    }

    features.value.push(featureData)
    undoStack.value.push(feature)

    console.log(`要素添加成功: ${id} (${type})`)
  }

  function removeFeature(id) {
    const index = features.value.findIndex((f) => f.id === id)

    if (index !== -1) {
      const feature = features.value[index]
      features.value.splice(index, 1)

      // 从选中列表中移除
      const selectedIndex = selectedFeatures.value.findIndex((f) => f.id === id)
      if (selectedIndex !== -1) {
        selectedFeatures.value.splice(selectedIndex, 1)
      }

      console.log(`要素删除成功: ${id}`)
      return feature
    }

    return null
  }

  function selectFeature(id) {
    const feature = features.value.find((f) => f.id === id)

    if (feature && !feature.selected) {
      feature.selected = true
      selectedFeatures.value.push(feature)
      console.log(`要素选中: ${id}`)
    }
  }

  function deselectFeature(id) {
    const feature = features.value.find((f) => f.id === id)

    if (feature && feature.selected) {
      feature.selected = false
      const index = selectedFeatures.value.findIndex((f) => f.id === id)
      if (index !== -1) {
        selectedFeatures.value.splice(index, 1)
      }
      console.log(`要素取消选中: ${id}`)
    }
  }

  function clearSelection() {
    selectedFeatures.value.forEach((feature) => {
      feature.selected = false
    })
    selectedFeatures.value = []
    console.log('清空选中')
  }

  function toggleFeatureSelection(id) {
    const feature = features.value.find((f) => f.id === id)

    if (feature) {
      if (feature.selected) {
        deselectFeature(id)
      } else {
        selectFeature(id)
      }
    }
  }

  function undo() {
    if (undoStack.value.length > 0) {
      const lastFeature = undoStack.value.pop()
      const lastId = lastFeature.getId()

      removeFeature(lastId)

      console.log(`撤销操作: 移除要素 ${lastId}`)
      return lastFeature
    }

    return null
  }

  function clearAll() {
    features.value = []
    selectedFeatures.value = []
    undoStack.value = []
    console.log('清空所有要素')
  }

  function setActiveTool(tool) {
    activeTool.value = tool
    console.log(`激活工具: ${tool}`)
  }

  function resetActiveTool() {
    activeTool.value = null
    console.log('重置工具')
  }

  function setGeoJSONViewer(featureGeoJSON) {
    selectedFeatureGeoJSON.value = featureGeoJSON
  }

  function getFeatureById(id) {
    return features.value.find((f) => f.id === id)
  }

  function updateFeature(id, updates) {
    const feature = features.value.find((f) => f.id === id)

    if (feature) {
      Object.assign(feature, updates)
      console.log(`要素更新成功: ${id}`)
    }
  }

  return {
    // State
    features,
    selectedFeatures,
    activeTool,
    undoStack,

    // Interaction refs
    drawInteraction,
    selectInteraction,
    modifyInteraction,
    translateInteraction,
    measureInteraction,
    transformInteraction,

    // GeoJSON Viewer
    selectedFeatureGeoJSON,

    // Actions
    addFeature,
    removeFeature,
    selectFeature,
    deselectFeature,
    clearSelection,
    toggleFeatureSelection,
    undo,
    clearAll,
    setActiveTool,
    resetActiveTool,
    setGeoJSONViewer,
    getFeatureById,
    updateFeature,
  }
})

```

## src/stores/layers.js

Pinia 图层管理，封装 OpenLayers 矢量样式与可见性排序。

```js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Vector as VectorLayer } from 'ol/layer'
import { Vector as VectorSource } from 'ol/source'
import { Style, Fill, Stroke, Circle } from 'ol/style'
import { useMapStore } from './map'

export const useLayersStore = defineStore('layers', () => {
  // State
  const layers = ref([])
  const checkedLayers = ref([])
  const drawLayer = ref(null)
  const drawSource = ref(null)

  // Actions
  function initDrawLayer() {
    const mapStore = useMapStore()

    // 创建绘图数据源
    drawSource.value = new VectorSource()

    // 创建绘图图层（应用性能优化配置）
    drawLayer.value = new VectorLayer({
      properties: {
        name: '绘图图层',
        type: 'draw',
      },
      source: drawSource.value,
      style: new Style({
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.2)',
        }),
        stroke: new Stroke({
          color: '#ffcc33',
          width: 3,
        }),
        image: new Circle({
          radius: 7,
          fill: new Fill({
            color: '#ffcc33',
          }),
        }),
      }),
      zIndex: 1200,

      // 性能优化关键配置（来自 DRAW_OPTIMIZATION.md）
      updateWhileAnimating: true, // 地图平移/旋转动画时也更新
      updateWhileInteracting: true, // 用户交互（拖拽、缩放）时也更新
      renderBuffer: 250, // 增加渲染缓冲区，提前渲染屏幕外的要素
      renderOrder: null, // 设置渲染顺序
    })

    // 添加到地图
    if (mapStore.mapInstance) {
      mapStore.mapInstance.addLayer(drawLayer.value)

      // 添加到图层管理数组
      const layerInfo = {
        name: '绘图图层',
        layer: drawLayer.value,
        index: layers.value.length + 1,
        visible: true,
      }

      layers.value.unshift(layerInfo)
      checkedLayers.value.push('绘图图层')

      console.log('绘图图层初始化完成（已应用性能优化）')
    }
  }

  function addLayer(name, layer) {
    const mapStore = useMapStore()

    if (mapStore.mapInstance) {
      // 添加到地图
      mapStore.mapInstance.addLayer(layer)

      // 添加到图层列表
      const layerInfo = {
        name,
        layer,
        index: layers.value.length + 1,
        visible: true,
      }

      layers.value.push(layerInfo)
      checkedLayers.value.push(name)

      console.log(`图层添加成功: ${name}`)
    }
  }

  function removeLayer(name) {
    const mapStore = useMapStore()
    const layerInfo = layers.value.find((l) => l.name === name)

    if (layerInfo && mapStore.mapInstance) {
      // 从地图移除
      mapStore.mapInstance.removeLayer(layerInfo.layer)

      // 从列表移除
      layers.value = layers.value.filter((l) => l.name !== name)
      checkedLayers.value = checkedLayers.value.filter((n) => n !== name)

      console.log(`图层移除成功: ${name}`)
    }
  }

  function toggleLayerVisibility(name, isVisible = null) {
    const layerInfo = layers.value.find((l) => l.name === name)

    if (layerInfo) {
      // 如果未提供 isVisible 参数，则从 checkedLayers 中获取
      const visible = isVisible !== null ? isVisible : checkedLayers.value.includes(name)
      layerInfo.layer.setVisible(visible)
      layerInfo.visible = visible

      console.log(`图层可见性切换: ${name} = ${visible}`)
    }
  }

  function updateLayerOrder() {
    // 根据数组顺序更新 z-index
    // 数组顶部的图层显示在最上面
    layers.value.forEach((layerInfo, index) => {
      const zIndex = 1000 - index // 越靠前的图层 z-index 越高
      layerInfo.layer.setZIndex(zIndex)
      layerInfo.index = index + 1
    })

    console.log('图层顺序已更新')
  }

  function clearDrawLayer() {
    if (drawSource.value) {
      drawSource.value.clear()
      console.log('绘图图层已清空')
    }
  }

  function getLayerByName(name) {
    const layerInfo = layers.value.find((l) => l.name === name)
    return layerInfo?.layer || null
  }

  function getAllLayers() {
    return layers.value.map((l) => l.layer)
  }

  return {
    // State
    layers,
    checkedLayers,
    drawLayer,
    drawSource,

    // Actions
    initDrawLayer,
    addLayer,
    removeLayer,
    toggleLayerVisibility,
    updateLayerOrder,
    clearDrawLayer,
    getLayerByName,
    getAllLayers,
  }
})

```

## src/stores/map.js

Pinia 地图实例与视图控制（缩放、旋转、坐标展示）。

```js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Map, View } from 'ol'
import { Zoom, ZoomSlider, ScaleLine, MousePosition } from 'ol/control'
import { createStringXY } from 'ol/coordinate'
import { transform } from 'ol/proj'

export const useMapStore = defineStore('map', () => {
  // State
  const mapInstance = ref(null)
  const view = ref(null)
  const zoom = ref(17.5)
  const center = ref([12758612.973162018, 3562849.0216611675]) // 深圳
  const rotation = ref(0)

  // Initial values for restore
  const initialZoom = 17.5
  const initialCenter = [12758612.973162018, 3562849.0216611675]
  const initialRotation = 0

  // Getters
  const currentZoom = computed(() => view.value?.getZoom() || zoom.value)
  const currentCenter = computed(() => view.value?.getCenter() || center.value)
  const currentRotation = computed(() => view.value?.getRotation() || rotation.value)

  // Actions
  function initMap(targetId) {
    // 创建视图
    view.value = new View({
      projection: 'EPSG:3857',
      center: center.value,
      zoom: zoom.value,
      minZoom: 2,
      maxZoom: 20,
      smoothResolutionConstraint: true, // 平滑缩放
    })

    // 创建地图
    mapInstance.value = new Map({
      target: targetId,
      view: view.value,
      // 性能优化配置
      pixelRatio: 1, // 使用物理像素比1，提高性能
    })

    // 创建控件
    const zoomControl = new Zoom()
    const zoomSliderControl = new ZoomSlider()
    const scaleLineControl = new ScaleLine({ units: 'metric' })
    const mousePositionControl = new MousePosition({
      coordinateFormat: createStringXY(4),
      projection: 'EPSG:4326',
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position'),
      undefinedHTML: '&nbsp;',
    })

    // 添加控件
    mapInstance.value.addControl(zoomControl)
    mapInstance.value.addControl(zoomSliderControl)
    mapInstance.value.addControl(scaleLineControl)
    mapInstance.value.addControl(mousePositionControl)

    // 监听视图变化
    view.value.on('change:zoom', () => {
      zoom.value = view.value.getZoom()
    })

    view.value.on('change:center', () => {
      center.value = view.value.getCenter()
    })

    view.value.on('change:rotation', () => {
      rotation.value = view.value.getRotation()
    })

    console.log('地图初始化完成')
  }

  function zoomIn() {
    if (view.value) {
      view.value.animate({
        zoom: view.value.getZoom() + 1,
        duration: 250,
      })
    }
  }

  function zoomOut() {
    if (view.value) {
      view.value.animate({
        zoom: view.value.getZoom() - 1,
        duration: 250,
      })
    }
  }

  function restore() {
    if (view.value) {
      view.value.animate({
        center: initialCenter,
        zoom: initialZoom,
        rotation: initialRotation,
        duration: 500,
      })
    }
  }

  function moveToShenzhen() {
    if (view.value) {
      // 武汉坐标 (114.305, 30.593)
      const whCenter = transform([114.305, 30.593], 'EPSG:4326', 'EPSG:3857')
      view.value.animate({
        center: whCenter,
        zoom: 10,
        duration: 1000,
      })
    }
  }

  function setZoom(newZoom) {
    if (view.value) {
      view.value.setZoom(newZoom)
    }
  }

  function setCenter(newCenter) {
    if (view.value) {
      view.value.setCenter(newCenter)
    }
  }

  function fitExtent(extent, options = {}) {
    if (view.value && extent) {
      const defaultOptions = {
        padding: [50, 50, 50, 50],
        duration: 1000,
        ...options,
      }
      view.value.fit(extent, defaultOptions)
    }
  }

  function setMapInstance(map) {
    mapInstance.value = map
    view.value = map.getView()

    // 绑定视图事件监听
    if (view.value) {
      view.value.on('change:zoom', () => {
        zoom.value = view.value.getZoom()
      })
      view.value.on('change:center', () => {
        center.value = view.value.getCenter()
      })
      view.value.on('change:rotation', () => {
        rotation.value = view.value.getRotation()
      })
    }

    console.log('Map instance set in store')
  }

  return {
    // State
    mapInstance,
    view,
    zoom,
    center,
    rotation,

    // Getters
    currentZoom,
    currentCenter,
    currentRotation,

    // Actions
    initMap,
    zoomIn,
    zoomOut,
    restore,
    moveToShenzhen,
    setZoom,
    setCenter,
    fitExtent,
    setMapInstance,
  }
})


```

## src/utils/createLayer.js

图层工厂：按类型创建 XYZ/WMTS/WMS/矢量/矢量瓦片等图层及样式。

```js
import XYZ from "ol/source/XYZ.js";
import BingMaps from "ol/source/BingMaps.js";
import TileImage from "ol/source/TileImage.js";
import TileGrid from "ol/tilegrid/TileGrid.js";
import TileLayer from "ol/layer/Tile.js";
import TileWMS from "ol/source/TileWMS.js";
import WMTS from "ol/source/WMTS.js";
import VectorTileLayer from "ol/layer/VectorTile.js";
import VectorTileSource from "ol/source/VectorTile.js";
import WMTSTileGrid from "ol/tilegrid/WMTS.js";
import { bbox as bboxStrategy } from "ol/loadingstrategy.js";
import GeoJSON from "ol/format/GeoJSON.js";
import KML from "ol/format/KML.js";
import GPX from "ol/format/GPX.js";
import MVT from "ol/format/MVT.js";
import { get as getProj } from "ol/proj";
import { getWidth } from "ol/extent";
import { Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { Fill, Stroke, Style, Text, Circle } from "ol/style";
import { Circle as CircleStyle } from "ol/style";

// 1-创建天地图
const createLyrTian = () => {
  // 你的key
  const key = "719a5d3d8f259e8c5554d3fbb491fbdb";
  return new TileLayer({
    properties: {
      name: "tian",
      title: "天地图",
    },
    visible: true,
    source: new XYZ({
      projection: "EPSG:4326",
      url: `http://t{0-7}.tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${key}`,
    }),
  });
};

// 2-创建百度地图
const createLyrBd = () => {
  let url =
    "http://online{0-3}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&udt=20191119&scaler=1&p=1";

  // 构造分辨率序列
  const resolutions = [];
  for (let i = 0; i < 19; i++) resolutions.push(Math.pow(2, 18 - i));

  // 创建切片规则对象
  const tileGrid = new TileGrid({
    origin: [0, 0],
    resolutions,
  });

  return new TileLayer({
    properties: {
      name: "baidu",
      title: "百度地图",
    },
    visible: false,
    source: new TileImage({
      projection: "EPSG:3857",
      tileGrid: tileGrid,
      tileUrlFunction: function (tileCoord) {
        if (!tileCoord) return "";

        let tempUrl = url;
        tempUrl = tempUrl.replace("{x}", tileCoord[1] < 0 ? `M${-tileCoord[1]}` : tileCoord[1]);
        tempUrl = tempUrl.replace(
          "{y}",
          tileCoord[2] < 0 ? `M${tileCoord[2] + 1}` : -(tileCoord[2] + 1)
        );
        tempUrl = tempUrl.replace("{z}", tileCoord[0]);

        // 范围替换
        var match = /\{(\d+)-(\d+)\}/.exec(tempUrl);
        if (match) {
          var delta = parseInt(match[2]) - parseInt(match[1]);
          var num = Math.round(Math.random() * delta + parseInt(match[1]));
          tempUrl = tempUrl.replace(match[0], num.toString());
        }
        return tempUrl;
      },
    }),
  });
};

// 3-创建高德地图
const createLyrGd = () => {
  return new TileLayer({
    properties: {
      name: "gaode",
      title: "高德地图",
    },
    visible: false,
    source: new XYZ({
      url: "http://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scl=1&style=8&lstyle=7&x={x}&y={y}&z={z}",
    }),
  });
};

// 4-创建OpenStreetMap地图
const createLyrOSM = () => {
  return new TileLayer({
    properties: {
      name: "osm",
      title: "OpenStreetMap地图",
    },
    visible: false,
    source: new OSM(),
  });
};

// 5-创建Bing地图
const createLyrBing = () => {
  // 你的key, 如AvehefmVM_surC2UyDjyO2T_EvSgRUA9Te3_9D_xxxxxxx
  const key = "AvehefmVM_surC2UyDjyO2T_EvSgRUA9Te3_9D_sj88ZYEBNNWxaufCSPGzecf-B";
  return new TileLayer({
    properties: {
      name: "bing",
      title: "Bing地图",
    },
    visible: false,
    source: new BingMaps({
      key: key,
      imagerySet: "RoadOnDemand",
    }),
  });
};

// 6-创建Arcgis地图
const createLyrArc = () => {
  return new TileLayer({
    properties: {
      name: "arc",
      title: "Arcgis地图",
    },
    visible: false,
    source: new XYZ({
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      projection: "EPSG:3857",
    }),
  });
};

// 7-创建WMS图层
const createLyrWMS = () => {
  // 提示跨越时使用代理使用服务代理地址
  // const url = "/local/geoserver/nurc/wms";
  const url = "http://localhost:8080/geoserver/nurc/wms";
  return new TileLayer({
    properties: {
      name: "wms",
      title: "WMS服务",
      locate: [-11853698.36373101, 4522979.57274383, 4],
    },
    visible: false,
    source: new TileWMS({
      url: url,
      params: { LAYERS: "nurc:Img_Sample" },
      projection: "EPSG:4326",
      ratio: 1,
      serverType: "geoserver",
    }),
  });
};

// 8-创建WMTS图层
const createLyrWMTS = () => {
  // 1-构造分辨率序列
  const size = getWidth(getProj("EPSG:4326").getExtent()) / 256;
  const resolutions = [];
  const matrixIds = [];
  for (let i = 0; i < 19; i++) {
    resolutions.push(size / Math.pow(2, i));
    matrixIds.push(i);
  }

  // 2-创建切片规则对象
  const tileGrid = new WMTSTileGrid({
    origin: [-180, 90],
    resolutions: resolutions,
    matrixIds: matrixIds,
  });

  // 3-创建瓦片图层和wmts数据源
  return new TileLayer({
    properties: {
      name: "wmts",
      title: "WMTS服务",
    },
    visible: false,
    source: new WMTS({
      url: "http://t{0-7}.tianditu.gov.cn/vec_c/wmts?tk=${cxApp.tianKey}",
      projection: "EPSG:4326",
      tileGrid: tileGrid,
      crossOrigin: "*",
      format: "image/png",
      layer: "vec",
      matrixSet: "c",
      style: "default",
    }),
  });
};

// 9-创建WFS图层
const createLyrWFS = () => {
  // const url = "/local/geoserver/sf/ows";
  const url = "http://localhost:8080/geoserver/sf/ows";
  return new VectorLayer({
    properties: {
      name: "wfs",
      title: "WFS服务",
      locate: [-11534858.696299767, 5493787.393992992, 7],
    },
    visible: false,
    source: new VectorSource({
      format: new GeoJSON(),
      url: (extent) => {
        return (
          url +
          "?service=WFS&" +
          "version=1.0.0&request=GetFeature&typename=sf:roads&" +
          "outputFormat=application/json&srsname=EPSG:3857&" +
          "bbox=" +
          extent.join(",") +
          ",EPSG:3857"
        );
      },
      strategy: bboxStrategy,
    }),
    style: {
      "stroke-width": 2,
      "stroke-color": "red",
      "fill-color": "rgba(100,100,100,0.25)",
    },
  });
};

// 10-创建GeoJSON图层
const createLyrGeoJSON = () => {
  return new VectorLayer({
    properties: {
      name: "geojson",
      title: "GeoJSON数据",
      locate: [12758643.216901623, 3562584.420464834, 16],
    },
    visible: false,
    source: new VectorSource({
      url: "data/lines.json",
      format: new GeoJSON({
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857",
      }),
    }),
    style: new Style({
      stroke: new Stroke({
        color: "#3672af",
        width: 1,
      }),
    }),
  });
};

// 11-创建KML图层
const createLyrKML = () => {
  return new VectorLayer({
    properties: {
      name: "kml",
      title: "KML数据",
      locate: [864510.0253082548, 5862753.416073311, 10],
    },
    visible: false,
    source: new VectorSource({
      url: "data/lines.kml",
      format: new KML(),
    }),
  });
};

// 12-创建GPX图层
const createLyrGPX = () => {
  const style = {
    Point: new Style({
      image: new CircleStyle({
        fill: new Fill({
          color: "rgba(255,255,0,0.4)",
        }),
        radius: 5,
        stroke: new Stroke({
          color: "#ff0",
          width: 1,
        }),
      }),
    }),
    LineString: new Style({
      stroke: new Stroke({
        color: "#f00",
        width: 3,
      }),
    }),
    MultiLineString: new Style({
      stroke: new Stroke({
        color: "#0f0",
        width: 3,
      }),
    }),
  };

  return new VectorLayer({
    properties: {
      name: "gpx",
      title: "GPX数据",
      locate: [-7916212.305874971, 5228516.283875127, 14],
    },
    visible: false,
    source: new VectorSource({
      url: "data/fells_loop.gpx",
      format: new GPX(),
    }),
    style: function (feature) {
      return style[feature.getGeometry().getType()];
    },
  });
};

// 13-创建矢量瓦片图层
const createLyrVecTile = () => {
  return new VectorTileLayer({
    properties: {
      name: "vectortile",
      title: "矢量瓦片数据",
      locate: [864510.0253082548, 5862753.416073311, 10],
    },
    visible: false,
    source: new VectorTileSource({
      format: new MVT(),
      url: "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/{z}/{y}/{x}.pbf",
    }),
  });
};

export {
  createLyrTian,
  createLyrBd,
  createLyrGd,
  createLyrOSM,
  createLyrBing,
  createLyrArc,
  createLyrWMS,
  createLyrWMTS,
  createLyrWFS,
  createLyrGeoJSON,
  createLyrKML,
  createLyrGPX,
  createLyrVecTile,
};

```

## src/utils/newLayer.js

图层与投影创建辅助，含 WMTS TileGrid、投影注册。

```js
import { OSM, XYZ } from "ol/source";
import { BingMaps } from "ol/source";
import { Vector as VectorSource } from "ol/source";
import { GeoJSON } from "ol/format";
import TileLayer from "ol/layer/Tile.js";
import { addCoordinateTransforms, addProjection, Projection, transform } from "ol/proj";
import { TileGrid } from "ol/tilegrid";
import { TileImage } from "ol/source";
import Tile from "ol/layer/Tile"; // 瓦片渲染方法
import { lngLatToMercator, mercatorToLngLat } from "@/utils/bd09";

import { get as getProj } from "ol/proj";
import { getWidth } from "ol/extent";
import WMTS from "ol/source/WMTS.js";
import WMTSTileGrid from "ol/tilegrid/WMTS.js";

let tianKey = "719a5d3d8f259e8c5554d3fbb491fbdb";
let bingKey = "AvehefmVM_surC2UyDjyO2T_EvSgRUA9Te3_9D_sj88ZYEBNNWxaufCSPGzecf-B";

// 通用瓦片图层性能优化配置
const tileLayerConfig = {
  // 预加载瓦片数量，设为0提高性能（不预加载）
  preload: 0,
  // 使用中间瓦片作为占位符，在新瓦片加载时显示
  useInterimTilesOnError: false,
};

function createLyrBd() {
  let projBD09 = new Projection({
    code: "BD:09",
    extent: [-20037726.37, -11708041.66, 20037726.37, 12474104.17],
    units: "m",
    axisOrientation: "neu",
    global: false,
  });

  addProjection(projBD09);
  addCoordinateTransforms(
    "EPSG:4326",
    projBD09,
    function (coordinate) {
      // eslint-disable-next-line no-undef
      return lngLatToMercator(coordinate);
    },
    function (coordinate) {
      // eslint-disable-next-line no-undef
      return mercatorToLngLat(coordinate);
    }
  );
  /*定义百度地图分辨率与瓦片网格*/
  let resolutions = [];
  for (let i = 0; i <= 18; i++) {
    resolutions[i] = Math.pow(2, 18 - i);
  }

  let tilegrid = new TileGrid({
    origin: [0, 0],
    resolutions: resolutions,
  });

  /*加载百度地图离线瓦片不能用ol.source.XYZ，ol.source.XYZ针对谷歌地图（注意：是谷歌地图）而设计，
      而百度地图与谷歌地图使用了不同的投影、分辨率和瓦片网格。因此这里使用ol.source.TileImage来自行指定
      投影、分辨率、瓦片网格。*/
  let baidu_source = new TileImage({
    projection: projBD09, //投影类型
    tileGrid: tilegrid,
    tileUrlFunction: function (tileCoord) {
      if (!tileCoord) return "";
      let z = tileCoord[0];
      let x = tileCoord[1];
      let y = tileCoord[2];
      // 对编号xy处理
      let baiduX;
      baiduX = x < 0 ? x : "M" + -x;
      let baiduY;
      baiduY = -y;
      console.log("BD-09: ", x, y);
      console.log("WGS84: ", baiduX, baiduY);

      return (
        "http://online3.map.bdimg.com/onlinelabel/?qt=tile&x=" +
        baiduX +
        "&y=" +
        baiduY +
        "&z=" +
        z +
        "&styles=pl&udt=20151021&scaler=1&p=1"
      );
    },
  });

  let baidu_layer = new Tile({
    source: baidu_source,
    ...tileLayerConfig, // 应用性能优化配置
  });

  return baidu_layer;
}

function createLyrWMTS() {
  // 1-构造分辨率序列
  const size = getWidth(getProj("EPSG:4326").getExtent()) / 256;
  const resolutions = [];
  const matrixIds = [];
  for (let i = 0; i < 19; i++) {
    resolutions.push(size / Math.pow(2, i));
    matrixIds.push(i);
  }

  // 2-创建切片规则对象
  const tileGrid = new WMTSTileGrid({
    origin: [-180, 90],
    resolutions: resolutions,
    matrixIds: matrixIds,
  });

  // 3-创建瓦片图层和wmts数据源
  return new TileLayer({
    properties: {
      name: "wmts",
      title: "WMTS服务",
    },
    source: new WMTS({
      url: `http://t{0-7}.tianditu.gov.cn/vec_c/wmts?tk=${tianKey}`,
      projection: "EPSG:4326",
      tileGrid: tileGrid,
      crossOrigin: "*",
      format: "image/png",
      layer: "vec",
      matrixSet: "c",
      style: "default",
    }),
  });
}

function newLayer(name) {
  let layer;
  switch (name) {
    case "OSM":
      layer = new TileLayer({
        properties: {
          name: "osm",
          title: "OpenStreetMap地图",
        },
        source: new OSM(),
        ...tileLayerConfig, // 性能优化
      });

      break;
    case "Gaode":
      layer = new TileLayer({
        properties: {
          name: "gaode",
          title: "高德地图",
        },
        source: new XYZ({
          url: "http://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scl=1&style=8&lstyle=7&x={x}&y={y}&z={z}",
        }),
        ...tileLayerConfig, // 性能优化
      });
      break;
    case "ArcGIS":
      layer = new TileLayer({
        properties: {
          name: "arc",
          title: "Arcgis地图",
        },
        source: new XYZ({
          url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          maxZoom: 19,
        }),
        ...tileLayerConfig, // 性能优化
      });
      break;

    case "Tian":
      layer = new TileLayer({
        properties: {
          name: "tian",
          title: "天地图",
        },
        source: new XYZ({
          projection: "EPSG:4326",
          url: `http://t{0-7}.tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${tianKey}`,
        }),
        ...tileLayerConfig, // 性能优化
      });
      break;
    case "Google":
      layer = new TileLayer({
        properties: {
          name: "google",
          title: "谷歌地图",
        },
        source: new XYZ({
          url: "http://mt{0-3}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
          projection: "EPSG:3857",
        }),
        ...tileLayerConfig, // 性能优化
      });
      break;

    case "Bing":
      layer = new TileLayer({
        properties: {
          name: "bing",
          title: "Bing地图",
        },
        ...tileLayerConfig, // 性能优化
        source: new BingMaps({
          key: bingKey,
          imagerySet: "RoadOnDemand",
        }),
      });
      break;
    case "Baidu":
      layer = createLyrBd();
      break;
    case "WMTS":
      layer = createLyrWMTS();
      break;

    default:
      layer = new TileLayer({
        properties: {
          name: "osm",
          title: "OpenStreetMap地图",
        },
        source: new OSM(),
      });
  }
  return layer;
}

export default newLayer;

```

## src/utils/bd09.js

BD09 与 WGS84/GCJ02 投影转换工具。

```js
/* eslint-disable */

var MCBAND = [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0];
var LLBAND = [75, 60, 45, 30, 15, 0];
var MC2LL = [
  [
    1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796,
    -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653,
    17337981.2,
  ],
  [
    -7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846,
    -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375,
    10260144.86,
  ],
  [
    -3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277,
    7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475,
    6856817.37,
  ],
  [
    -1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744,
    0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561,
    4482777.06,
  ],
  [
    3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901,
    -0.00023663490511, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332,
    2555164.4,
  ],
  [
    2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032,
    -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364,
    826088.5,
  ],
];

var LL2MC = [
  [
    -0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880,
    -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5,
  ],
  [
    0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316,
    10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032,
    67.5,
  ],
  [
    0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455,
    -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5,
  ],
  [
    0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013,
    -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5,
  ],
  [
    -0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394,
    6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726,
    22.5,
  ],
  [
    -0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718,
    0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45,
  ],
];

// eslint-disable-next-line no-unused-vars
export function lngLatToMercator(T) {
  var c = new cd(T[0], T[1]);
  var r = convertLL2MC(c);
  return [r.lng, r.lat];
}

// eslint-disable-next-line no-unused-vars
export function mercatorToLngLat(T) {
  var c = new cd(T[0], T[1]);
  var r = convertMC2LL(c);
  return [r.lng, r.lat];
}

function convertLL2MC(T) {
  var cL, cN;
  T.lng = getLoop(T.lng, -180, 180);
  T.lat = getRange(T.lat, -74, 74);
  cL = new cd(T.lng, T.lat);
  for (var cM = 0; cM < LLBAND.length; cM++) {
    if (cL.lat >= LLBAND[cM]) {
      cN = LL2MC[cM];
      break;
    }
  }
  if (!cN) {
    for (var cM = LLBAND.length - 1; cM >= 0; cM--) {
      if (cL.lat <= -LLBAND[cM]) {
        cN = LL2MC[cM];
        break;
      }
    }
  }
  var cO = convertor(T, cN);
  var T = new cd(cO.lng.toFixed(2), cO.lat.toFixed(2));
  return T;
}

function convertMC2LL(cL) {
  var cM, cO;
  cM = new cd(Math.abs(cL.lng), Math.abs(cL.lat));
  for (var cN = 0; cN < MCBAND.length; cN++) {
    if (cM.lat >= MCBAND[cN]) {
      cO = MC2LL[cN];
      break;
    }
  }
  var T = convertor(cL, cO);
  var cL = new cd(T.lng.toFixed(6), T.lat.toFixed(6));
  return cL;
}

function getRange(cM, cL, T) {
  if (cL != null) {
    cM = Math.max(cM, cL);
  }
  if (T != null) {
    cM = Math.min(cM, T);
  }
  return cM;
}

function getLoop(cM, cL, T) {
  while (cM > T) {
    cM -= T - cL;
  }
  while (cM < cL) {
    cM += T - cL;
  }
  return cM;
}

function convertor(cM, cN) {
  if (!cM || !cN) {
    return;
  }
  var T = cN[0] + cN[1] * Math.abs(cM.lng);
  var cL = Math.abs(cM.lat) / cN[9];
  var cO =
    cN[2] +
    cN[3] * cL +
    cN[4] * cL * cL +
    cN[5] * cL * cL * cL +
    cN[6] * cL * cL * cL * cL +
    cN[7] * cL * cL * cL * cL * cL +
    cN[8] * cL * cL * cL * cL * cL * cL;
  T *= cM.lng < 0 ? -1 : 1;
  cO *= cM.lat < 0 ? -1 : 1;
  return new cd(T, cO);
}

function cd(T, cL) {
  if (isNaN(T)) {
    T = bV(T);
    T = isNaN(T) ? 0 : T;
  }
  if (b3(T)) {
    T = parseFloat(T);
  }
  if (isNaN(cL)) {
    cL = bV(cL);
    cL = isNaN(cL) ? 0 : cL;
  }
  if (b3(cL)) {
    cL = parseFloat(cL);
  }
  this.lng = T;
  this.lat = cL;
}
cd.isInRange = function (T) {
  return T && T.lng <= 180 && T.lng >= -180 && T.lat <= 74 && T.lat >= -74;
};
cd.prototype.equals = function (T) {
  return T && lat == T.lat && lng == T.lng;
};

function bV(cN) {
  var cL = "";
  var cU,
    cS,
    cQ = "";
  var cT,
    cR,
    cP,
    cO = "";
  var cM = 0;
  var T = /[^A-Za-z0-9\+\/\=]/g;
  if (!cN || T.exec(cN)) {
    return cN;
  }
  cN = cN.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  do {
    cT = cf.indexOf(cN.charAt(cM++));
    cR = cf.indexOf(cN.charAt(cM++));
    cP = cf.indexOf(cN.charAt(cM++));
    cO = cf.indexOf(cN.charAt(cM++));
    cU = (cT << 2) | (cR >> 4);
    cS = ((cR & 15) << 4) | (cP >> 2);
    cQ = ((cP & 3) << 6) | cO;
    cL = cL + String.fromCharCode(cU);
    if (cP != 64) {
      cL = cL + String.fromCharCode(cS);
    }
    if (cO != 64) {
      cL = cL + String.fromCharCode(cQ);
    }
    cU = cS = cQ = "";
    cT = cR = cP = cO = "";
  } while (cM < cN.length);
  return cL;
}

function b3(T) {
  return typeof T == "string";
}

```

