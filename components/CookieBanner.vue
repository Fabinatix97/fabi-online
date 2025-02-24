<template>
  <div
    v-if="showBanner"
    class="fixed bottom-0 left-1/2 z-[1000] m-0 w-full max-w-2xl -translate-x-1/2 transform rounded-2xl bg-[var(--primary)] p-4 text-center"
  >
    <h4 class="mt-0 text-[var(--main)]">Cookie-Einstellungen</h4>
    <p class="text-sm text-[var(--main)]">
      Ich verwende Cookies, um dein Nutzungserlebnis auf meiner Seite zu verbessern. Du kannst mir
      erlauben, alle Cookies zu nutzen ("Zustimmen") oder alle nicht notwendigen Cookies ablehnen
      ("Ablehnen"). Weitere Informationen findest du in
      <NuxtLink to="/impressum#_4-datenerfassung-auf-dieser-website" class="underline"
        >meiner Datenschutzerklärung</NuxtLink
      >.
    </p>
    <div class="flex justify-center gap-4">
      <button
        type="button"
        class="rounded-2xl bg-[var(--body)] px-4 py-2 hover:bg-[var(--main)]"
        @click="acceptCookies"
      >
        Zustimmen
      </button>
      <button
        type="button"
        class="rounded-2xl bg-[var(--body)] px-4 py-2 hover:bg-[var(--main)]"
        @click="declineCookies"
      >
        Ablehnen
      </button>
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
    }
  },
  watch: {
    consentGiven(newValue) {
      this.$posthog.set_config({
        persistence: newValue === 'yes' ? 'localStorage+cookie' : 'memory',
      })
      this.showBanner = newValue === 'undecided'
    },
  },
  mounted() {
    this.consentGiven = this.$cookieConsentGiven()
    this.showBanner = this.consentGiven === 'undecided'
  },
  methods: {
    acceptCookies() {
      localStorage.setItem('cookie_consent', 'yes')
      this.consentGiven = 'yes'
      this.showBanner = false
    },
    declineCookies() {
      localStorage.setItem('cookie_consent', 'no')
      this.consentGiven = 'no'
      this.showBanner = false
    },
  },
}
</script>
