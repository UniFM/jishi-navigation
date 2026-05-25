<script setup lang="ts">
const props = defineProps<{
  currentFloor: number
  floors: number[]
}>()

const emit = defineEmits<{
  (e: 'change', floor: number): void
}>()

const onSelect = (floor: number) => {
  emit('change', floor)
}
</script>

<template>
  <div class="floor-selector" role="tablist" aria-label="楼层选择">
    <button
      v-for="floor in props.floors"
      :key="floor"
      class="floor-chip"
      type="button"
      role="tab"
      :aria-selected="floor === props.currentFloor"
      :class="{ 'is-active': floor === props.currentFloor }"
      @click="onSelect(floor)"
    >
      {{ floor }}F
    </button>
  </div>
</template>
