<template>
  <client-only>
    <div class="spotlight-container">
      <div v-if="currentTheme === 'dark'" class="spotlight-glow" aria-hidden="true" />
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

<style lang="scss" scoped>
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

.spotlight-glow {
  position: absolute;
  top: 10%;
  left: 30%;
  transform: translate(-45%, 0%);
  width: min(400px, 80vw);
  height: min(300px, 60vh);
  filter: blur(120px);
  background: radial-gradient(ellipse at center, var(--primary) 0%, transparent 70%);
}

@media (min-width: 2000px) {
  .spotlight-glow {
    left: 40%;
  }
}
</style>
