<script setup lang="ts">
import { computed } from 'vue'
import type { Room } from '../types/room'
import RoomHotspot from './RoomHotspot.vue'

const props = defineProps<{
  modelValue: string
  rooms: Room[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'select', room: Room): void
}>()

const query = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const normalize = (value: string) => value.toLowerCase()

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const highlightText = (value: string, tokens: string[]) => {
  if (!value) return ''
  let output = escapeHtml(value)
  tokens.forEach((token) => {
    if (!token) return
    const pattern = new RegExp(escapeRegExp(token), 'gi')
    output = output.replace(pattern, (match) => `<mark class="room-highlight">${match}</mark>`)
  })
  return output
}

const clampText = (value: string, max = 26) => {
  if (value.length <= max) return value
  return `${value.slice(0, max)}...`
}

const buildSearchText = (room: Room) => {
  const staffText = room.staffs
    .map((staff) => `${staff.name} ${staff.title} ${staff.contact ?? ''}`)
    .join(' ')
  return normalize(
    [
      room.id,
      room.name,
      room.usage,
      room.description,
      `${room.floor}`,
      `${room.floor}f`,
      `${room.floor}楼`,
      room.tags.join(' '),
      staffText,
    ].join(' ')
  )
}

const findMatch = (room: Room, tokens: string[]) => {
  const matchField = (label: string, value: string) => {
    const normalized = normalize(value)
    const hit = tokens.some((token) => normalized.includes(token))
    if (!hit) return null
    return {
      label,
      value,
    }
  }

  const directMatch =
    matchField('房间号', room.id) ||
    matchField('名称', room.name) ||
    matchField('楼层', `${room.floor}F ${room.floor}楼`) ||
    matchField('用途', room.usage) ||
    matchField('标签', room.tags.join(' ')) ||
    matchField('描述', room.description)

  if (directMatch) return directMatch

  for (const staff of room.staffs) {
    const staffValue = `${staff.name} ${staff.title}`.trim()
    const staffMatch = matchField('老师', staffValue)
    if (staffMatch) return staffMatch
    if (staff.contact) {
      const contactMatch = matchField('电话', staff.contact)
      if (contactMatch) return contactMatch
    }
  }

  return {
    label: '信息',
    value: room.name,
  }
}

const results = computed(() => {
  const keyword = normalize(props.modelValue.trim())
  if (!keyword) return []
  const tokens = keyword.split(/\s+/).filter(Boolean)
  return props.rooms
    .filter((room) => {
      const searchText = buildSearchText(room)
      return tokens.every((token) => searchText.includes(token))
    })
    .map((room) => {
      const match = findMatch(room, tokens)
      return {
        room,
        highlightId: highlightText(room.id, tokens),
        highlightName: highlightText(room.name, tokens),
        matchLabel: match.label,
        matchValue: highlightText(clampText(match.value), tokens),
      }
    })
    .slice(0, 6)
})

const onSelect = (room: Room) => {
  emit('select', room)
  emit('update:modelValue', room.id)
}
</script>

<template>
  <div class="search-bar">
    <label class="search-label" for="room-search">搜索房间</label>
    <input
      id="room-search"
      v-model="query"
      class="search-input"
      type="search"
      placeholder="输入房间号或功能关键词"
      autocomplete="off"
    />
    <div v-if="results.length" class="search-results" role="listbox">
      <RoomHotspot
        v-for="item in results"
        :key="item.room.id"
        :room="item.room"
        :highlight-id="item.highlightId"
        :highlight-name="item.highlightName"
        :match-label="item.matchLabel"
        :match-value="item.matchValue"
        @select="onSelect"
      />
    </div>
  </div>
</template>
