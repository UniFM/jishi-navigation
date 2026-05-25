// 图片地图 + SVG 热点交互层

<script setup lang="ts">
// Vue 组合式 API
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
// 房间类型
import type { Room } from '../types/room'

const props = defineProps<{
  floor: number
  rooms: Room[]
  mapImage: string
  mapSvg: string
  selectedRoomId: string | null
  hoveredRoomId: string | null
  detailOpen: boolean
}>()

// 子组件向父组件发送事件
const emit = defineEmits<{
  // 鼠标悬浮热点
  (e: 'hover', payload: { roomId: string; position: { x: number; y: number } } | null): void
  // 点击选中房间
  (e: 'select', roomId: string): void
  // 点击空白区域清空选择
  (e: 'clear'): void
}>()

// DOM 引用
// 地图容器
const containerRef = ref<HTMLDivElement | null>(null)
// SVG 覆盖层 
const overlayRef = ref<HTMLDivElement | null>(null)
// 热点元素缓存
const hotspotElements = new Map<string, Element>()
// 用于销毁事件监听器
const cleanupHandlers: Array<() => void> = []

// 把 rooms 数组转成 Map
const roomMap = computed(() => {
  return new Map(props.rooms.map((room) => [room.id, room]))
})

// 清除所有事件监听器
const clearHandlers = () => {
  cleanupHandlers.splice(0).forEach((dispose) => dispose())
}

// 给热点更新状态 class
const updateStateClasses = () => {
  
  hotspotElements.forEach((element, id) => {
    // 是否悬浮
    element.classList.toggle('is-hovered', id === props.hoveredRoomId)
    // 是否选中
    element.classList.toggle('is-selected', id === props.selectedRoomId)
  })
}

// 根据 SVG 的 viewBox 自动设置容器宽高比
const applyAspectRatio = (svg: SVGSVGElement) => {
  const viewBox = svg.getAttribute('viewBox')
  if (!viewBox || !containerRef.value) return
  const parts = viewBox.split(' ').map((item) => Number(item))
  if (parts.length !== 4) return
  const [, , width, height] = parts
  if (!width || !height) return
  containerRef.value.style.setProperty('aspect-ratio', `${width} / ${height}`)
}

// 1. 把 SVG 插入页面 2. 找到热点元素 3. 绑定鼠标事件
const bindHotspots = () => {
  if (!overlayRef.value) return
  clearHandlers()
  hotspotElements.clear()

  overlayRef.value.innerHTML = props.mapSvg || ''
  const svg = overlayRef.value.querySelector('svg')
  if (!svg) return

  svg.classList.add('hotspot-svg')
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
  svg.setAttribute('aria-hidden', 'true')
  applyAspectRatio(svg)

  const elements = svg.querySelectorAll('path, polygon, rect')
  elements.forEach((element) => {
    const dataRoom = element.getAttribute('data-room')?.trim()
    const rawId = element.getAttribute('id')?.trim()
    const normalizedId = dataRoom || rawId?.replace(/^room-/, '')
    if (!normalizedId) {
      ;(element as HTMLElement).style.pointerEvents = 'none'
      return
    }
    element.classList.add('hotspot-el')
    element.setAttribute('data-room-id', normalizedId)
    ;(element as HTMLElement).style.pointerEvents = 'auto'
    hotspotElements.set(normalizedId, element)

    const onEnter = (event: Event) => {
      if (!containerRef.value) return
      const rect = containerRef.value.getBoundingClientRect()
      const mouse = event as MouseEvent
      emit('hover', {
        roomId: normalizedId,
        position: { x: mouse.clientX - rect.left, y: mouse.clientY - rect.top },
      })
    }

    const onMove = (event: Event) => {
      if (props.hoveredRoomId !== normalizedId || !containerRef.value) return
      const rect = containerRef.value.getBoundingClientRect()
      const mouse = event as MouseEvent
      emit('hover', {
        roomId: normalizedId,
        position: { x: mouse.clientX - rect.left, y: mouse.clientY - rect.top },
      })
    }

    const onLeave = () => {
      if (props.hoveredRoomId === normalizedId) {
        emit('hover', null)
      }
    }

    const onClick = (event: Event) => {
      event.stopPropagation()
      emit('select', normalizedId)
    }

    element.addEventListener('mouseenter', onEnter)
    element.addEventListener('mousemove', onMove)
    element.addEventListener('mouseleave', onLeave)
    element.addEventListener('click', onClick)

    cleanupHandlers.push(() => {
      element.removeEventListener('mouseenter', onEnter)
      element.removeEventListener('mousemove', onMove)
      element.removeEventListener('mouseleave', onLeave)
      element.removeEventListener('click', onClick)
    })
  })

  updateStateClasses()
}

const onContainerClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.hotspot-el')) {
    emit('clear')
  }
}

onMounted(async () => {
  await nextTick()
  bindHotspots()
})

watch(
  () => [props.mapSvg, props.rooms],
  () => {
    bindHotspots()
  },
  { deep: true }
)

watch(
  () => [props.hoveredRoomId, props.selectedRoomId],
  () => {
    updateStateClasses()
  }
)

onBeforeUnmount(() => {
  clearHandlers()
})
</script>

<template>
  <section class="floor-map" :class="{ 'is-detail-open': props.detailOpen }">
    <div class="map-container" ref="containerRef" @click="onContainerClick">
      <img
        v-if="props.mapImage"
        class="map-image"
        :src="props.mapImage"
        :alt="`济事楼 ${props.floor}F 地图`"
        draggable="false"
      />
      <div v-else class="map-placeholder">
        <div class="placeholder-title">{{ props.floor }}F 地图制作中</div>
        <div class="placeholder-subtitle">保持流式导航，稍后补充地图资源。</div>
      </div>
      <div ref="overlayRef" class="map-overlay"></div>
    </div>
  </section>
</template>
