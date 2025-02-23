<template>
    <p>Aktueller Zustand: <strong>{{ displayConsentStatus }}</strong></p>
    <div class="flex gap-4">
        <button @click="setConsent('yes')" class="px-4 py-2 rounded-2xl bg-[var(--primary)] text-[var(--body)] hover:bg-[var(--primary)]">Zustimmen</button>
        <button @click="setConsent('no')" class="px-4 py-2 rounded-2xl bg-[var(--primary)] text-[var(--body)] hover:bg-[var(--primary)]">Ablehnen</button>
    </div>
</template>

<script>
export default {
  name: 'CookieSettings',
  data() {
    return {
      consentStatus: 'Unbekannt',
    };
  },
  computed: {
    displayConsentStatus() {
      return this.consentStatus;
    },
  },
  mounted() {
    if (process.client) {
      const storedConsent = localStorage.getItem('cookie_consent');
      this.consentStatus =
        storedConsent === 'yes'
          ? 'Zugestimmt'
          : storedConsent === 'no'
          ? 'Abgelehnt'
          : 'Unbekannt';
    }
  },
  methods: {
    setConsent(status) {
      if (process.client) {
        localStorage.setItem('cookie_consent', status);
        this.consentStatus = status === 'yes' ? 'Zugestimmt' : 'Abgelehnt';
        this.$posthog.set_config({
          persistence: status === 'yes' ? 'localStorage+cookie' : 'memory',
        });
      }
    },
  },
};
</script>