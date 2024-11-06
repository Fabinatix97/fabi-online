<template>
    <Disclosure as="nav" class="navbar border-b-2 border-mainborder hyphens-none" v-slot="{ open }">
        <!-- Mobile menu button-->
        <div class="flex items-start">
            <DisclosureButton
                class="sm:hidden rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span class="sr-only">Open main menu</span>
                <Icon name="line-md:close-to-menu-alt-transition" v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <Icon name="line-md:menu-to-close-alt-transition" v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
        </div>
        <div :class="[open ? 'flex w-full justify-between' : '', 'flex w-full justify-end']">
            <DisclosurePanel class="content-center sm:hidden">
                <div class="space-y-1 pb-3">
                    <DisclosureButton 
                        v-for="item in navigation" 
                        :key="item.name" 
                        as="a" 
                        :href="item.href"
                        :class="[item.current ? 'bg-body text-text' : ' text-text hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
                        :aria-current="item.current ? 'page' : undefined">
                        {{ item.name }}
                    </DisclosureButton>
                </div>
                <div class="flex px-2">
                    <div class="mr-4">
                        <a href="https://de.linkedin.com/in/fabian-weiss" class="text-text" target="_blank" rel="noopener noreferrer">
                            <Icon name="mdi:linkedin" size="2em" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Fabinatix97" target="_blank" rel="noopener noreferrer">
                            <Icon name="mdi:github" size="2em" />
                        </a>
                    </div>
                </div>
            </DisclosurePanel>
            <div v-if="!open" class="flex sm:hidden">
                <button @click="$toggleTheme()" class="text-text hover:text-button">
                    <ClientOnly>
                        <Icon 
                            :name="themeIconName" 
                            size="1.4em"
                        />
                    </ClientOnly>
                </button>
            </div>
        </div>
        <!-- Regular menu -->
        <div class="hidden sm:ml-6 sm:block">
            <ul class="nav-links">
                <li :class="{ 'active-link': isActiveRoute('/') }"><NuxtLink to="/">Home</NuxtLink></li>
                <li :class="{ 'active-link': isActiveRoute('/about') }"><NuxtLink to="/about">About</NuxtLink></li>
                <li :class="{ 'active-link': isActiveRoute('/blog') }"><NuxtLink to="/blog">Blog</NuxtLink></li>
                <li :class="{ 'active-link': isActiveRoute('/impressum') }"><NuxtLink to="/impressum">Impressum</NuxtLink></li>
                <li>
                    <a href="https://de.linkedin.com/in/fabian-weiss" class="text-text" target="_blank" rel="noopener noreferrer">
                        <Icon name="mdi:linkedin" size="1.4em" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Fabinatix97" target="_blank" rel="noopener noreferrer">
                        <Icon name="mdi:github" size="1.4em" />
                    </a>
                </li>
                <li>
                    <button @click="$toggleTheme()" class="text-text hover:text-button">
                        <ClientOnly>
                            <Icon 
                                :name="themeIconName" 
                                size="1.4em"
                            />
                        </ClientOnly>
                    </button>
                </li>
            </ul>
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

<style scoped>
.disclosure-panel {
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}
@media screen and (min-width: 640px) {
    .navbar {
        justify-content: flex-end;
    }
}
.navbar {
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
.nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
}
.nav-links li::before {
    transition: color 0.3s;
    margin-right: 10px;
    transform: scaleX(0);
    transform-origin: bottom right;
}
.nav-links li:last-child {
    margin-right: 0;
}
.nav-links li:hover::before {
    color: var(--buttonhover);
}
a {
    text-decoration: none;
}
a:hover {
    color: var(--buttonhover);
    transition: all 0.3s;
}
.active-link {
    color: var(--button);
    border-bottom: 2px solid var(--button);
}
</style>