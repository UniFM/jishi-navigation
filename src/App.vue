<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import FloorMap from './components/FloorMap.vue'
import RoomDetailPanel from './components/RoomDetailPanel.vue'
import RoomTooltip from './components/RoomTooltip.vue'
import SearchBar from './components/SearchBar.vue'
import FloorSelector from './components/FloorSelector.vue'
import { rooms } from './data/rooms'
import type { Room } from './types/room'

import map4Image from './assets/map4-only-pic.png'
import map4Svg from './assets/map4-without-pic.svg?raw'
import map5Image from './assets/map5-only-pic.png'
import map5Svg from './assets/map5-without-pic.svg?raw'

const currentFloor = ref(4)
const selectedRoomId = ref<string | null>(null)
const hoveredRoomId = ref<string | null>(null)
const searchKeyword = ref('')
const tooltipPosition = ref<{ x: number; y: number } | null>(null)
const splitRatio = ref(0.4)
const isDragging = ref(false)
const shellRef = ref<HTMLDivElement | null>(null)

const floors = [4, 5]

const currentRooms = computed(() => {
  return rooms.filter((room) => room.floor === currentFloor.value)
})

const selectedRoom = computed<Room | null>(() => {
  if (!selectedRoomId.value) return null
  return rooms.find((room) => room.id === selectedRoomId.value) ?? null
})

const hoveredRoom = computed<Room | null>(() => {
  if (!hoveredRoomId.value) return null
  return rooms.find((room) => room.id === hoveredRoomId.value) ?? null
})

const mapImage = computed(() => {
  if (currentFloor.value === 4) return map4Image
  if (currentFloor.value === 5) return map5Image
  return ''
})

const mapSvg = computed(() => {
  if (currentFloor.value === 4) return map4Svg
  if (currentFloor.value === 5) return map5Svg
  return ''
})

const handleHover = (payload: { roomId: string; position: { x: number; y: number } } | null) => {
  if (!payload) {
    hoveredRoomId.value = null
    tooltipPosition.value = null
    return
  }
  hoveredRoomId.value = payload.roomId
  tooltipPosition.value = payload.position
}

const handleSelectRoom = (room: Room | string) => {
  if (typeof room === 'string') {
    selectedRoomId.value = room
    return
  }
  selectedRoomId.value = room.id
}

const handleClearSelection = () => {
  selectedRoomId.value = null
}

const handleFloorChange = (floor: number) => {
  currentFloor.value = floor
  selectedRoomId.value = null
  hoveredRoomId.value = null
  tooltipPosition.value = null
  searchKeyword.value = ''
}

const shellStyle = computed(() => {
  if (!selectedRoom.value) {
    return {
      '--map-width': '100%',
      '--detail-width': '0%',
      '--divider-width': '0px',
    }
  }

  return {
    '--map-width': `${splitRatio.value * 100}%`,
    '--detail-width': `${(1 - splitRatio.value) * 100}%`,
    '--divider-width': '10px',
  }
})

const handleResize = (event: PointerEvent) => {
  if (!isDragging.value || !shellRef.value) return
  const rect = shellRef.value.getBoundingClientRect()
  const ratio = (event.clientX - rect.left) / rect.width
  splitRatio.value = Math.min(0.7, Math.max(0.3, ratio))
}

const stopResize = () => {
  if (!isDragging.value) return
  isDragging.value = false
  document.body.style.cursor = ''
  window.removeEventListener('pointermove', handleResize)
  window.removeEventListener('pointerup', stopResize)
}

const startResize = (event: PointerEvent) => {
  if (!selectedRoom.value) return
  isDragging.value = true
  document.body.style.cursor = 'col-resize'
  window.addEventListener('pointermove', handleResize)
  window.addEventListener('pointerup', stopResize)
  event.preventDefault()
}

onBeforeUnmount(() => {
  stopResize()
})
</script>

<template>
  <div
    ref="shellRef"
    class="app-shell"
    :class="{ 'detail-open': !!selectedRoom, 'is-dragging': isDragging }"
    :style="shellStyle"
  >
    <section class="map-shell">
      <div class="top-controls">
        <FloorSelector :current-floor="currentFloor" :floors="floors" @change="handleFloorChange" />
        <SearchBar v-model="searchKeyword" :rooms="currentRooms" @select="handleSelectRoom" />
      </div>
      <FloorMap
        :floor="currentFloor"
        :rooms="currentRooms"
        :map-image="mapImage"
        :map-svg="mapSvg"
        :selected-room-id="selectedRoomId"
        :hovered-room-id="hoveredRoomId"
        :detail-open="!!selectedRoom"
        @hover="handleHover"
        @select="handleSelectRoom"
        @clear="handleClearSelection"
      />
      <RoomTooltip :room="hoveredRoom" :position="tooltipPosition" :visible="!!hoveredRoom" />
    </section>
    <div class="splitter" @pointerdown="startResize"></div>
    <section class="detail-shell">
      <RoomDetailPanel :room="selectedRoom" :open="!!selectedRoom" @close="handleClearSelection" />
    </section>
  </div>
</template>
