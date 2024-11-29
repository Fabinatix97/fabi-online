<template>
    <div class="flex justify-center mt-32 mx-5 mb-10">
        <div class="w-[800px]">
            <client-only>
                <svg v-if="theme === 'dark'" width="400" height="300" viewBox="0 0 10 11" class="absolute -z-10 blur-[120px]">
                    <circle cx="2" cy="2" r="5" fill="var(--primary)" />
                </svg>
            </client-only>
            <h1>Blog</h1>
            <p class="mb-0">Hier teile ich meine Gedanken und Erfahrungen zu allem, was mich gerade beschäftigt.</p>
        </div>
    </div>
    <Gallery :posts="posts"/>
</template>
  
<script setup>
import { useNuxtApp } from '#app';

const { $theme } = useNuxtApp();
const theme = $theme;

const { data: posts } = await useAsyncData('posts', () =>
    queryContent('/blog').find()
);
definePageMeta({
    layout: 'widelayout'
});
</script>