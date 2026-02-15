// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Fabian Weiß',
      titleTemplate: '%s | Fabian Weiß',
      htmlAttrs: {
        lang: 'de',
      },
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
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          },
        },
      },
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
    '@nuxt/test-utils/module',
  ],
  css: ['~/assets/main.css'],
  plugins: [{ src: '~/plugins/theme.ts', mode: 'client' }],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || '',
      posthogPublicKey: 'phc_YlzA1GDgNE5Z18DwWWwKj7833bAd60eGKbMa5HcGxqz',
      posthogHost: 'https://eu.i.posthog.com',
    },
  },
  vite: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Vite plugin type mismatch between @tailwindcss/vite and Nuxt
    plugins: [tailwindcss()] as any,
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        } as Record<string, string>,
      },
    },
  },
  nitro: {
    prerender: {
      routes: ['/rss'],
    },
  },
})
