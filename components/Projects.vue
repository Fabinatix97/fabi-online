<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="project in projects" class="flex flex-col justify-between bg-main border-[1px] border-border rounded-2xl">
            <div>
                <NuxtLink :to="project.link">
                    <img
                        :src="`${project.image}`"
                        alt="Project Image"
                        class="w-full h-48 object-cover rounded-t-2xl hover:opacity-80 relative"
                    />
                </NuxtLink>
                <div class="flex flex-col px-6">
                    <NuxtLink :to="project.link" class="flex">
                        <h4 class="flex hover:text-primaryhover">{{ project.name }}</h4>
                    </NuxtLink>
                    <div class="flex flex-wrap justify-start gap-1">
                        <div v-for="tech in project.technologies" class="py-1 px-3 bg-body text-sm rounded-2xl border-[1px] border-border">
                                {{ tech }}
                        </div>
                    </div>
                    <p class="text-base mb-4">{{ project.description }}</p>
                </div>
            </div>
            <div class="flex justify-end pr-6 pb-4">
                <NuxtLink :to="project.link" class="flex">
                        <Icon name="mdi:github" size="1.5em" class="hover:text-primaryhover" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">

const projects = [
    {
        name: 'VueDoList',
        image: '/img/about/vuedo.png',
        link: 'https://github.com/Fabinatix97',
        technologies: ['Vue.js', 'Javascript'],
        description: 'Schlanke und minimalistische Todo-Liste mit Fokus auf dem Wesentlichen.'
    },
    {
        name: 'fabi-online',
        image: '/img/about/fabionline.png',
        link: 'https://github.com/Fabinatix97',
        technologies: ['Nuxt', 'Javascript', 'Tailwindcss'],
        description: 'Selbstentwickelte Website als Ablöse für Wordpress-Blog. Die Basis bietet Nuxt, ein Vue.js Framework, das Flexibilität und moderne Features liefert.'
    }
]
</script>