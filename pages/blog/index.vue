<template>
  <NuxtLayout :name="blog-layout">
      <section>
        <Cards :posts="posts"/>
      </section>
  </NuxtLayout>
</template>
  
<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find()
);
definePageMeta({
  layout: 'blog-layout'
});
</script>