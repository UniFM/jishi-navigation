<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import type { Room } from '../types/room'
import heroImage from '../assets/hero.png'

const props = defineProps<{
  room: Room | null
  open: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const activeIndex = ref(0)
const zoomOpen = ref(false)
let rotationTimer: number | undefined

const gallery = computed(() => {
  const images: string[] = []
  if (props.room?.image?.length) images.push(...props.room.image)
  if (props.room?.thumbnail) images.push(props.room.thumbnail)
  if (!images.length) images.push(heroImage)
  return Array.from(new Set(images))
})

const activeImage = computed(() => {
  if (!gallery.value.length) return ''
  return gallery.value[activeIndex.value % gallery.value.length]
})

const goToIndex = (index: number) => {
  if (!gallery.value.length) return
  activeIndex.value = (index + gallery.value.length) % gallery.value.length
}

const showPrev = () => {
  stopRotation()
  goToIndex(activeIndex.value - 1)
  startRotation()
}

const showNext = () => {
  stopRotation()
  goToIndex(activeIndex.value + 1)
  startRotation()
}

const startRotation = () => {
  if (!props.open || gallery.value.length < 2) return
  stopRotation()
  rotationTimer = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % gallery.value.length
  }, 3200)
}

const stopRotation = () => {
  if (rotationTimer) {
    window.clearInterval(rotationTimer)
    rotationTimer = undefined
  }
}

const openZoom = () => {
  zoomOpen.value = true
  stopRotation()
}

const closeZoom = () => {
  zoomOpen.value = false
  startRotation()
}

watch(
  () => [props.open, gallery.value.length],
  () => {
    activeIndex.value = 0
    startRotation()
  }
)

onBeforeUnmount(() => {
  stopRotation()
})
</script>

<template>
  <transition name="panel-slide">
    <aside v-if="props.open" class="detail-panel">
      <button class="panel-close" type="button" @click="emit('close')">关闭</button>
      <div class="panel-content">
        <div class="panel-gallery" @mouseenter="stopRotation" @mouseleave="startRotation">
          <div class="panel-image-shell">
            <button
              class="panel-arrow is-left"
              type="button"
              :disabled="gallery.length < 2"
              @click="showPrev"
            >
              ‹
            </button>
            <img
              v-if="activeImage"
              class="panel-image"
              :src="activeImage"
              :alt="props.room?.name || '房间展示图'"
              @click="openZoom"
            />
            <button
              class="panel-arrow is-right"
              type="button"
              :disabled="gallery.length < 2"
              @click="showNext"
            >
              ›
            </button>
          </div>
          <div class="panel-dots">
            <button
              v-for="(item, index) in gallery"
              :key="item + index"
              type="button"
              class="panel-dot"
              :class="{ 'is-active': index === activeIndex }"
              @click="goToIndex(index)"
            ></button>
          </div>
        </div>
        <div v-if="props.room" class="panel-body">
          <div class="panel-header">
            <div class="panel-id">{{ props.room.id }}</div>
            <h2 class="panel-title">{{ props.room.name }}</h2>
            <p class="panel-usage">{{ props.room.usage }}</p>
          </div>
          <p class="panel-desc">{{ props.room.description }}</p>
          <div class="panel-tags">
            <span v-for="tag in props.room.tags" :key="tag" class="panel-tag">{{ tag }}</span>
          </div>
          <div class="panel-staff">
            <h3>人员信息</h3>
            <ul>
              <li v-for="staff in props.room.staffs" :key="staff.name">
                <span class="staff-name">{{ staff.name }}</span>
                <span class="staff-title">{{ staff.title }}</span>
                <span v-if="staff.contact" class="staff-contact">{{ staff.contact }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div v-else class="panel-empty">
          <div class="panel-empty-title">暂无房间信息</div>
          <div class="panel-empty-subtitle">请在 rooms.ts 中补充对应房间数据。</div>
        </div>
      </div>
      <div v-if="zoomOpen" class="panel-zoom" @click="closeZoom">
        <div class="panel-zoom-content" @click.stop>
          <button
            class="panel-zoom-arrow is-left"
            type="button"
            :disabled="gallery.length < 2"
            @click="showPrev"
          >
            ‹
          </button>
          <img class="panel-zoom-image" :src="activeImage" alt="放大查看" />
          <button
            class="panel-zoom-arrow is-right"
            type="button"
            :disabled="gallery.length < 2"
            @click="showNext"
          >
            ›
          </button>
        </div>
      </div>
    </aside>
  </transition>
</template>
