<template>
    <div class="flex justify-center mt-32 mx-5 mb-10">
        <div class="w-[800px]">
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
            <h1>Blog</h1>
            <p class="mb-0">Hier teile ich meine Gedanken und Erfahrungen zu allem, was mich gerade beschäftigt.</p>
        </div>
    </div>
    <Gallery v-if="!isMobileDevice" :posts="posts" />
    <Cards v-else :posts="posts" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const { $theme } = useNuxtApp();
const theme = $theme;

const isMobileDevice = ref(false);

onMounted(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 1500;
    isMobileDevice.value = hasTouch && isSmallScreen;
});

const { data: posts } = await useAsyncData('posts', () =>
    queryContent('/blog').find()
);

definePageMeta({
    layout: 'widelayout'
});

useSeoMeta({
    title: 'Blog',
    description: 'Hier teile ich meine Gedanken und Erfahrungen zu allem, was mich gerade beschäftigt.',
    ogImage: '/img/about/fabionline.png',
});
</script>