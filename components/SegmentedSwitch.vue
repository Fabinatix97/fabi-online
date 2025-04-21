<template>
  <div class="flex">
    <div
      class="flex h-10 items-center rounded-full border-[1px] border-[var(--border)] bg-[var(--main)]"
    >
      <div class="flex items-center">
        <div
          v-for="(segment, index) in segments"
          :key="segmentKeys ? segmentKeys[index] : index"
          :class="['segment', { active: isActive(segmentKeys?.[index] ?? index) }]"
          @click="onClick(segmentKeys?.[index] ?? index)"
        >
          <Icon
            v-if="typeof segment === 'object' && segment.icon"
            :name="segment.icon"
            class="text-lg"
          />
          <span v-else>
            {{ typeof segment === 'object' ? segment.name : segment }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Segment = string | { name?: string; icon?: string }

const props = defineProps<{
  modelValue: string | number
  segments: Segment[]
  segmentKeys?: (string | number)[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const isActive = (key: string | number) => key === props.modelValue

const onClick = (key: string | number) => {
  if (!isActive(key)) emit('update:modelValue', key)
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
