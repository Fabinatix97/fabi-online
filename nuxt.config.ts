// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/icon'],
  css: [
    '@/assets/global.css'
  ],
  plugins: [
    { src: '~/plugins/theme.js', mode: 'client' }
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || ''
    }
  }
});