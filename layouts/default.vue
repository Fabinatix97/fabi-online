<template>
  <div class="mx-5 mt-32 mb-10 flex justify-center" role="main">
    <div class="max-w-[800px]">
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
      <nuxt-page />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app'

const { $theme } = useNuxtApp()
const theme = $theme
</script>
