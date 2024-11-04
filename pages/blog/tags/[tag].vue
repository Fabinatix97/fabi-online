<template>
    <h1>Beiträge zum Thema: {{ tag }}</h1>
    <section>
        <Cards :posts="filteredPosts"/>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const tag = route.params.tag;

// Abrufen der Blogposts und Filtern nach Tag
const { data: posts } = await useAsyncData('posts', () =>
    queryContent('/blog').where({ tags: { $contains: tag } }).find()
);

const filteredPosts = computed(() => posts.value);

definePageMeta({
    layout: 'bloglayout'
});
</script>

<style scoped>
/* Optional: Stil für die Tag-Ansicht anpassen */
</style>