// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/fabian-weiss/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/fabian-weiss/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/fabian-weiss/favicon/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/fabian-weiss/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/fabian-weiss/favicon/favicon-96x96.png' },
        { rel: 'manifest', href: '/fabian-weiss/favicon/site.webmanifest' }
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'Fabian Weiß' }
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/fonts'
  ],
  css: [
    '@/assets/global.scss'
  ],
  plugins: [
    { src: '~/plugins/theme.js', mode: 'client' }
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || ''
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        },
      },
    },
  }
});