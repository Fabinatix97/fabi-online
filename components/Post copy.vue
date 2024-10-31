<template>
    <NuxtLink :to="post._path" v-for="post in props.posts" :key="post.slug"
    class="bg-card rounded-lg shadow-md overflow-hidden">
        <div>
            <img :src="`/img/blog/${post.cover}`" alt="Blog Post Cover Image" class="w-full h-48 object-cover hover:opacity-80">
        </div>
        <div class="p-6">
            <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
            <p class="text-cardtext mb-4">{{ post.description }}</p>
            <div class="inline-block bg-button hover:bg-buttonhover text-white py-2 px-4 rounded float-right mb-8">
                Read More
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['posts'])
</script>