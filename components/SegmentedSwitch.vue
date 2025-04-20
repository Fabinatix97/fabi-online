<template>
  <div class="flex">
    <div
      class="flex h-10 items-center rounded-full border-[1px] border-[var(--border)] bg-[var(--main)]"
    >
      <div class="flex items-center">
        <div
          v-for="(segment, index) in segments"
          :key="index"
          :class="['segment', { active: index === currentSegment }]"
          @click="setSegment(index)"
        >
          <Icon
            v-if="typeof segment === 'object' && segment.icon"
            :name="segment.icon"
            class="text-lg"
          />
          <span v-else>
            {{ segment }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Segment = string | { name?: string; icon?: string }

defineProps<{
  segments: Segment[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const currentSegment = ref(0)

const setSegment = (nr: number) => {
  currentSegment.value = nr
  emit('update:modelValue', nr)
}
</script>

<style lang="scss" scoped>
.segment {
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  height: 38px;
  align-items: center;
  border-radius: 2rem;
  color: var(--heading);
  font-weight: 500;
  cursor: pointer;
}
.segment:hover {
  color: var(--primaryhover);
}
.active {
  background-color: var(--primary);
  color: var(--main);
}
.active:hover {
  color: var(--heading);
}
@media (hover: none) {
  .segment:hover {
    color: var(--main);
  }
}
</style>
