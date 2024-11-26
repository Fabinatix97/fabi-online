<template>
    <h1>Blog</h1>
    <p class="mb-0">Hier teile ich meine Gedanken und Erfahrungen zu allem, was mich gerade beschäftigt.</p>
    <div class="flex items-center h-20">
        <div class="flex gap-1 bg-main text-border p-2 rounded-full border-[1px] border-border">
            <div class="flex">
                <Icon name="mdi:search" size="1.5em" />
            </div>
            <div class="flex w-60">Artikel suchen</div>
        </div>
    </div>
    <Cards :posts="posts"/>
</template>
  
<script setup>
const { data: posts } = await useAsyncData('posts', () =>
    queryContent('/blog').find()
);
</script>