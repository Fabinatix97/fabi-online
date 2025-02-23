<template>
    <div v-if="showBanner" class="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 bg-[var(--primary)] text-center rounded-2xl w-full max-w-2xl m-0 z-[1000]">
        <h4 class="text-[var(--main)] mt-0">Cookie-Einstellungen</h4>
        <p class="text-[var(--main)] text-sm">
            Ich verwende Cookies, um dein Nutzungserlebnis auf meiner Seite zu verbessern. Du kannst mir erlauben, alle Cookies zu nutzen ("Zustimmen") oder alle nicht notwendigen Cookies ablehnen ("Ablehnen"). Weitere Informationen findest du in 
            <NuxtLink to="/impressum#_4-datenerfassung-auf-dieser-website" class="underline">meiner Datenschutzerklärung</NuxtLink>.
        </p>
        <div class="flex gap-4 justify-center">
            <button type="button" @click="acceptCookies" class="px-4 py-2 rounded-2xl bg-[var(--body)] hover:bg-[var(--main)]">Zustimmen</button>
            <button type="button" @click="declineCookies" class="px-4 py-2 rounded-2xl bg-[var(--body)] hover:bg-[var(--main)]">Ablehnen</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CookieBanner',
    data() {
        return {
        consentGiven: '',
        showBanner: false,
        };
    },
    mounted() {
        this.consentGiven = this.$cookieConsentGiven();
        this.showBanner = this.consentGiven === 'undecided';
    },
    watch: {
        consentGiven(newValue) {
        this.$posthog.set_config({
            persistence: newValue === 'yes' ? 'localStorage+cookie' : 'memory',
        });
        this.showBanner = newValue === 'undecided';
        },
    },
    methods: {
        acceptCookies() {
            localStorage.setItem('cookie_consent', 'yes');
            this.consentGiven = 'yes';
            this.showBanner = false;
        },
        declineCookies() {
            localStorage.setItem('cookie_consent', 'no');
            this.consentGiven = 'no';
            this.showBanner = false;
        },
    },
};
</script>