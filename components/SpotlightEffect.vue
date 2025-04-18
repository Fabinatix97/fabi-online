<template>
  <client-only>
    <svg
      v-if="currentTheme === 'dark'"
      width="400"
      height="300"
      viewBox="0 0 10 11"
      class="absolute -z-10 blur-[120px]"
      aria-hidden="true"
    >
      <circle cx="2" cy="2" r="5" fill="var(--primary)" />
    </svg>
  </client-only>
</template>

<script setup>
import { useNuxtApp } from '#imports'
import { computed } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    default: null,
  },
})

const { $theme } = useNuxtApp()
const currentTheme = computed(() => props.theme ?? $theme?.value)
</script>
