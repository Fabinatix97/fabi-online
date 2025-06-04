<template>
  <div>
    <ContentRenderer :value="impressum" class="impressum" />
    <CookieSettings />
  </div>
</template>

<script setup>
const route = useRoute()
const { data: impressum } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

useSeoMeta({
  title: 'Impressum',
  description: 'Impressum und Datenschutzerklärung von Fabian Weiß',
  ogImage: '/img/about/fabionline.png',
})
</script>

<style lang="scss">
.impressum {
  ul {
    margin-left: 3rem;
    list-style-type: disc;
  }
}
</style>
