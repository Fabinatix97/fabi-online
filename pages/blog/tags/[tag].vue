<template>
  <div>
    <div class="mx-5 mt-32 mb-10 flex justify-center">
      <div class="w-[800px]">
        <div class="mb-8 flex text-[var(--info)]">
          <NuxtLink to="/blog">
            <div
              class="backbutton flex gap-2 rounded-full border-[1px] border-[var(--border)] bg-[var(--main)] pt-1 pr-6 pl-4 hover:text-[var(--primary)]"
            >
              <div class="icon-container">
                <Icon name="mdi:arrow-back" size="1.4em" />
              </div>
              <span>Zurück zur Übersicht</span>
            </div>
          </NuxtLink>
        </div>
        <h1>#{{ tag }}</h1>
      </div>
    </div>
    <Gallery v-if="!isMobileDevice" :posts="posts" />
    <Cards v-else :posts="posts" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const isMobileDevice = ref(false)

onMounted(() => {
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  const isSmallScreen = window.innerWidth < 1500
  isMobileDevice.value = hasTouch && isSmallScreen
})

const route = useRoute()
const tag = route.params.tag

const { data: posts } = await useAsyncData('posts', async () => {
  const allPosts = await queryCollection('blog').order('date', 'DESC').all()
  return allPosts.filter(
    (post) => post.status === 'published' && post.tags && post.tags.includes(tag)
  )
})

definePageMeta({
  layout: 'widelayout',
})

useSeoMeta({
  title: 'Tags',
  description: 'Hier findest du alle Beiträge zu einem bestimmten Tag.',
  ogImage: '/img/about/fabionline.png',
})
</script>
