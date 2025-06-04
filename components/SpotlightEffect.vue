<template>
  <client-only>
    <div class="spotlight-container">
      <svg
        v-if="currentTheme === 'dark'"
        viewBox="0 0 10 11"
        class="spotlight-svg"
        aria-hidden="true"
      >
        <circle cx="2" cy="2" r="5" fill="var(--primary)" />
      </svg>
    </div>
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

<style scoped>
.spotlight-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -10;
}

.spotlight-svg {
  position: absolute;
  top: 10%;
  left: 40%;
  transform: translate(-45%, 0%);
  width: min(400px, 80vw);
  height: min(300px, 60vh);
  filter: blur(120px);
}
</style>
