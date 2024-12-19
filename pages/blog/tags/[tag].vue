<template>
    <div class="flex justify-center mt-32 mx-5 mb-10">
        <div class="w-[800px]">
            <client-only>
                <svg v-if="theme === 'dark'" width="400" height="300" viewBox="0 0 10 11" class="absolute -z-10 blur-[120px]">
                    <circle cx="2" cy="2" r="5" fill="var(--primary)" />
                </svg>
            </client-only>
            <div class="flex text-info mb-8">
                <NuxtLink to="/blog">
                    <div class="backbutton flex bg-main pl-4 pr-6 pt-1 gap-2 border-border border-[1px] rounded-full hover:text-primary">
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
</template>

<script setup>
import { useNuxtApp } from '#app';
import { useRoute } from 'vue-router';

const { $theme } = useNuxtApp();
const theme = $theme;

const isMobileDevice = ref(false);

onMounted(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 1500;
    isMobileDevice.value = hasTouch && isSmallScreen;
});

const route = useRoute();
const tag = route.params.tag;

const { data: posts } = await useAsyncData('posts', () =>
    queryContent('/blog').where({ tags: { $contains: tag } }).find()
);

definePageMeta({
    layout: 'widelayout'
});
</script>