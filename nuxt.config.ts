// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/favicon/favicon-96x96.png',
        },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
      ],
      meta: [{ name: 'apple-mobile-web-app-title', content: 'Fabian Weiß' }],
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/eslint',
  ],
  css: ['~/assets/main.css'],
  plugins: [{ src: '~/plugins/theme.js', mode: 'client' }],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || '',
      posthogPublicKey: 'phc_YlzA1GDgNE5Z18DwWWwKj7833bAd60eGKbMa5HcGxqz',
      posthogHost: 'https://eu.i.posthog.com',
    },
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
  nitro: {
    prerender: {
      routes: ['/rss'],
    },
  },
})
