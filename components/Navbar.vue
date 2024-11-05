<template>
    <nav class="navbar border-b-2 border-mainborder">
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
    </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useNuxtApp, useRoute } from '#app';

const { $theme, $toggleTheme } = useNuxtApp();
const theme = $theme;
const route = useRoute();

const isActiveRoute = (path) => {
    return route.path === path;
};

const themeIconName = computed(() => {
    return theme.value === 'light' ? 'line-md:moon-filled-loop' : 'line-md:sunny-filled-loop';
});
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    margin-bottom: 20px;
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
    color: #075985;
}
a {
    text-decoration: none;
}
a:hover {
    color: #075985;
    transition: all 0.3s;
}

.active-link {
    color: #075985;
    border-bottom: 2px solid #075985;
}
</style>
