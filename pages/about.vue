<template>
  <div>
    <h1>Meine Geschichte</h1>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <img
        src="/public/img/about/profile.png"
        class="mt-4 w-4/6 justify-self-center sm:w-5/6"
        alt="Profilfoto des Autors"
      />
      <p class="sm:col-span-2">
        Gerade als ich meine Pilotenausbildung im Frühjahr 2020 erfolgreich abgeschlossen habe,
        verwehrte mir die COVID-19-Pandemie den Weg ins Airliner-Cockpit. Und was jetzt? Als Pilot
        habe ich gelernt, mit schwierigen Situationen umzugehen und fundierte Entscheidungen zu
        treffen. Däumchen drehen und hoffen, dass sich die Luftfahrt-Branche schnell wieder erholt?
        Das erschien mir nicht richtig – Piloten warten schließlich auch nicht und hoffen, dass
        schon alles gut geht. Ich wollte das Ruder selbst in die Hand nehmen und aktiv werden.
      </p>
    </div>
    <p>
      Neben der Fliegerei habe ich mich schon immer für alles interessiert, was mit IT im
      Zusammenhang steht – sei es digitale Bildbearbeitung, Website-Gestaltung oder
      Tabellenkalkulation (Danke,
      <NuxtLink
        to="https://www.tabellenexperte.de/"
        class="underline hover:text-[var(--primaryhover)]"
        target="_blank"
        >Papa</NuxtLink
      >). Ein Einstieg in diese zukunftsweisende IT-Branche klang sehr vielversprechend.
    </p>
    <p>
      Bis heute bereue ich weder die Entscheidung Pilot zu werden noch die Entscheidung, mich
      beruflich weiterzubilden. Vielmehr begreife ich es als Chance und bin dankbar, so viele
      Erfahrungen in den beiden spannendsten Umfeldern zu sammeln, die ich kenne: Luftfahrt & IT.
    </p>
    <p>
      Derzeit arbeite ich als DevOps Engineer im IT-Referat der Stadt München. Meine fliegerischen
      Lizenzen erhalte ich mir nebenbei aufrecht.
    </p>

    <ToggleSwitch class="my-24 justify-self-center" @toggle="handleToggle" />

    <div v-if="isDevOpsActive">
      <DevOpsSection :is-dev-ops-active="isDevOpsActive" />
    </div>
    <div v-else>
      <PilotSection :is-dev-ops-active="isDevOpsActive" />
    </div>
  </div>
</template>

<script setup>
import { ToggleSwitch, DevOpsSection, PilotSection } from '#components'

const isDevOpsActive = ref(true)

const handleToggle = (value) => {
  isDevOpsActive.value = value
}

useSeoMeta({
  title: 'About',
  description: 'Erfahre mehr über mich, meine Erfahrungen und Fähigkeiten.',
  ogImage: '/img/about/fabionline.png',
})
</script>
