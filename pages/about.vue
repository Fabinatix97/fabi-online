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
    <ToggleSwitch @toggle="handleToggle" class="my-24 justify-self-center"/>
    <!-----------
        DEVOPS
    ------------>
    <div v-if="isDevOpsActive">
        <div class="mb-24">

            <h2>Erfahrung</h2>

            <div class="flex gap-10">
                <div class="flex flex-col mt-8 w-1/4 gap-2 ">
                    <div @click="setDate(0)" :class="['date-button', { active: date === 0 }]">09/2024 - heute</div>
                    <div @click="setDate(1)" :class="['date-button', { active: date === 1 }]">09/2021 - 08/2024</div>
                    <div @click="setDate(2)" :class="['date-button', { active: date === 2 }]">09/2013 - 02/2014</div>
                </div>
                <div class="w-3/4">
                    <h3>{{ experiences[date].title }}</h3>
                    <p class="text-info">{{ experiences[date].company }}</p>
                    <p>{{ experiences[date].description }}</p>
                </div>
            </div>
        </div>

        <h2>Tech Stack</h2>
        
        <h3 class="mt-0 text-info">Programmiersprachen</h3>
        <SegmentedSwitch :segments="['Frontend', 'Middleware', 'Backend']" />
        <div class="mt-8 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-4">
            <div v-for="skill in skills"
                :style="{ 
                    border: '1px solid rgba(' + skill.color + ', 1)',
                    backgroundColor: 'rgba(' + skill.color + ', 0.2)'
                }"
                class="flex flex-col rounded-[10px] justify-center items-center h-24">
                <div><Icon :name="skill.icon" size="3em"/></div>
            </div>
        </div>

        <h3 class="text-info">Werkzeuge</h3>
        <SegmentedSwitch :segments="['Dev', 'Ops', 'Misc']" />
        <div class="mt-8 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-4">
            <div v-for="tool in tools"
                :style="{ 
                    border: '1px solid rgba(' + tool.color + ', 1)',
                    backgroundColor: 'rgba(' + tool.color + ', 0.2)'
                }"
                class="flex flex-col rounded-[10px] justify-center items-center h-24">
                <div><Icon :name="tool.icon" size="3em"/></div>
            </div>
        </div>
    </div>
    <!-----------
        PILOT
    ------------>
    <div v-if="!isDevOpsActive">
        <div class="mb-24">

            <h2>Erfahrung</h2>

            <div class="flex gap-10">
                <div class="flex flex-col mt-8 w-1/4 gap-2 ">
                    <div @click="setDate(3)" :class="['date-button', { active: date === 3 }]">01/2020 - heute</div>
                    <div @click="setDate(4)" :class="['date-button', { active: date === 4 }]">05/2018 - 12/2019</div>
                    <div @click="setDate(5)" :class="['date-button', { active: date === 5 }]">02/2018 - 04/2018</div>
                    <div @click="setDate(6)" :class="['date-button', { active: date === 6 }]">07/2017 - 10/2017</div>
                </div>
                <div class="w-3/4">
                    <h3>{{ experiences[date].title }}</h3>
                    <p class="text-info">{{ experiences[date].company }}</p>
                    <p>{{ experiences[date].description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useNuxtApp } from '#app';

const isDevOpsActive = ref(true);

const handleToggle = (value) => {
    isDevOpsActive.value = value;
};

const { $theme } = useNuxtApp();
const theme = $theme;

const date = ref(isDevOpsActive.value ? 0 : 3);

watchEffect(() => {
    date.value = isDevOpsActive.value ? 0 : 3;
});

const setDate = (nr) => {
    date.value = nr;
    console.log(date.value);
}

const experiences = [
    {
        title: 'DevOps Engineer',
        company: 'it@M | Stadtverwaltung München',
        description: 'In meiner aktuellen Position als DevOps Engineer bin ich Teil eines Teams, welches referatsübergreifende Services wie Risikomanagementtools und agile Tools (z. B. Jira & Confluence) betreut. Mein Schwerpunkt liegt im Service „Vorlagen- und Korrespondenzsystem“, wo ich mich um die Wartung und Weiterentwicklung von Schnittstellen zu anderen Services kümmere.',
    },
    {
        title: 'Duales Studium: Wirtschaftsinformatik',
        company: 'Stadtverwaltung München',
        description: 'Im Rahmen meines dualen Wirtschaftsinformatik-Studiums habe ich eine praxisorientierte Ausbildung bei der Stadtverwaltung München absolviert und dabei Einblicke in verschiedene Referate erhalten. Diese Erfahrung ermöglichte es mir, mein an der Hochschule erworbenes theoretisches Wissen in der Praxis anzuwenden, besonders im IT-Referat. Die Dimensionen der städtischen IT sind beeindruckend: 4.500 virtuelle Server, 108.000 Netzwerkanschlüsse sowie die Betreuung von über tausend Fachanwendungen verdeutlichen die Herausforderungen und Chancen. Der Gedanke, die Digitalisierung in der Verwaltung voranzutreiben und für München erlebbar zu machen, motivierte mich während meines gesamten Studiums.',
    },
    {
        title: 'Schülerpraktikum',
        company: 'Quadient | München',
        description: 'Im Rahmen meiner fachpraktischen Ausbildung an der FOS habe ich mich für ein Prakikum bei Quadient (ehemals Neopost GmbH & Co. KG) entschieden, Europas führender und weltweit zweitgrößter Anbieter von Postbearbeitungssystemen und Logistiklösungen. Dort konnte ich erste Einblicke in die Bereiche Marketing, IT und Buchhaltung erlangen und die jeweiligen Teams dabei tatkräftig unterstützen.',
    },
    {
        title: 'Airline Assessments & Proficiency Checks',
        company: 'Ready Entry',
        description: 'Das Cockpit ist zum Greifen nahe. Ab Januar 2020 habe ich mich aktiv bei deutschen Fluggesellschaften beworben und wurde in den darauffolgenden Monaten auch zu zwei Assessments eingeladen. Diese durchlief ich erfolgreich, ehe das damals neuartige Coronavirus Deutschland erreichte und einhergehend mit der Pandemieerklärung die Einstellungsabsichten der Airlines schlagartig zum Ruhen brachte. Seither sehen die Aussichten für angehende Verkehrspiloten wie mich eher düster aus. Aktuell halte ich noch an meinem Traum fest und sorge dafür, dass meine fliegerischen Berechtigungen gültig bleiben.',
    },
    {
        title: 'ATPL-Theorie, CPL, MEP, MCC',
        company: 'APS | Worms',
        description: 'Zurück in Deutschland ging es in großen Schritten dem Ziel „Frozen ATPL“ entgegen. Neben dem Curriculum der Hochschule und der weiteren praktischen Flugausbildung lag der Hauptfokus nun auf der Vorbereitung für die ATPL-Theorie. Diese bestand aus 14 verschiedenen Fächern, für welche hunderte Seiten Theoriewissen und mehr als 15.000 dazu passende Fragen verinnerlicht werden mussten. Mitte 2019 war auch diese Hürde geschafft. Fliegerisch folgten nun noch die Umschreibung der Instrumentenflugberechtigung in deutsches Recht (IR-Conversion), die Berechtigung zum Steuern mehrmotoriger Kolbenflugzeuge (MEP), die Berechtigung, um gegen Bezahlung Flüge als verantwortlicher Pilot durchführen zu dürfen (CPL) sowie die Berechtigung zum Fliegen sogenannter Multi-Crew Flugzeuge (MCC). All diese Berechtigungen in nur vier Monaten zu erlangen verbuche ich trotz aller Bescheidenheit als persönlichen Erfolg.',
    },
    {
        title: 'Zweiter USA-Aufenthalt, Hour Building',
        company: 'FFTC | Venice, FL',
        description: 'In den Semesterferien ging es zurück auf gewohntes Terrain. Mit amerikanischer Pilotenlizenz in der Tasche durften wir nun das Land auf eigene Faust erkunden. Für die Umschreibung der Instrumentenflugberechtigung in europäisches Recht, galt es, dem Luftfahrtbundesamt mindestens 50 Stunden PIC (pilot in command – ohne Fluglehrer) vorzuweisen. Nichts leichter als das! Jeweils in Zweier-Crews schwangen wir uns in die Cessnas und erforschten den Sunshine-State von oben. Zu meinen absoluten Highlights zählen unter anderem Daytona Beach, Vero Beach, Fort Lauderdale, Orlando und Key West. Mit der unabhängigen Planung unserer Flüge stieg natürlich auch das Maß an Selbstverantwortung. Dass sich sowohl meine Teamfähigkeit als auch Englischkenntnisse hierdurch fast von alleine weiter verbesserten, war ein netter Nebeneffekt.',
    },
    {
        title: 'Erster USA-Aufenthalt, IR-Training',
        company: 'FFTC | Venice, FL',
        description: 'Florida, ein 800 km langer Appendix Nordamerikas, welcher sich durch seine endlosen Strände, das subtropische Klima und die sonnenhungrigen Ruheständler auszeichnet. Und ganz nebenbei wird der Bundesstaat regelmäßig von Hurrikans heimgesucht. Der perfekte Ort also, um eine Instrumentenflugberechtigung zu erlangen. Die Ironie ist hoffentlich erkennbar. Doch mit der allgegenwärtigen „easy-going“-Mentalität der Floridianer – Fluglehrer eingeschlossen – alles kein Problem. Innerhalb von zehn Wochen und einer einwöchigen Unterbrechung aufgrund der Verheerungen von Hurrikan Irma habe ich neben den neu erlangten fliegerischen Fähigkeiten auch meine Englischkenntnisse deutlich vertiefen können – und nebenbei Erlebnisse und Geschichtsstoff für ein ganzes Buch gesammelt.',
    },
];

const skills = [
    { name: 'Vue.js', color: '65, 184, 131', icon: 'logos:vue' },
    { name: 'Nuxt', color: '0, 220, 130', icon: 'logos:nuxt-icon' },
    { name: 'HTML', color: '228, 79, 38', icon: 'logos:html-5' },
    { name: 'CSS', color: '21, 114, 182', icon: 'logos:css-3' },
    { name: 'Tailwindcss', color: '68, 168, 179', icon: 'logos:tailwindcss-icon' },
    { name: 'Sass', color: '203, 102, 153', icon: 'logos:sass' },
    { name: 'React.js', color: '97, 218, 251', icon: 'logos:react' }
];

const tools = [
    { name: 'GitHub', color: '0, 0, 0', icon: 'logos:github-icon' },
    { name: 'GitLab', color: '226, 67, 41', icon: 'logos:gitlab' },
    { name: 'OpenShift', color: '218, 36, 48', icon: 'logos:openshift' },
    { name: 'Checkmk', color: '21, 209, 160', icon: 'simple-icons:checkmk' },
    { name: 'Ansible', color: '0, 0, 0', icon: 'logos:ansible' },
    { name: 'Kibana', color: '240, 78, 152', icon: 'logos:kibana' },
    { name: 'Helm', color: '15, 22, 137', icon: 'logos:helm' }
];

</script>

<style lang="scss" scoped>
.date-button {
    color: var(--heading);
    padding: 4px 12px;
    border: 1px solid var(--body);
    border-radius: 17px;
    cursor: pointer;
}
.date-button:hover {
    border-color: var(--info);
}
.active {
    background-color: var(--main);
    border-color: var(--border);
}
</style>