/**
 * DrawTool - 绘制工具类
 *
 * 基于 BaseTool 实现的统一绘制工具
 * 支持点、线、多边形、圆形、矩形等几何类型的绘制
 *
 * 设计理念：
 * - 参考 MeasureTool 的事件处理模式
 * - 统一的预览机制（CallbackProperty）
 * - 统一的完成/取消机制
 * - 支持多种几何类型切换
 */

import * as Cesium from 'cesium'
import { BaseTool, type BaseToolOptions } from '../core/BaseTool'
import type { Coordinate } from '@/types/geometry'
import type { Feature } from '@/types/feature'

/**
 * 绘制几何类型
 */
export type DrawGeometryType = 'point' | 'line' | 'polygon' | 'circle' | 'rectangle'

/**
 * 绘制工具配置
 */
export interface DrawToolOptions extends BaseToolOptions {
  /** 绘制类型 */
  geometryType: DrawGeometryType

  /** 完成回调 */
  onComplete?: (feature: Feature) => void

  /** 取消回调 */
  onCancel?: () => void

  /** 样式配置 */
  style?: {
    fillColor?: string
    fillOpacity?: number
    strokeColor?: string
    strokeWidth?: number
    pointSize?: number
    pointColor?: string
  }
}

/**
 * 绘制工具类
 *
 * @example
 * ```ts
 * const drawTool = new DrawTool(viewer, {
 *   geometryType: 'polygon',
 *   onComplete: (feature) => {
 *     console.log('绘制完成:', feature)
 *   }
 * })
 * drawTool.activate()
 * ```
 */
export class DrawTool extends BaseTool {
  /** 绘制类型 */
  private geometryType: DrawGeometryType

  /** 完成回调 */
  private onComplete?: (feature: Feature) => void

  /** 取消回调 */
  private onCancel?: () => void

  /** 样式配置 */
  private style: Required<NonNullable<DrawToolOptions['style']>>

  /** 默认样式 */
  private static readonly DEFAULT_STYLE = {
    fillColor: '#3B82F6',
    fillOpacity: 0.3,
    strokeColor: '#22D3EE',
    strokeWidth: 3,
    pointSize: 10,
    pointColor: '#22D3EE'
  }

  /** 当前绘制的顶点 */
  private vertices: Coordinate[] = []

  /** 预览实体集合 */
  private previewEntities: Cesium.Entity[] = []

  /** 点标记实体集合 */
  private markerEntities: Cesium.Entity[] = []

  /** 当前光标位置（绘制专用）*/
  private drawCursorPosition: Cesium.Cartesian3 | null = null

  /** 鼠标移动节流标记 */
  private lastMoveTime: number = 0
  private readonly MOVE_THROTTLE_MS = 16 // ~60fps

  /**
   * 构造函数
   */
  constructor(viewer: Cesium.Viewer, options: DrawToolOptions) {
    super(viewer, options)
    this.geometryType = options.geometryType
    this.onComplete = options.onComplete
    this.onCancel = options.onCancel
    this.style = { ...DrawTool.DEFAULT_STYLE, ...options.style }
  }

  /**
   * 设置事件处理器
   * @protected
   */
  protected setupEventHandlers(): void {
    // 左键点击 - 添加顶点
    this.handler.setInputAction(
      (click: any) => this.handleLeftClick(click.position),
      Cesium.ScreenSpaceEventType.LEFT_CLICK
    )

    // 右键点击 - 取消绘制
    this.handler.setInputAction(
      () => this.handleRightClick(),
      Cesium.ScreenSpaceEventType.RIGHT_CLICK
    )

    // 鼠标移动 - 实时预览
    this.handler.setInputAction(
      (movement: any) => this.handleMouseMove(movement.endPosition),
      Cesium.ScreenSpaceEventType.MOUSE_MOVE
    )

    // 双击 - 完成多边形/线绘制
    if (this.geometryType === 'polygon' || this.geometryType === 'line') {
      this.handler.setInputAction(
        (click: any) => this.handleDoubleClick(click.position),
        Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      )
    }
  }

  /**
   * 移除事件处理器
   * @protected
   */
  protected removeEventHandlers(): void {
    this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
    this.handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK)
    this.handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE)
    this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
  }

  /**
   * 处理左键点击
   */
  private handleLeftClick(screenPosition: Cesium.Cartesian2): void {
    const cartesian = this.pickPosition(screenPosition)
    if (!cartesian) return

    const coord = this.cartesianToCoordinate(cartesian)

    // 根据几何类型处理点击
    switch (this.geometryType) {
      case 'point':
        this.handlePointClick(coord, cartesian)
        break
      case 'line':
      case 'polygon':
        this.handleLinePolygonClick(coord, cartesian)
        break
      case 'circle':
        this.handleCircleClick(coord, cartesian)
        break
      case 'rectangle':
        this.handleRectangleClick(coord, cartesian)
        break
    }
  }

  /**
   * 处理右键点击 - 取消绘制
   */
  private handleRightClick(): void {
    this.cancel()
  }

  /**
   * 处理双击 - 完成多边形/线绘制
   */
  private handleDoubleClick(screenPosition: Cesium.Cartesian2): void {
    if (this.geometryType === 'polygon' && this.vertices.length >= 3) {
      this.completePolygonDrawing()
    } else if (this.geometryType === 'line' && this.vertices.length >= 2) {
      this.completeLineDrawing()
    }
  }

  /**
   * 处理鼠标移动 - 更新预览
   */
  private handleMouseMove(screenPosition: Cesium.Cartesian2): void {
    // 节流处理
    const now = Date.now()
    if (now - this.lastMoveTime < this.MOVE_THROTTLE_MS) return
    this.lastMoveTime = now

    const cartesian = this.pickPosition(screenPosition)
    if (!cartesian) return

    this.drawCursorPosition = cartesian
    this.updatePreview()
  }

  /**
   * 点绘制处理
   */
  private handlePointClick(coord: Coordinate, cartesian: Cesium.Cartesian3): void {
    // 点绘制只需一次点击即完成
    const feature: Feature = {
      id: this.generateId(),
      type: 'point',
      name: '点标注',
      geometry: {
        type: 'Point',
        coordinates: [coord.longitude, coord.latitude, coord.height || 0] // GeoJSON array format
      },
      style: {
        fillColor: this.style.pointColor,
        pointSize: this.style.pointSize
      },
      properties: {},
      visible: true,
      createdAt: new Date()
    }

    this.complete(feature)
  }

  /**
   * 线/多边形绘制处理
   */
  private handleLinePolygonClick(coord: Coordinate, cartesian: Cesium.Cartesian3): void {
    this.vertices.push(coord)
    this.addMarker(cartesian)
  }

  /**
   * 圆形绘制处理
   */
  private handleCircleClick(coord: Coordinate, cartesian: Cesium.Cartesian3): void {
    if (this.vertices.length === 0) {
      // 第一次点击 - 设置圆心
      this.vertices.push(coord)
      this.addMarker(cartesian)
    } else {
      // 第二次点击 - 完成圆形
      this.completeCircleDrawing()
    }
  }

  /**
   * 矩形绘制处理
   */
  private handleRectangleClick(coord: Coordinate, cartesian: Cesium.Cartesian3): void {
    if (this.vertices.length === 0) {
      // 第一次点击 - 设置起点
      this.vertices.push(coord)
      this.addMarker(cartesian)
    } else {
      // 第二次点击 - 完成矩形
      this.completeRectangleDrawing()
    }
  }

  /**
   * 更新实时预览
   */
  private updatePreview(): void {
    if (!this.drawCursorPosition) return

    // Clear previous preview
    this.clearPreviewEntities()

    // Create preview based on geometry type
    switch (this.geometryType) {
      case 'line':
        this.updateLinePreview()
        break
      case 'polygon':
        this.updatePolygonPreview()
        break
      case 'circle':
        this.updateCirclePreview()
        break
      case 'rectangle':
        this.updateRectanglePreview()
        break
      // Point doesn't need preview
    }
  }

  /**
   * 更新线预览
   */
  private updateLinePreview(): void {
    if (this.vertices.length === 0 || !this.drawCursorPosition) return

    // Get last vertex position
    const lastVertex = this.vertices[this.vertices.length - 1]
    const lastCartesian = Cesium.Cartesian3.fromDegrees(
      lastVertex.longitude,
      lastVertex.latitude,
      lastVertex.height || 0
    )

    // Create preview line from last vertex to cursor
    const previewLine = this.viewer.entities.add({
      polyline: {
        positions: [lastCartesian, this.drawCursorPosition],
        width: this.style.strokeWidth,
        material: Cesium.Color.fromCssColorString(this.style.strokeColor).withAlpha(0.5),
        clampToGround: true
      }
    })
    this.previewEntities.push(previewLine)

    // Also preview the complete line if we have multiple vertices
    if (this.vertices.length >= 2) {
      const allPositions = this.vertices.map(v =>
        Cesium.Cartesian3.fromDegrees(v.longitude, v.latitude, v.height || 0)
      )
      allPositions.push(this.drawCursorPosition)

      const completeLine = this.viewer.entities.add({
        polyline: {
          positions: allPositions,
          width: this.style.strokeWidth,
          material: Cesium.Color.fromCssColorString(this.style.strokeColor).withAlpha(0.3),
          clampToGround: true
        }
      })
      this.previewEntities.push(completeLine)
    }
  }

  /**
   * 更新多边形预览
   */
  private updatePolygonPreview(): void {
    if (this.vertices.length < 2 || !this.drawCursorPosition) return

    // Create closed polygon preview
    const positions = this.vertices.map(v =>
      Cesium.Cartesian3.fromDegrees(v.longitude, v.latitude, v.height || 0)
    )
    positions.push(this.drawCursorPosition)

    const previewPolygon = this.viewer.entities.add({
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(positions),
        material: Cesium.Color.fromCssColorString(this.style.fillColor).withAlpha(this.style.fillOpacity * 0.5),
        classificationType: Cesium.ClassificationType.TERRAIN
      },
      polyline: {
        positions: positions,
        width: this.style.strokeWidth,
        material: Cesium.Color.fromCssColorString(this.style.strokeColor).withAlpha(0.7),
        clampToGround: true
      }
    })
    this.previewEntities.push(previewPolygon)
  }

  /**
   * 更新圆形预览
   */
  private updateCirclePreview(): void {
    if (this.vertices.length === 0 || !this.drawCursorPosition) return

    // First vertex is circle center
    const center = this.vertices[0]
    const centerCartesian = Cesium.Cartesian3.fromDegrees(
      center.longitude,
      center.latitude,
      center.height || 0
    )

    // Calculate radius
    const radius = Cesium.Cartesian3.distance(centerCartesian, this.drawCursorPosition)

    // Create preview circle
    const previewCircle = this.viewer.entities.add({
      position: centerCartesian,
      ellipse: {
        semiMajorAxis: radius,
        semiMinorAxis: radius,
        material: Cesium.Color.fromCssColorString(this.style.fillColor).withAlpha(this.style.fillOpacity * 0.5),
        outline: true,
        outlineColor: Cesium.Color.fromCssColorString(this.style.strokeColor).withAlpha(0.7),
        outlineWidth: this.style.strokeWidth,
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
      }
    })
    this.previewEntities.push(previewCircle)

    // Add radius label
    const radiusLabel = this.viewer.entities.add({
      position: this.drawCursorPosition,
      label: {
        text: `r=${(radius / 1000).toFixed(2)}km`,
        font: '12px sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        pixelOffset: new Cesium.Cartesian2(0, -20),
        disableDepthTestDistance: Number.POSITIVE_INFINITY
      }
    })
    this.previewEntities.push(radiusLabel)
  }

  /**
   * 更新矩形预览
   */
  private updateRectanglePreview(): void {
    if (this.vertices.length === 0 || !this.drawCursorPosition) return

    // First vertex is one corner
    const corner1 = this.vertices[0]
    const corner1Carto = Cesium.Cartographic.fromDegrees(corner1.longitude, corner1.latitude)
    const corner2Carto = Cesium.Cartographic.fromCartesian(this.drawCursorPosition)

    // Calculate rectangle bounds
    const west = Math.min(corner1Carto.longitude, corner2Carto.longitude)
    const east = Math.max(corner1Carto.longitude, corner2Carto.longitude)
    const south = Math.min(corner1Carto.latitude, corner2Carto.latitude)
    const north = Math.max(corner1Carto.latitude, corner2Carto.latitude)

    const rectangleBounds = Cesium.Rectangle.fromRadians(west, south, east, north)

    // Create preview rectangle
    const previewRectangle = this.viewer.entities.add({
      rectangle: {
        coordinates: rectangleBounds,
        material: Cesium.Color.fromCssColorString(this.style.fillColor).withAlpha(this.style.fillOpacity * 0.5),
        outline: true,
        outlineColor: Cesium.Color.fromCssColorString(this.style.strokeColor).withAlpha(0.7),
        outlineWidth: this.style.strokeWidth,
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
      }
    })
    this.previewEntities.push(previewRectangle)

    // Add dimensions label
    const centerLon = (west + east) / 2
    const centerLat = (south + north) / 2
    const centerPos = Cesium.Cartesian3.fromRadians(centerLon, centerLat, 0)

    const width = Cesium.Cartesian3.distance(
      Cesium.Cartesian3.fromRadians(west, centerLat, 0),
      Cesium.Cartesian3.fromRadians(east, centerLat, 0)
    )
    const height = Cesium.Cartesian3.distance(
      Cesium.Cartesian3.fromRadians(centerLon, south, 0),
      Cesium.Cartesian3.fromRadians(centerLon, north, 0)
    )

    const dimensionsLabel = this.viewer.entities.add({
      position: centerPos,
      label: {
        text: `${(width / 1000).toFixed(2)}km × ${(height / 1000).toFixed(2)}km`,
        font: '12px sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        disableDepthTestDistance: Number.POSITIVE_INFINITY
      }
    })
    this.previewEntities.push(dimensionsLabel)
  }

  /**
   * 清除预览实体（仅清除预览，不清除顶点标记）
   */
  private clearPreviewEntities(): void {
    this.previewEntities.forEach(entity => this.viewer.entities.remove(entity))
    this.previewEntities = []
  }

  /**
   * 完成线绘制
   */
  private completeLineDrawing(): void {
    if (this.vertices.length < 2) return

    const feature: Feature = {
      id: this.generateId(),
      type: 'line',
      name: '线绘制',
      geometry: {
        type: 'LineString',
        coordinates: this.vertices.map(v => [v.longitude, v.latitude, v.height || 0]) // GeoJSON array format
      },
      style: {
        strokeColor: this.style.strokeColor,
        strokeWidth: this.style.strokeWidth
      },
      properties: {},
      visible: true,
      createdAt: new Date()
    }

    this.complete(feature)
  }

  /**
   * 完成多边形绘制
   */
  private completePolygonDrawing(): void {
    if (this.vertices.length < 3) return

    // GeoJSON Polygon: array of rings, first ring is exterior
    const ring = this.vertices.map(v => [v.longitude, v.latitude, v.height || 0])

    const feature: Feature = {
      id: this.generateId(),
      type: 'polygon',
      name: '多边形',
      geometry: {
        type: 'Polygon',
        coordinates: [ring] // GeoJSON requires array of rings
      },
      style: {
        fillColor: this.style.fillColor,
        fillOpacity: this.style.fillOpacity,
        strokeColor: this.style.strokeColor,
        strokeWidth: this.style.strokeWidth
      },
      properties: {},
      visible: true,
      createdAt: new Date()
    }

    this.complete(feature)
  }

  /**
   * 完成圆形绘制
   */
  private completeCircleDrawing(): void {
    if (this.vertices.length < 1 || !this.drawCursorPosition) return

    const center = this.vertices[0]
    const cursorCoord = this.cartesianToCoordinate(this.drawCursorPosition)

    // Calculate radius using geodesic distance
    const centerCartesian = Cesium.Cartesian3.fromDegrees(
      center.longitude,
      center.latitude,
      center.height || 0
    )
    const radius = Cesium.Cartesian3.distance(centerCartesian, this.drawCursorPosition)

    const feature: Feature = {
      id: this.generateId(),
      type: 'circle',
      name: '圆形',
      geometry: {
        type: 'Point', // Circle is represented as center point
        coordinates: [center.longitude, center.latitude, center.height || 0]
      },
      style: {
        fillColor: this.style.fillColor,
        fillOpacity: this.style.fillOpacity,
        strokeColor: this.style.strokeColor,
        strokeWidth: this.style.strokeWidth
      },
      properties: {
        radius: radius,
        area: Math.PI * radius * radius
      },
      visible: true,
      createdAt: new Date()
    }

    this.complete(feature)
  }

  /**
   * 完成矩形绘制
   */
  private completeRectangleDrawing(): void {
    if (this.vertices.length < 1 || !this.drawCursorPosition) return

    const corner1 = this.vertices[0]
    const corner2 = this.cartesianToCoordinate(this.drawCursorPosition)

    // GeoJSON Polygon: rectangle as closed ring
    const west = Math.min(corner1.longitude, corner2.longitude)
    const east = Math.max(corner1.longitude, corner2.longitude)
    const south = Math.min(corner1.latitude, corner2.latitude)
    const north = Math.max(corner1.latitude, corner2.latitude)
    const height = corner1.height || 0

    const ring = [
      [west, south, height],
      [east, south, height],
      [east, north, height],
      [west, north, height],
      [west, south, height] // close the ring
    ]

    const feature: Feature = {
      id: this.generateId(),
      type: 'rectangle',
      name: '矩形',
      geometry: {
        type: 'Polygon',
        coordinates: [ring]
      },
      style: {
        fillColor: this.style.fillColor,
        fillOpacity: this.style.fillOpacity,
        strokeColor: this.style.strokeColor,
        strokeWidth: this.style.strokeWidth
      },
      properties: {
        west,
        east,
        south,
        north
      },
      visible: true,
      createdAt: new Date()
    }

    this.complete(feature)
  }

  /**
   * 添加顶点标记
   */
  private addMarker(position: Cesium.Cartesian3): void {
    const marker = this.viewer.entities.add({
      position,
      point: {
        pixelSize: 8,
        color: Cesium.Color.fromCssColorString(this.style.pointColor),
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 2,
        disableDepthTestDistance: Number.POSITIVE_INFINITY
      }
    })
    this.markerEntities.push(marker)
  }

  /**
   * 完成绘制
   */
  private complete(feature: Feature): void {
    this.clearPreview()
    this.onComplete?.(feature)
    this.reset()
  }

  /**
   * 取消绘制
   */
  private cancel(): void {
    this.clearPreview()
    this.onCancel?.()
    this.reset()
  }

  /**
   * 重置状态
   */
  private reset(): void {
    this.vertices = []
    this.drawCursorPosition = null
  }

  /**
   * 清除预览实体
   */
  private clearPreview(): void {
    this.previewEntities.forEach(entity => this.viewer.entities.remove(entity))
    this.previewEntities = []

    this.markerEntities.forEach(entity => this.viewer.entities.remove(entity))
    this.markerEntities = []
  }

  /**
   * 拾取地形位置
   */
  protected pickPosition(screenPosition: Cesium.Cartesian2): Cesium.Cartesian3 | null {
    const ray = this.viewer.scene.camera.getPickRay(screenPosition)
    if (!ray) return null
    return this.viewer.scene.globe.pick(ray, this.viewer.scene)
  }

  /**
   * 笛卡尔坐标转经纬度
   */
  private cartesianToCoordinate(cartesian: Cesium.Cartesian3): Coordinate {
    const cartographic = Cesium.Cartographic.fromCartesian(cartesian)
    return {
      longitude: Cesium.Math.toDegrees(cartographic.longitude),
      latitude: Cesium.Math.toDegrees(cartographic.latitude),
      height: cartographic.height
    }
  }

  /**
   * 生成唯一ID
   */
  private generateId(): string {
    return `draw_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  /**
   * 清理资源
   * @override
   */
  public destroy(): void {
    this.clearPreview()
    super.destroy()
  }
}
