import { defineNuxtPlugin } from '#app'
import posthog from 'posthog-js'

export default defineNuxtPlugin(nuxtApp => {
    const runtimeConfig = useRuntimeConfig();
    
    const cookieConsentGiven = () => {
        if (!localStorage.getItem('cookie_consent')) {
            return 'undecided';
        }
        return localStorage.getItem('cookie_consent');
    };

    const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey, {
        api_host: runtimeConfig.public.posthogHost,
        persistence: cookieConsentGiven() === 'yes' ? 'localStorage+cookie' : 'memory',
        capture_pageview: false,
        loaded: (posthog) => {
            if (import.meta.env.MODE === 'development') posthog.debug();
        }
    });

    const router = useRouter();
    router.afterEach((to) => {
        nextTick(() => {
            posthog.capture('$pageview', {
                current_url: to.fullPath
            });
        });
    });

    nuxtApp.provide('posthog', posthogClient);
    nuxtApp.provide('cookieConsentGiven', cookieConsentGiven);
});