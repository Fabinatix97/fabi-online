import { ref, watch } from 'vue'

enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

export default defineNuxtPlugin(() => {
  const theme = ref<ThemeMode>(getInitialTheme() as ThemeMode)

  function getInitialTheme(): string {
    return (
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeMode.Dark : ThemeMode.Light)
    )
  }

  function applyTheme(): void {
    document.documentElement.setAttribute('data-theme', theme.value)

    // Add or remove the 'dark' class that Nuxt Content uses for theme detection
    if (theme.value === ThemeMode.Dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function toggleTheme(): void {
    theme.value = theme.value === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light
    localStorage.setItem('theme', theme.value)
  }

  applyTheme()
  watch(theme, applyTheme)

  return {
    provide: {
      theme,
      toggleTheme,
    },
  }
})
