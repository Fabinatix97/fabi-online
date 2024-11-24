<template>
    <Disclosure as="nav" class="navbar border-b-[1px] border-border hyphens-none" v-slot="{ open, close }">
        <div class="flex items-start">
            <DisclosureButton
                class="sm:hidden rounded-md p-2 text-heading hover:bg-body hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span class="sr-only">Open main menu</span>
                <Icon name="line-md:close-to-menu-alt-transition" v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <Icon name="line-md:menu-to-close-alt-transition" v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
        </div>
        <div :class="[open ? 'flex w-full justify-between' : '', 'flex w-full justify-end']">
            <DisclosurePanel class="content-center sm:hidden">
                <div class="space-y-1 pb-3">
                    <NuxtLink 
                        v-for="item in navigation" 
                        :key="item.name" 
                        as="a" 
                        :to="item.href"
                        :class="[isActiveRoute(item.href) ? 'bg-primary text-body hover:text-heading' : 'hover:bg-main hover:text-primary', 'block rounded-md px-3 py-2 text-base font-medium']"
                        :aria-current="item.current ? 'page' : undefined"
                        @click="close">
                        {{ item.name }}
                    </NuxtLink>
                </div>
                <div class="flex px-2">
                    <div class="mr-4">
                        <a href="https://de.linkedin.com/in/fabian-weiss" class="transition-all duration-300 hover:text-primaryhover" target="_blank" rel="noopener noreferrer">
                            <Icon name="mdi:linkedin" size="2em" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Fabinatix97" class="transition-all duration-300 hover:text-primaryhover" target="_blank" rel="noopener noreferrer">
                            <Icon name="mdi:github" size="2em" />
                        </a>
                    </div>
                </div>
            </DisclosurePanel>
            <div v-if="!open" class="flex sm:hidden">
                <button @click="$toggleTheme()" class="hover:text-button">
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
    color: var(--heading);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    padding: 1rem;
    font-weight: 500;
    z-index: 1000;
    background-color: var(--navbar);
    backdrop-filter: blur(10px);
}
</style>