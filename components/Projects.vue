<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div
      v-for="project in projects"
      :key="project.name"
      class="flex flex-col justify-between rounded-2xl border-[1px] border-[var(--border)] bg-[var(--main)]"
      data-test="project-card"
    >
      <div>
        <NuxtLink :to="project.link">
          <img
            :src="`${project.image}`"
            :alt="`Link zum Projekt ${project.name}`"
            class="relative h-48 w-full rounded-t-2xl object-cover hover:opacity-80"
          />
        </NuxtLink>
        <div class="flex flex-col px-6">
          <NuxtLink :to="project.link" class="flex">
            <h4 class="flex hover:text-[var(--primaryhover)]">
              {{ project.name }}
            </h4>
          </NuxtLink>
          <div class="flex flex-wrap justify-start gap-1">
            <div
              v-for="(tech, index) in project.technologies"
              :key="index"
              class="rounded-2xl border-[1px] border-[var(--border)] bg-[var(--body)] px-3 py-1 text-sm"
            >
              {{ tech }}
            </div>
          </div>
          <p class="mb-4 text-base">{{ project.description }}</p>
        </div>
      </div>
      <div class="flex justify-end pr-6 pb-4">
        <NuxtLink :to="project.link" class="flex" aria-label="Projekt auf GitHub ansehen">
          <Icon name="mdi:github" size="1.5em" class="hover:text-[var(--primaryhover)]" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '@/data/projects'
</script>
