<template>
  <client-only>
    <svg
      v-if="theme === 'dark'"
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

const { $theme } = useNuxtApp()
const theme = $theme
</script>
