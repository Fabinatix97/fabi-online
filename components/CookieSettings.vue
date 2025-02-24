<template>
  <p>
    Aktueller Zustand: <strong>{{ displayConsentStatus }}</strong>
  </p>
  <div class="flex gap-4">
    <button
      class="rounded-2xl bg-[var(--primary)] px-4 py-2 text-[var(--body)] hover:bg-[var(--primary)]"
      @click="setConsent('yes')"
    >
      Zustimmen
    </button>
    <button
      class="rounded-2xl bg-[var(--primary)] px-4 py-2 text-[var(--body)] hover:bg-[var(--primary)]"
      @click="setConsent('no')"
    >
      Ablehnen
    </button>
  </div>
</template>

<script>
export default {
  name: 'CookieSettings',
  data() {
    return {
      consentStatus: 'Unbekannt',
    }
  },
  computed: {
    displayConsentStatus() {
      return this.consentStatus
    },
  },
  mounted() {
    if (import.meta.client) {
      const storedConsent = localStorage.getItem('cookie_consent')
      this.consentStatus =
        storedConsent === 'yes' ? 'Zugestimmt' : storedConsent === 'no' ? 'Abgelehnt' : 'Unbekannt'
    }
  },
  methods: {
    setConsent(status) {
      if (import.meta.client) {
        localStorage.setItem('cookie_consent', status)
        this.consentStatus = status === 'yes' ? 'Zugestimmt' : 'Abgelehnt'
        this.$posthog.set_config({
          persistence: status === 'yes' ? 'localStorage+cookie' : 'memory',
        })
      }
    },
  },
}
</script>
