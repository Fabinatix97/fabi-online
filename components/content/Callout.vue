<script setup lang="ts">
defineProps<{
  icon: string
  title: string
}>()
defineSlots<{
  default?: () => VNode[]
}>()
</script>
<template>
  <div
    class="mb-4 items-center rounded-r-2xl border-l-8 border-[var(--secondary)] bg-[var(--secondarybg)] p-4"
  >
    <div class="flex gap-2 text-[var(--secondary)]">
      <Icon :name="icon" size="1.5em" />
      <p class="my-0 font-bold">{{ title }}</p>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
