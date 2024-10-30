<template>
    <div v-for="post in props.posts" :key="post.slug"
    class="bg-card rounded-lg shadow-md overflow-hidden">
        <NuxtLink :to="post._path">
            <img :src="`/img/blog/${post.cover}`" alt="Blog Post Cover Image" class="w-full h-48 object-cover hover:opacity-80">
        </NuxtLink>
        <div class="p-6">
            <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
            <p class="text-cardtext mb-4">{{ post.description }}</p>
            <NuxtLink :to="post._path" class="inline-block bg-button hover:bg-buttonhover text-white py-2 px-4 rounded float-right mb-8">
                Read More
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['posts'])
</script>