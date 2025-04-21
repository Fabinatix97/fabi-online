<template>
  <div class="mb-24">
    <h2>Erfahrung</h2>

    <div class="flex gap-10">
      <div class="mt-8 flex w-1/4 flex-col gap-2">
        <div
          v-for="(item, index) in filteredExperiences"
          :key="index"
          :class="['date-button', { active: activeIndex === index }]"
          @click="activeIndex = index"
        >
          {{ item.date }}
        </div>
      </div>
      <div v-if="activeExperience" class="w-3/4">
        <h3>{{ activeExperience.title }}</h3>
        <h4 class="mt-0 text-xl font-semibold text-[var(--info)]">
          {{ activeExperience.company }}
        </h4>
        <p>{{ activeExperience.description }}</p>
      </div>
    </div>

    <h2>Pilot Skills</h2>

    <SegmentedSwitch v-model="activePilotSkillSegment" :segments="segmentOptions.pilotSkills" />
    <div v-for="(pilotSkill, index) in pilotSkills" :key="index">
      <h4>{{ pilotSkill.name }}</h4>
      <p>{{ pilotSkill.text }}</p>
    </div>

    <h2>Sonstige Qualifikationen</h2>

    <div class="flex gap-10">
      <div class="mt-8 flex w-1/4">
        <div
          :style="{
            border: theme === 'dark' ? '1px solid #CBD5E1' : '1px solid rgba(3, 61, 98, 0.5)',
            backgroundColor: theme === 'dark' ? '#CBD5E1' : 'rgba(3, 61, 98, 0.1)',
          }"
          class="flex h-24 flex-col items-center justify-center overflow-hidden rounded-2xl"
        >
          <div class="w-32 justify-items-center">
            <img
              src="/public/img/about/hs-worms-light.png"
              class="w-16"
              alt="Logo der Hochschule Worms"
            />
          </div>
        </div>
      </div>
      <div class="w-3/4">
        <h3>Aviation Management (B.Sc.)</h3>
        <p class="text-[var(--info)]">Hochschule Worms</p>
        <ul class="list-disc">
          <li>Fachbereich: Touristik / Verkehrswesen</li>
          <li>Parallel: Verkehrspilotenausbildung (ATPL)</li>
          <li>
            Bachelorarbeit: „Long-haul Narrow-body Operations by European LCCs - Current State,
            Challenges, and Outlook” (Bewertet mit 1,7)
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#imports'
import { experiences } from '@/data/experiences'

const { $theme } = useNuxtApp()
const theme = $theme

const activeIndex = ref(0)

const filteredExperiences = computed(() => experiences.filter((exp) => exp.type === 'pilot'))

const activeExperience = computed(() => filteredExperiences.value[activeIndex.value])

const activePilotSkillSegment = ref(0)

const segmentOptions = {
  pilotSkills: [
    { icon: 'fluent:people-team-16-filled' },
    { icon: 'game-icons:awareness' },
    { icon: 'mynaui:lightning-solid' },
    { icon: 'tabler:bulb-filled' },
  ],
}

const allPilotSkills: Record<number, { name: string; text: string }[]> = reactive({
  0: [
    {
      name: 'Crew Resource Management',
      text: 'Effektive Zusammenarbeit im Cockpit ist essenziell für einen sicheren Flug. Ich lege großen Wert darauf, klare Kommunikation und Entscheidungsprozesse im Team zu fördern, sodass alle Beteiligten zur optimalen Durchführung des Flugbetriebs beitragen können.',
    },
  ],
  1: [
    {
      name: 'Situational Awareness',
      text: 'Eine umfassende Wahrnehmung der aktuellen Fluglage ist unerlässlich. Ich achte darauf, jederzeit ein klares Bild von Flugposition, Wetterbedingungen, Verkehr und technischen Systemen zu haben, um schnelle und fundierte Entscheidungen zu treffen.',
    },
  ],
  2: [
    {
      name: 'Staying calm under pressure',
      text: 'Im Cockpit gibt es keine zweite Chance. Unter Druck bewahre ich Ruhe und handle entschlossen, um selbst in kritischen Situationen einen kühlen Kopf zu bewahren und sichere Lösungen zu finden.',
    },
  ],
  3: [
    {
      name: 'Technical Know-how',
      text: 'Als Pilot verfüge ich über tiefgreifendes technisches Wissen zu den Flugzeugsystemen. Dieses Know-how hilft mir, komplexe Systeme effizient zu bedienen und technische Herausforderungen schnell zu meistern.',
    },
  ],
})

const pilotSkills = computed(() => allPilotSkills[activePilotSkillSegment.value])
</script>

<style lang="scss" scoped>
.date-button {
  color: var(--heading);
  padding: 4px 12px;
  border: 1px solid var(--body);
  border-radius: 2rem;
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
    border-radius: 1rem;
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
