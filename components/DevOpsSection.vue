<template>
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

  <h2 class="mt-24">Tech Stack</h2>

  <h3 class="mt-0 text-[var(--info)]">Programmiersprachen</h3>

  <SegmentedSwitch
    v-model="activeSkillKey"
    :segments="skillSegmentOptions"
    :segment-keys="skillKeyOptions"
  />

  <div class="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-7">
    <div
      v-for="(skill, idx) in skillsWithHover"
      :key="idx"
      :style="{
        border: '1px solid rgba(' + skill.color.join(',') + ',1)',
        backgroundColor: 'rgba(' + skill.color.join(',') + ',0.2)',
      }"
      class="flex h-24 flex-col items-center justify-center overflow-hidden rounded-2xl"
      @mouseover="skill.hover = true"
      @mouseleave="skill.hover = false"
    >
      <div class="flex h-16 items-center">
        <Icon
          :name="skill.icon"
          size="3em"
          class="transform transition-transform duration-300 ease-in-out"
          :class="{ 'scale-75': skill.hover }"
        />
      </div>
      <div
        v-if="skill.hover"
        :style="{
          backgroundColor: 'rgb(' + skill.color.join(',') + ')',
          color: skill.textColor,
        }"
        class="flex h-9 w-full items-center justify-center text-center"
      >
        {{ skill.name }}
      </div>
    </div>
  </div>

  <h3 class="text-[var(--info)]">Werkzeuge</h3>

  <SegmentedSwitch
    v-model="activeToolKey"
    :segments="toolSegmentOptions"
    :segment-keys="toolKeyOptions"
  />

  <div class="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-7">
    <div
      v-for="(tool, idx) in toolsWithHover"
      :key="idx"
      :style="{
        border: '1px solid rgba(' + tool.color.join(',') + ',1)',
        backgroundColor: 'rgba(' + tool.color.join(',') + ',0.2)',
      }"
      class="flex h-24 flex-col items-center justify-center overflow-hidden rounded-2xl"
      @mouseover="tool.hover = true"
      @mouseleave="tool.hover = false"
    >
      <div class="flex h-16 items-center">
        <Icon
          :name="tool.icon"
          size="3em"
          class="transform transition-transform duration-300 ease-in-out"
          :class="{ 'scale-75': tool.hover }"
        />
      </div>
      <div
        v-if="tool.hover"
        :style="{
          backgroundColor: 'rgb(' + tool.color.join(',') + ')',
          color: tool.textColor,
        }"
        class="flex h-9 w-full items-center justify-center text-center"
      >
        {{ tool.name }}
      </div>
    </div>
  </div>

  <h2 class="mt-24 mb-8">Projekte</h2>

  <Projects />
</template>

<script setup lang="ts">
import { Projects, SegmentedSwitch } from '#components'
import { experiences } from '@/data/experiences'
import { skillCategories, toolCategories } from '@/data/skillsAndTools'
import type { TechItem } from '@/data/types'

const activeIndex = ref(0)

const filteredExperiences = computed(() => experiences.filter((exp) => exp.type === 'devops'))

const activeExperience = computed(() => filteredExperiences.value[activeIndex.value])

// TODO: Add a separate TechGrid.vue component to reduce redundant code

const activeSkillKey = ref(skillCategories[0].key)
const activeToolKey = ref(toolCategories[0].key)

const skillSegmentOptions = skillCategories.map((c) => c.label)
const toolSegmentOptions = toolCategories.map((c) => c.label)

const skillKeyOptions = skillCategories.map((c) => c.key)
const toolKeyOptions = toolCategories.map((c) => c.key)

const skills = computed<TechItem[]>(() => {
  const cat = skillCategories.find((c) => c.key === activeSkillKey.value)
  return cat ? cat.items : []
})
const tools = computed<TechItem[]>(() => {
  const cat = toolCategories.find((c) => c.key === activeToolKey.value)
  return cat ? cat.items : []
})

const skillsWithHover = computed(() =>
  skills.value.map((item) => reactive({ ...item, hover: false }))
)
const toolsWithHover = computed(() =>
  tools.value.map((item) => reactive({ ...item, hover: false }))
)
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
