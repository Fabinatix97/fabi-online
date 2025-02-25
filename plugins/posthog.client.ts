import { defineNuxtPlugin } from '#app'
import posthog from 'posthog-js'
import type { PostHog } from 'posthog-js'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const cookieConsentGiven = (): 'yes' | 'no' | 'undecided' => {
    const consent = localStorage.getItem('cookie_consent')
    return consent === 'yes' || consent === 'no' ? consent : 'undecided'
  }

  const posthogClient: PostHog = posthog.init(runtimeConfig.public.posthogPublicKey, {
    api_host: runtimeConfig.public.posthogHost,
    persistence: cookieConsentGiven() === 'yes' ? 'localStorage+cookie' : 'memory',
    capture_pageview: false,
    loaded: (ph) => {
      if (import.meta.env.MODE === 'development') ph.debug()
    },
  })

  const router = useRouter()
  router.afterEach((to) => {
    nextTick(() => {
      posthog.capture('$pageview', {
        current_url: to.fullPath,
      })
    })
  })

  nuxtApp.provide('posthog', posthogClient)
  nuxtApp.provide('cookieConsentGiven', cookieConsentGiven)
})
