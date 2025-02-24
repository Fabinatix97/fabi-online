import { ref, watch } from 'vue'

export default defineNuxtPlugin(() => {
  const theme = ref(
    localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  )

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
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
