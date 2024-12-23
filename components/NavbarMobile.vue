<template>
    <Disclosure as="nav" class="navbar border-b-[1px] border-border hyphens-none" v-slot="{ open, close }">
        <div class="flex items-start">
            <DisclosureButton
                class="rounded-2xl p-2 text-heading hover:bg-body hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <template v-if="!open">
                    <!-- Open Main Menu -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M5 5L19 19M5 19L19 5">
                            <animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L19 19M5 19L19 5;M5 5L19 5M5 19L19 19" />
                        </path>
                        <path d="M12 12H12" opacity="0">
                            <animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M12 12H12;M5 12H19" />
                            <set fill="freeze" attributeName="opacity" begin="0.2s" to="1" />
                        </path>
                        </g>
                    </svg>
                </template>
                <template v-else>
                    <!-- Close Main Menu -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M5 12H19">
                            <animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12" />
                            <set fill="freeze" attributeName="opacity" begin="0.4s" to="0" />
                        </path>
                        <path d="M5 5L19 5M5 19L19 19" opacity="0">
                            <animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M5 5L19 5M5 19L19 19;M5 5L19 19M5 19L19 5" />
                            <set fill="freeze" attributeName="opacity" begin="0.2s" to="1" />
                        </path>
                        </g>
                    </svg>
                </template>
            </DisclosureButton>
        </div>
        <div :class="[open ? 'flex w-full justify-between' : '', 'flex w-full justify-end']">
            <DisclosurePanel class="content-center">
                <div class="space-y-1 pb-3">
                    <NuxtLink 
                        v-for="item in navigation" 
                        :key="item.name" 
                        as="a" 
                        :to="item.href"
                        :class="[isActiveRoute(item.href) ? 'bg-primary text-body hover:text-heading' : 'hover:bg-main hover:text-primary', 'block rounded-2xl px-3 py-2 text-base font-medium']"
                        :aria-current="item.current ? 'page' : undefined"
                        @click="close">
                        {{ item.name }}
                    </NuxtLink>
                </div>
                <div class="flex px-2">
                    <div class="mr-4">
                        <a href="https://www.fabi-online.de/rss" class="transition-all duration-300 hover:text-primaryhover" title="RSS-Feed abonnieren" target="_blank" rel="noopener noreferrer">
                            <Icon name="mdi:rss" size="2em" />
                        </a>
                    </div>
                    <div class="mr-4">
                        <a href="https://de.linkedin.com/in/fabian-weiss" class="transition-all duration-300 hover:text-primaryhover" title="Folge mir auf LinkedIn" target="_blank" rel="noopener noreferrer">
                            <Icon name="mdi:linkedin" size="2em" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Fabinatix97" class="transition-all duration-300 hover:text-primaryhover" title="Folge mir auf GitHub" target="_blank" rel="noopener noreferrer">
                            <Icon name="mdi:github" size="2em" />
                        </a>
                    </div>
                </div>
            </DisclosurePanel>
            <div v-if="!open" class="flex">
                <button @click="$toggleTheme()" class="hover:text-primaryhover transition-colors duration-300">
                    <ClientOnly>
                        <Icon 
                            :name="themeIconName" 
                            size="1.4em"
                        />
                    </ClientOnly>
                </button>
            </div>
        </div>
    </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { computed } from 'vue';
import { useNuxtApp, useRoute } from '#app';

const { $theme, $toggleTheme } = useNuxtApp();
const theme = $theme;
const route = useRoute();

const navigation = [
    { name: 'Home', href: '/', current: route.name == 'index' },
    { name: 'About', href: '/about', current: route.name.includes('about') },
    { name: 'Blog', href: '/blog', current: route.name == 'blog' },
    { name: 'Impressum', href: '/impressum', current: route.name == 'uses' },
]

const isActiveRoute = (path) => {
    return route.path === path;
};

const themeIconName = computed(() => {
    return theme.value === 'light' ? 'line-md:moon-filled-loop' : 'line-md:sunny-filled-loop';
});
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 1rem;
    font-weight: 500;
    color: var(--heading);
    background-color: var(--navbar);
    backdrop-filter: blur(10px);
    z-index: 1000;
}
</style>