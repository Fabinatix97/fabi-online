<template>
  <div class="fixed">
    <div as="nav" class="navbar hyphens-none" :class="themeClass">
      <div class="flex justify-between">
        <div>
          <ul class="nav-links">
            <li :class="{ 'active-link': isActiveRoute('/') }">
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li :class="{ 'active-link': isActiveRoute('/about') }">
              <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li :class="{ 'active-link': isActiveRoute('/blog') }">
              <NuxtLink to="/blog">Blog</NuxtLink>
            </li>
            <li :class="{ 'active-link': isActiveRoute('/impressum') }">
              <NuxtLink to="/impressum">Impressum</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <ul class="nav-links">
            <li>
              <a
                href="https://www.fabi-online.de/rss"
                rel="noopener noreferrer"
                target="_blank"
                title="RSS-Feed abonnieren"
                aria-label="RSS-Feed abonnieren (öffnet in neuem Tab)"
              >
                <Icon name="mdi:rss" size="1.4em" />
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@fabinatix"
                rel="noopener noreferrer"
                target="_blank"
                title="Folge mir auf Medium"
                aria-label="Folge mir auf Medium (öffnet in neuem Tab)"
              >
                <Icon name="mingcute:medium-fill" size="1.4em" />
              </a>
            </li>
            <li>
              <a
                href="https://de.linkedin.com/in/fabian-weiss"
                rel="noopener noreferrer"
                target="_blank"
                title="Folge mir auf LinkedIn"
                aria-label="Folge mir auf LinkedIn (öffnet in neuem Tab)"
              >
                <Icon name="mdi:linkedin" size="1.4em" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Fabinatix97"
                rel="noopener noreferrer"
                target="_blank"
                title="Folge mir auf GitHub"
                aria-label="Folge mir auf GitHub (öffnet in neuem Tab)"
              >
                <Icon name="mdi:github" size="1.4em" />
              </a>
            </li>
            <li>
              <button
                :aria-label="
                  theme === 'dark' ? 'In den Light Mode wechseln' : 'In den Dark Mode wechseln'
                "
                class="transition-colors duration-300 hover:text-[var(--primaryhover)]"
                @click="$toggleTheme()"
              >
                <ClientOnly>
                  <Icon :name="themeIconName" size="1.4em" />
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
import { computed } from 'vue'
import { useNuxtApp, useRoute } from '#app'

const { $theme, $toggleTheme } = useNuxtApp()
const theme = $theme
const route = useRoute()

const isActiveRoute = (path) => {
  return route.path === path
}

const themeIconName = computed(() => {
  return theme.value === 'light' ? 'line-md:moon-filled-loop' : 'line-md:sunny-filled-loop'
})

const themeClass = computed(() => {
  return theme.value === 'light'
    ? 'border-solid border-[1px] border-[var(--border)]'
    : 'border-none'
})
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
  font-size: 1.25rem;
  color: var(--heading);
  width: 800px;
  padding: 1rem;
  font-weight: 500;
  background-color: var(--navbar);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
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
  border-radius: 1rem;
  background-color: var(--primary);
}
</style>
