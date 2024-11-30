<template>
    <div class="h-40 content-end">
        <div class="flex flex-col justify-self-center text-center text-sm">
            <client-only>
                <svg v-if="theme === 'dark'" width="150" height="100" class="absolute -z-10 blur-[50px]">
                    <rect  width="150" height="50" x="0" y="0" fill="var(--primary)" />
                </svg>
            </client-only>
            <span>© 2024 Fabian Weiß</span>
            <span>Mit <Icon name="logos:nuxt-icon" size="0.8em" /> <span class="text-[#00DC82]">Nuxt</span> gebaut</span>
        </div>
        <div v-if="theme === 'light'" class="h-[60px]"></div>
    </div>
</template>

<script setup>
import { useNuxtApp } from '#app';

const { $theme } = useNuxtApp();
const theme = $theme;
</script>