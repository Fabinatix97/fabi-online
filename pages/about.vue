<template>
    <client-only>
        <svg v-if="theme === 'dark'" width="400" height="300" viewBox="0 0 10 11" class="absolute -z-10 blur-[120px]">
            <circle cx="2" cy="2" r="5" fill="var(--primary)" />
        </svg>
    </client-only>
    <h1>Meine Geschichte</h1>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-3">
        <img src="/public/img/profile.png" class="justify-self-center mt-4 w-4/6 sm:w-5/6" />
        <p class="sm:col-span-2">Gerade als ich meine Pilotenausbildung im Frühjahr 2020 erfolgreich abgeschlossen habe, verwehrte mir die COVID-19-Pandemie den Weg ins Airliner-Cockpit. Und was jetzt? Als Pilot habe ich gelernt, mit schwierigen Situationen umzugehen und fundierte Entscheidungen zu treffen. Däumchen drehen und hoffen, dass sich die Luftfahrt-Branche schnell wieder erholt? Das erschien mir nicht richtig – Piloten warten schließlich auch nicht und hoffen, dass schon alles gut geht. Ich wollte das Ruder selbst in die Hand nehmen und aktiv werden.</p>
    </div>
    <p>Neben der Fliegerei habe ich mich schon immer für alles interessiert, was mit IT im Zusammenhang steht – sei es digitale Bildbearbeitung, Website-Gestaltung oder Tabellenkalkulation (Danke, Papa). Ein Einstieg in diese zukunftsweisende IT-Branche klang sehr vielversprechend.</p>
    <p>Bis heute bereue ich weder die Entscheidung Pilot zu werden noch die Entscheidung, mich beruflich weiterzubilden. Vielmehr begreife ich es als Chance und bin dankbar, so viele Erfahrungen in den beiden spannendsten Umfeldern zu sammeln, die ich kenne: Luftfahrt & IT.</p>
    <p>Derzeit arbeite ich als DevOps Engineer im IT-Referat der Stadt München. Meine fliegerischen Lizenzen erhalte ich mir nebenbei aufrecht.</p>
</template>

<script setup>
import { useNuxtApp } from '#app';

const { $theme } = useNuxtApp();
const theme = $theme;
</script>