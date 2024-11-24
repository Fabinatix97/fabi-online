<template>
    <div class="fixed">
        <div as="nav" class="navbar hyphens-none" :class="themeClass">
            <div class="flex justify-between">
                <div>
                    <ul class="nav-links">
                        <li :class="{ 'active-link': isActiveRoute('/') }"><NuxtLink to="/">Home</NuxtLink></li>
                        <li :class="{ 'active-link': isActiveRoute('/about') }"><NuxtLink to="/about">About</NuxtLink></li>
                        <li :class="{ 'active-link': isActiveRoute('/blog') }"><NuxtLink to="/blog">Blog</NuxtLink></li>
                        <li :class="{ 'active-link': isActiveRoute('/impressum') }"><NuxtLink to="/impressum">Impressum</NuxtLink></li>
                    </ul>
                </div>
                <div>
                    <ul class="nav-links">
                        <li>
                            <a href="https://de.linkedin.com/in/fabian-weiss" target="_blank" rel="noopener noreferrer">
                                <Icon name="mdi:linkedin" size="1.4em" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Fabinatix97" target="_blank" rel="noopener noreferrer">
                                <Icon name="mdi:github" size="1.4em" />
                            </a>
                        </li>
                        <li>
                            <button @click="$toggleTheme()" class="hover:text-button">
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
            </div>
        </div>
    </div>
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

const themeClass = computed(() => {
    return theme.value === 'light' ? 'border-solid border-[1px] border-border' : 'border-none';
});

</script>

<style lang="scss" scoped>
.fixed {
    display: flex;
    justify-content: center;
    position: fixed;
    margin-top: 20px;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

.navbar {
    font-size: 20px;
    color: var(--heading);
    width: 800px;
    padding: 1rem;
    font-weight: 500;
    background-color: var(--navbar);
    backdrop-filter: blur(10px);
    border-radius: 10px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    li {
        &:last-child {
            margin-right: 0;
        }
        &::before {
            transition: color 0.3s;
            margin-right: 10px;
            transform: scaleX(0);
            transform-origin: bottom right;
        }
        &:hover::before {
            color: var(--primaryhover);
        }
    }
    a:hover {
        color: var(--primaryhover);
        transition: all 0.3s;
    }
}

.active-link {
    color: var(--primary);
    position: relative;
}

.active-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--primary);
}
</style>