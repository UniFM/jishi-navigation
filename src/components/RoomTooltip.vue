<script setup lang="ts">
import type { Room } from '../types/room'

const props = defineProps<{
  room: Room | null
  position: { x: number; y: number } | null
  visible: boolean
}>()
</script>

<template>
  <transition name="tooltip-fade">
    <div
      v-if="props.room && props.position && props.visible"
      class="room-tooltip"
      :style="{
        left: `${props.position.x}px`,
        top: `${props.position.y}px`,
      }"
    >
      <img class="tooltip-thumb" :src="props.room.thumbnail" :alt="props.room.name" />
      <div class="tooltip-body">
        <div class="tooltip-id">{{ props.room.id }}</div>
        <div class="tooltip-name">{{ props.room.name }}</div>
        <div class="tooltip-desc">{{ props.room.description }}</div>
      </div>
    </div>
  </transition>
</template>
