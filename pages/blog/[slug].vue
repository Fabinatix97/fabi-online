<template>
    <main>
        <div class="justify-self-center py-1 px-3 border-2 border-button text-button text-sm rounded-full">
            {{ formatDate(data.date) }}
        </div>
        <h1 class="text-center">{{ data.title }}</h1>
        <p class="text-center text-info">Lesedauer: {{ calculateReadingTime(getPostContent(data.body)) }}</p>
        <img
            :src="`/img/blog/${data.coverImage}`"
            alt="Blog Post Cover Image"
            class="cover-image my-8"
        />
        <ContentRenderer :value="data" class="my-10 mx-auto max-w-7xl text-lg" />
        <div class="">
            <a v-for="tag in data.tags" :key="tag" :href="`/blog/tags/${tag}`"
                class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-white bg-button uppercase last:mr-0 my-2 mr-4">
                <div class="flex">
                    <Icon name="mdi:tag" size="1.2rem" class="text-gray-100 mr-2" />
                    {{ tag }}
                </div>
            </a>
        </div>
    </main>
</template>

<script setup>
const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent()
        .where({ _path: path })
        .findOne()
})

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = new Intl.DateTimeFormat("de-DE", { day: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("de-DE", { month: "short" }).format(date);
  const year = new Intl.DateTimeFormat("de-DE", { year: "numeric" }).format(date);
  
  return `${month} ${day}, ${year}`;
}

function getPostContent(body) {
  let result = "";

  function getWords(text) {
    return text.trim().split(/\s+/);
  }

  function collectValues(body) {
    if (body.value) {
      result += body.value + " ";
    }
    if (body.children) {
      for (const child of body.children) {
        collectValues(child);
      }
    }
  }

  collectValues(body);
  const words = getWords(result);
  return words.join(" ");
}

function calculateReadingTime(content) {
  const text = content
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return readingTime === 1 ? `${readingTime} Minute` : `${readingTime} Minuten`;
}
</script>

<style>
.cover-image {
    width: calc(100% + 60px);
    position: relative;
    left: -30px;
    max-width: none;
}
</style>