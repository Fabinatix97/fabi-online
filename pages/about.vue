<template>
    
    <h1>Meine Geschichte</h1>

    <div class="grid gap-4 grid-cols-1 sm:grid-cols-3">
        <img src="/public/img/about/profile.png" class="justify-self-center mt-4 w-4/6 sm:w-5/6" />
        <p class="sm:col-span-2">Gerade als ich meine Pilotenausbildung im Frühjahr 2020 erfolgreich abgeschlossen habe, verwehrte mir die COVID-19-Pandemie den Weg ins Airliner-Cockpit. Und was jetzt? Als Pilot habe ich gelernt, mit schwierigen Situationen umzugehen und fundierte Entscheidungen zu treffen. Däumchen drehen und hoffen, dass sich die Luftfahrt-Branche schnell wieder erholt? Das erschien mir nicht richtig – Piloten warten schließlich auch nicht und hoffen, dass schon alles gut geht. Ich wollte das Ruder selbst in die Hand nehmen und aktiv werden.</p>
    </div>
    <p>Neben der Fliegerei habe ich mich schon immer für alles interessiert, was mit IT im Zusammenhang steht – sei es digitale Bildbearbeitung, Website-Gestaltung oder Tabellenkalkulation (Danke, <NuxtLink to="https://www.tabellenexperte.de/" class="underline hover:text-primaryhover" target="_blank">Papa</NuxtLink>). Ein Einstieg in diese zukunftsweisende IT-Branche klang sehr vielversprechend.</p>
    <p>Bis heute bereue ich weder die Entscheidung Pilot zu werden noch die Entscheidung, mich beruflich weiterzubilden. Vielmehr begreife ich es als Chance und bin dankbar, so viele Erfahrungen in den beiden spannendsten Umfeldern zu sammeln, die ich kenne: Luftfahrt & IT.</p>
    <p>Derzeit arbeite ich als DevOps Engineer im IT-Referat der Stadt München. Meine fliegerischen Lizenzen erhalte ich mir nebenbei aufrecht.</p>
    
    <ToggleSwitch @toggle="handleToggle" class="my-24 justify-self-center"/>

    <!-----------
        DEVOPS
    ------------>
    <div v-if="isDevOpsActive">
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

        <h2 class="mt-24">Tech Stack</h2>
        
        <h3 class="mt-0 text-info">Programmiersprachen</h3>
        <SegmentedSwitch v-model="activeSkillSegment" :segments="segmentOptions.skills" />
        <div class="mt-8 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-4">
            <div v-for="skill in skills"
                @mouseover="skill.hover = true"
                @mouseleave="skill.hover = false"
                :style="{ 
                    border: '1px solid rgba(' + skill.color + ', 1)',
                    backgroundColor: 'rgba(' + skill.color + ', 0.2)'
                }"
                class="flex flex-col rounded-[10px] justify-center items-center h-24 overflow-hidden">
                <div class="flex h-16 items-center">
                    <Icon
                        :name="skill.icon" 
                        size="3em" 
                        class="transition-transform duration-300 ease-in-out transform"
                        :class="{'scale-75': skill.hover}"
                    />
                </div>
                <div
                    v-if="skill.hover"
                    :style="{
                        backgroundColor: 'rgb(' + skill.color + ')',
                        color: skill.text
                    }"
                    class="flex justify-center items-center text-center  w-full h-9"
                >
                    {{ skill.name }}
                </div>
            </div>
        </div>

        <h3 class="text-info">Werkzeuge</h3>
        <SegmentedSwitch v-model="activeToolSegment" :segments="segmentOptions.tools" />
        <div class="mt-8 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-4">
            <div v-for="tool in tools"
                @mouseover="tool.hover = true"
                @mouseleave="tool.hover = false"
                :style="{ 
                    border: theme === 'dark' && tool.color === '0, 0, 0' ? '1px solid rgb(255, 255, 255)' : '1px solid rgba(' + tool.color + ')',
                    backgroundColor: theme === 'dark' && tool.color === '0, 0, 0' ? 'rgba(255, 255, 255, 0.4)' : `rgba(${tool.color}, 0.2)`
                }"
                class="flex flex-col rounded-[10px] justify-center items-center h-24 overflow-hidden">
                <div class="flex h-16 items-center">
                    <Icon
                        :name="tool.icon" 
                        size="3em" 
                        class="transition-transform duration-300 ease-in-out transform"
                        :class="{'scale-75': tool.hover}"
                    />
                </div>
                <div
                    v-if="tool.hover"
                    :style="{
                        backgroundColor: 'rgb(' + tool.color + ')',
                        color: tool.text
                    }"
                    class="flex justify-center items-center text-center w-full h-9"
                >
                    {{ tool.name }}
                </div>
            </div>
        </div>

        <h2 class="mt-24 mb-8">Projekte</h2>

        <Projects />

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
                    <img :src="experiences[date].image" class="rounded-lg" />
                    <p>{{ experiences[date].description }}</p>
                </div>
            </div>

            <h2>Pilot Skills</h2>

            <SegmentedSwitch v-model="activePilotSkillSegment" :segments="segmentOptions.pilotSkills" />
            <div v-for="pilotSkill in pilotSkills">
                <h4>{{ pilotSkill.name }}</h4>
                <p>{{ pilotSkill.text }}</p>
            </div>

            <h2>Sonstige Qualifikationen</h2>

            <div class="flex gap-10">
                <div class="flex mt-8 w-1/4">
                    <div 
                        :style="{ 
                            border: theme === 'dark' ? '1px solid #CBD5E1' : '1px solid rgba(3, 61, 98, 0.5)',
                            backgroundColor: theme === 'dark' ? '#CBD5E1' : 'rgba(3, 61, 98, 0.1)'
                        }"
                        class="flex flex-col rounded-[10px] justify-center items-center h-24 overflow-hidden">
                        <div class="w-32 justify-items-center">
                            <img src="/public/img/about/hs-worms-light.png" class="w-16" />
                        </div>
                    </div>
                </div>
                <div class="w-3/4">
                    <h3>Aviation Management (B.Sc.)</h3>
                    <p class="text-info">Hochschule Worms</p>
                    <ul class="list-disc">
                        <li>Fachbereich: Touristik / Verkehrswesen</li>
                        <li>Parallel: Verkehrspilotenausbildung (ATPL)</li>
                        <li>Bachelorarbeit: „Long-haul Narrow-body Operations by European LCCs - Current State, Challenges, and Outlook” (Bewertet mit 1,7)</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { useNuxtApp } from '#app';

const isDevOpsActive = ref(true);

const handleToggle = (value) => {
    isDevOpsActive.value = value;
};

const { $theme } = useNuxtApp();
const theme = $theme;

const date = ref(isDevOpsActive.value ? 0 : 3);

watch(isDevOpsActive, (newValue) => {
    date.value = newValue ? 0 : 3;
});

const setDate = (nr) => {
    date.value = nr;
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
        image: '/fabian-weiss/img/about/mcc.jpg',
        description: 'Das Cockpit ist zum Greifen nahe. Ab Januar 2020 habe ich mich aktiv bei deutschen Fluggesellschaften beworben und wurde in den darauffolgenden Monaten auch zu zwei Assessments eingeladen. Diese durchlief ich erfolgreich, ehe das damals neuartige Coronavirus Deutschland erreichte und einhergehend mit der Pandemieerklärung die Einstellungsabsichten der Airlines schlagartig zum Ruhen brachte. Seither sehen die Aussichten für angehende Verkehrspiloten wie mich eher düster aus. Aktuell halte ich noch an meinem Traum fest und sorge dafür, dass meine fliegerischen Berechtigungen gültig bleiben.',
    },
    {
        title: 'ATPL-Theorie, CPL, MEP, MCC',
        company: 'APS | Worms',
        image: '/fabian-weiss/img/about/tecnam-landing.jpg',
        description: 'Zurück in Deutschland ging es in großen Schritten dem Ziel „Frozen ATPL“ entgegen. Neben dem Curriculum der Hochschule und der weiteren praktischen Flugausbildung lag der Hauptfokus nun auf der Vorbereitung für die ATPL-Theorie. Diese bestand aus 14 verschiedenen Fächern, für welche hunderte Seiten Theoriewissen und mehr als 15.000 dazu passende Fragen verinnerlicht werden mussten. Mitte 2019 war auch diese Hürde geschafft. Fliegerisch folgten nun noch die Umschreibung der Instrumentenflugberechtigung in deutsches Recht (IR-Conversion), die Berechtigung zum Steuern mehrmotoriger Kolbenflugzeuge (MEP), die Berechtigung, um gegen Bezahlung Flüge als verantwortlicher Pilot durchführen zu dürfen (CPL) sowie die Berechtigung zum Fliegen sogenannter Multi-Crew Flugzeuge (MCC). All diese Berechtigungen in nur vier Monaten zu erlangen verbuche ich trotz aller Bescheidenheit als persönlichen Erfolg.',
    },
    {
        title: 'Zweiter USA-Aufenthalt, Hour Building',
        company: 'FFTC | Venice, FL',
        image: '/fabian-weiss/img/about/hour-building.jpg',
        description: 'In den Semesterferien ging es zurück auf gewohntes Terrain. Mit amerikanischer Pilotenlizenz in der Tasche durften wir nun das Land auf eigene Faust erkunden. Für die Umschreibung der Instrumentenflugberechtigung in europäisches Recht, galt es, dem Luftfahrtbundesamt mindestens 50 Stunden PIC (pilot in command – ohne Fluglehrer) vorzuweisen. Nichts leichter als das! Jeweils in Zweier-Crews schwangen wir uns in die Cessnas und erforschten den Sunshine-State von oben. Zu meinen absoluten Highlights zählen unter anderem Daytona Beach, Vero Beach, Fort Lauderdale, Orlando und Key West. Mit der unabhängigen Planung unserer Flüge stieg natürlich auch das Maß an Selbstverantwortung. Dass sich sowohl meine Teamfähigkeit als auch Englischkenntnisse hierdurch fast von alleine weiter verbesserten, war ein netter Nebeneffekt.',
    },
    {
        title: 'Erster USA-Aufenthalt, IR-Training',
        company: 'FFTC | Venice, FL',
        image: '/fabian-weiss/img/about/steep-turn.jpg',
        description: 'Florida, ein 800 km langer Appendix Nordamerikas, welcher sich durch seine endlosen Strände, das subtropische Klima und die sonnenhungrigen Ruheständler auszeichnet. Und ganz nebenbei wird der Bundesstaat regelmäßig von Hurrikans heimgesucht. Der perfekte Ort also, um eine Instrumentenflugberechtigung zu erlangen. Die Ironie ist hoffentlich erkennbar. Doch mit der allgegenwärtigen „easy-going“-Mentalität der Floridianer – Fluglehrer eingeschlossen – alles kein Problem. Innerhalb von zehn Wochen und einer einwöchigen Unterbrechung aufgrund der Verheerungen von Hurrikan Irma habe ich neben den neu erlangten fliegerischen Fähigkeiten auch meine Englischkenntnisse deutlich vertiefen können – und nebenbei Erlebnisse und Geschichtsstoff für ein ganzes Buch gesammelt.',
    },
];

const activeSkillSegment = ref(0);
const activeToolSegment = ref(0);
const activePilotSkillSegment = ref(0);

const segmentOptions = {
    skills: ['Frontend', 'Middleware', 'Backend'],
    tools: ['Dev', 'Ops', 'Misc'],
    pilotSkills: [
        { icon: 'fluent:people-team-16-filled' },
        { icon: 'game-icons:awareness' },
        { icon: 'mynaui:lightning-solid' },
        { icon: 'tabler:bulb-filled' }
    ]
};

const allSkills = reactive({
    0: [
        { name: 'Vue.js', color: '65, 184, 131', text: 'white', icon: 'logos:vue', hover: false },
        { name: 'Nuxt', color: '0, 220, 130', text: 'black', icon: 'logos:nuxt-icon', hover: false },
        { name: 'HTML', color: '228, 79, 38', text: 'white', icon: 'devicon:html5', hover: false },
        { name: 'CSS', color: '21, 114, 182', text: 'white', icon: 'devicon:css3', hover: false },
        { name: 'Tailwindcss', color: '68, 168, 179', text: 'white', icon: 'logos:tailwindcss-icon', hover: false },
        { name: 'Sass', color: '203, 102, 153', text: 'white', icon: 'logos:sass', hover: false },
        { name: 'React.js', color: '97, 218, 251', text: 'black', icon: 'logos:react', hover: false }
    ],
    1: [
        { name: 'Camel', color: '233, 120, 38', text: 'white', icon: 'logos:apache-camel', hover: false },
        { name: 'Node.js', color: '83, 158, 67', text: 'white', icon: 'logos:nodejs-icon', hover: false }
    ],
    2: [
        { name: 'Java', color: '83, 130, 161', text: 'white', icon: 'logos:java', hover: false },
        { name: 'Spring', color: '109, 179, 63', text: 'white', icon: 'logos:spring-icon', hover: false },
        { name: 'Springboot', color: '109, 179, 63', text: 'white', icon: 'simple-icons:springboot', hover: false },
        { name: 'PHP', color: '97, 129, 182', text: 'white', icon: 'logos:php', hover: false },
        { name: 'Javascript', color: '240, 219, 79', text: 'black', icon: 'devicon:javascript', hover: false },
        { name: 'Typescript', color: '0, 122, 204', text: 'white', icon: 'devicon:typescript', hover: false },
        { name: 'Python', color: '56, 126, 184', text: 'white', icon: 'logos:python', hover: false }
    ]
});

const allTools = reactive({
    0: [
        { name: 'VS Code', color: '0, 122, 204', text: 'white', icon: 'logos:visual-studio-code', hover: false },
        { name: 'Git', color: '222, 76, 54', text: 'white', icon: 'logos:git-icon', hover: false },
        { name: 'Docker', color: '35, 150, 237', text: 'white', icon: 'logos:docker-icon', hover: false },
        { name: 'Maven', color: '102, 46, 141', text: 'white', icon: 'devicon:maven', hover: false },
        { name: 'NPM', color: '193, 33, 39', text: 'white', icon: 'logos:npm-icon', hover: false },
        { name: 'Postman', color: '255, 108, 55', text: 'white', icon: 'logos:postman-icon', hover: false },
        { name: 'Swagger', color: '133, 234, 45', text: 'black', icon: 'logos:swagger', hover: false },
        { name: 'JFrog', color: '65, 191, 71', text: 'white', icon: 'logos:jfrog', hover: false }
    ],
    1: [
        { name: 'GitHub', color: '0, 0, 0', text: 'white', icon: 'logos:github-icon', hover: false },
        { name: 'GitLab', color: '226, 67, 41', text: 'white', icon: 'logos:gitlab', hover: false },
        { name: 'OpenShift', color: '218, 36, 48', text: 'white', icon: 'logos:openshift', hover: false },
        { name: 'Checkmk', color: '21, 209, 160', text: 'black', icon: 'simple-icons:checkmk', hover: false },
        { name: 'Ansible', color: '0, 0, 0', text: 'white', icon: 'logos:ansible', hover: false },
        { name: 'Kibana', color: '240, 78, 152', text: 'white', icon: 'logos:kibana', hover: false },
        { name: 'Helm', color: '39, 122, 159', text: 'white', icon: 'vscode-icons:file-type-helm', hover: false }
    ],
    2: [
        { name: 'Jira', color: '38, 132, 255', text: 'white', icon: 'logos:jira', hover: false },
        { name: 'Confluence', color: '38, 132, 255', text: 'white', icon: 'logos:confluence', hover: false },
        { name: 'Figma', color: '162, 89, 255', text: 'white', icon: 'logos:figma', hover: false },
        { name: 'Draw.io', color: '223, 108, 12', text: 'white', icon: 'vscode-icons:file-type-drawio', hover: false }
    ]
});

const allPilotSkills = reactive({
    0: [
        { 
            name: 'Crew Resource Management', 
            text: 'Effektive Zusammenarbeit im Cockpit ist essenziell für einen sicheren Flug. Ich lege großen Wert darauf, klare Kommunikation und Entscheidungsprozesse im Team zu fördern, sodass alle Beteiligten zur optimalen Durchführung des Flugbetriebs beitragen können.' 
        }
    ],
    1: [
        { 
            name: 'Situational Awareness', 
            text: 'Eine umfassende Wahrnehmung der aktuellen Fluglage ist unerlässlich. Ich achte darauf, jederzeit ein klares Bild von Flugposition, Wetterbedingungen, Verkehr und technischen Systemen zu haben, um schnelle und fundierte Entscheidungen zu treffen.' 
        }
    ],
    2: [
        { 
            name: 'Staying calm under pressure', 
            text: 'Im Cockpit gibt es keine zweite Chance. Unter Druck bewahre ich Ruhe und handle entschlossen, um selbst in kritischen Situationen einen kühlen Kopf zu bewahren und sichere Lösungen zu finden.' 
        }
    ],
    3: [
        { 
            name: 'Technical Know-how', 
            text: 'Als Pilot verfüge ich über tiefgreifendes technisches Wissen zu den Flugzeugsystemen. Dieses Know-how hilft mir, komplexe Systeme effizient zu bedienen und technische Herausforderungen schnell zu meistern.' 
        }
    ]
});

const skills = computed(() => allSkills[activeSkillSegment.value]);
const tools = computed(() => allTools[activeToolSegment.value]);
const pilotSkills = computed(() => allPilotSkills[activePilotSkillSegment.value]);

useSeoMeta({
    title: 'About',
    description: 'Erfahre mehr über mich, meine Erfahrungen und Fähgikeiten.',
    ogImage: '/img/about/fabionline.png',
});
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
@media (hover: none) {
    .date-button {
        color: var(--heading);
        padding: 4px 12px;
        border: 1px solid var(--border);
        border-radius: 17px;
        background-color: var(--main);
    }
    .date-button:hover {
        border-color: var(--primary);
    }
    .active {
        background-color: var(--primary);
        border: 1px solid var(--primary);
        color: var(--main);
    }
}
</style>