<script setup lang="ts">
import type { Room } from '../types/room'

const props = defineProps<{
  room: Room
  highlightId?: string
  highlightName?: string
  matchLabel?: string
  matchValue?: string
}>()

const emit = defineEmits<{
  (e: 'select', room: Room): void
}>()

const onClick = () => {
  emit('select', props.room)
}
</script>

<template>
  <button class="room-hotspot" type="button" @click="onClick">
    <span
      class="room-id"
      v-html="props.highlightId || props.room.id"
    ></span>
    <div class="room-info">
      <span
        class="room-name"
        v-html="props.highlightName || props.room.name"
      ></span>
      <span v-if="props.matchLabel && props.matchValue" class="room-match">
        <span class="room-match-label">{{ props.matchLabel }}</span>
        <span class="room-match-value" v-html="props.matchValue"></span>
      </span>
    </div>
    <span class="room-floor">{{ props.room.floor }}F</span>
  </button>
</template>
