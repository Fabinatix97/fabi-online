<template>
    <nav class="navbar bg-main border border-solid border-border">
        <ul class="nav-links">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">Über mich</NuxtLink></li>
            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
            <li><NuxtLink to="/impressum">Impressum</NuxtLink></li>
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
                <button @click="$toggleTheme()" class="theme-toggle-button">
                    <ClientOnly>
                        <img :src="themeIconSrc" 
                            :alt="theme.valueOf === 'light' ? 'Mond-Icon' : 'Sonnen-Icon'" 
                            class="theme-icon" />
                    </ClientOnly>
                </button>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useNuxtApp } from '#app';

const { $theme, $toggleTheme } = useNuxtApp();
const theme = $theme;

const themeIconSrc = computed(() => {
    return theme.value === 'light' ? '/img/moon-icon.png' : '/img/sun-icon.png';
});
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    margin-bottom: 20px;
    font-weight: 500;
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
    color: #3498db;
}
.theme-toggle-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}
.theme-icon {
    width: 20px;
    height: 20px;
    opacity: 0.85;
}
a {
    text-decoration: none;
}
a:hover {
    color: #0E74AF;
}
</style>