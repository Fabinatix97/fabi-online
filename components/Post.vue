<template>
    <div
      class="p-[2px] bg-gray-900 relative card grid grid-cols-1 md:grid-cols-2 gap-10"
      :style="{
        '--x': `${x - (el?.offsetLeft ?? 0)}px`,
        '--y': `${y - (el?.offsetTop ?? 0)}px`
      }"
      ref="el"
    >
      <NuxtLink
        :to="post._path"
        v-for="post in props.posts"
        :key="post.slug"
        class="bg-gray-950 relative p-4"
      >
        <div>
          <img
            :src="`/img/blog/${post.cover}`"
            alt="Blog Post Cover Image"
            class="w-full h-48 object-cover hover:opacity-80"
          />
        </div>
        <div class="p-6">
          <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
          <p class="text-cardtext mb-4">{{ post.description }}</p>
          <div
            class="inline-block bg-button hover:bg-buttonhover text-white py-2 px-4 rounded float-right mb-8"
          >
            Read More
          </div>
        </div>
      </NuxtLink>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps(['posts'])
  const { x, y } = useMouse()
  const el = ref<HTMLElement | null>(null)
  </script>
  
  <style scoped>
  .card::before {
    content: '';
    position: absolute;
    inset: 0px;
    background: radial-gradient(
      200px circle at var(--x) var(--y),
      #15ca82,
      transparent
    );
  }
  </style>
  