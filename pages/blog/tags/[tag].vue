<template>
    <h1>#{{ tag }}</h1>
    <section>
        <Cards :posts="filteredPosts"/>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const tag = route.params.tag;

const { data: posts } = await useAsyncData('posts', () =>
    queryContent('/blog').where({ tags: { $contains: tag } }).find()
);

const filteredPosts = computed(() => posts.value);

definePageMeta({
    layout: 'bloglayout'
});
</script>