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
          <template v-if="typeof segment === 'string'">
            {{ segment }}
          </template>
          <template v-else>
            <template v-if="segment.icon">
              <Icon :name="segment.icon" class="text-lg" />
            </template>
            <template v-if="segment.name">
              {{ segment.name }}
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { segments } = defineProps({
  segments: {
    type: Array,
    required: true,
    validator: (value) =>
      value.every(
        (segment) =>
          typeof segment === 'string' ||
          (typeof segment === 'object' && (segment.name || segment.icon))
      ),
  },
})

const emit = defineEmits(['update:modelValue'])
const currentSegment = ref(0)

const setSegment = (nr) => {
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
