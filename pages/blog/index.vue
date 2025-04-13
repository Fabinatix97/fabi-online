<template>
  <div>
    <div class="mx-5 mt-32 mb-10 flex justify-center">
      <div class="w-[800px]">
        <h1>Blog</h1>
        <p class="mb-0">
          Hier teile ich meine Gedanken und Erfahrungen zu allem, was mich gerade beschäftigt.
        </p>
      </div>
    </div>
    <Cards v-if="isMobileDevice" :posts="posts" />
    <Gallery v-else :posts="posts" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isMobileDevice = ref(false)

onMounted(() => {
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  const isSmallScreen = window.innerWidth < 1500
  isMobileDevice.value = hasTouch && isSmallScreen
})

const { data: posts } = await useAsyncData(() =>
  queryCollection('blog').where('status', '=', 'published').order('date', 'DESC').all()
)

definePageMeta({
  layout: 'widelayout',
})

useSeoMeta({
  title: 'Blog',
  description:
    'Hier teile ich meine Gedanken und Erfahrungen zu allem, was mich gerade beschäftigt.',
  ogImage: '/img/about/fabionline.png',
})
</script>
