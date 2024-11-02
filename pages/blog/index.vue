<template>
    <section>
        <Cards :posts="posts"/>
    </section>
</template>
  
<script setup>
const { data: posts } = await useAsyncData('posts', () =>
    queryContent('/blog').find()
);
definePageMeta({
    layout: 'bloglayout'
});
</script>