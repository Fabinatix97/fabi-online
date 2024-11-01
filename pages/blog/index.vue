<template>
    <main>
      <h1 class="text-3xl my-8">Blog Posts</h1>
      <p>
        I like to write about anything that I am currently working or something new
        that interests me. If you would like me to write about something or be a
        guest blogger on your blog, please reach out to me on Twitter. If you would
        like to subscribe to an RSS feed, you can find it here.
      </p>
      <section>
        <Cards :posts="posts"/>
      </section>
    </main>
  </template>
  
<script setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('/blog').find()
)
</script>