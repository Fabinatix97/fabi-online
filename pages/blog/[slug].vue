<template>
  <div>
    <div class="flex w-full justify-center">
      <div class="hidden w-[calc(50%-400px)] flex-none xl:block"></div>
      <main class="max-w-[800px] min-w-0 px-4">
        <div class="mb-8 flex text-[var(--info)]">
          <NuxtLink to="/blog">
            <div
              class="backbutton flex gap-2 rounded-full border-[1px] border-[var(--border)] bg-[var(--main)] pt-1 pr-6 pl-4 hover:text-[var(--primary)]"
            >
              <div class="icon-container">
                <Icon name="mdi:arrow-back" size="1.4em" />
              </div>
              <span>Zurück zur Übersicht</span>
            </div>
          </NuxtLink>
        </div>
        <div class="text-xl font-bold text-[var(--primary)]">
          {{ formatDate(data.date) }}
        </div>
        <h1 class="mt-4">{{ data.title }}</h1>
        <div class="flex items-center gap-2 text-[var(--info)]">
          <div class="flex">
            <Icon name="mdi:clock-outline" size="1.2em" />
          </div>
          <p class="m-0 flex p-0">
            Lesezeit: {{ calculateReadingTime(getPostContent(data.body)) }}
          </p>
        </div>
        <img
          :src="`${data.coverImage}`"
          alt="Blog Post Cover"
          class="relative left-[-30px] my-8 w-[calc(100%_+_60px)] max-w-none rounded-2xl"
        />
        <ContentRenderer :value="data" class="blog-content mb-8" />
        <div class="flex flex-wrap gap-4">
          <NuxtLink
            v-for="tag in data.tags"
            :key="tag"
            :href="`/blog/tags/${tag}`"
            class="rounded-xl border-2 border-[var(--primary)] px-4 py-2 text-sm font-semibold text-[var(--primary)] uppercase hover:bg-[var(--primary)] hover:text-[var(--body)]"
          >
            <div class="flex gap-2">
              <Icon name="mdi:tag" size="1.2rem" />
              {{ tag }}
            </div>
          </NuxtLink>
        </div>
      </main>
      <div class="hidden w-[calc(50%-400px)] flex-none xl:block">
        <div class="h-screen"></div>
        <TableOfContents />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const { data } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

function formatDate(dateString) {
  const date = new Date(dateString)
  const day = new Intl.DateTimeFormat('de-DE', { day: 'numeric' }).format(date)
  const month = new Intl.DateTimeFormat('de-DE', { month: 'short' }).format(date)
  const year = new Intl.DateTimeFormat('de-DE', { year: 'numeric' }).format(date)

  return `${month} ${day}, ${year}`
}

function getPostContent(body) {
  let result = ''

  function getWords(text) {
    return text.trim().split(/\s+/)
  }

  function collectValues(body) {
    if (body.value) {
      result += body.value + ' '
    }
    if (body.children) {
      for (const child of body.children) {
        collectValues(child)
      }
    }
  }

  collectValues(body)
  const words = getWords(result)
  return words.join(' ')
}

function calculateReadingTime(content) {
  const text = content
  const wordCount = text.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)

  return readingTime === 1 ? `${readingTime} Minute` : `${readingTime} Minuten`
}

definePageMeta({
  layout: 'default',
})

onMounted(() => {
  if (data.value) {
    useSeoMeta({
      title: data.value.title,
      description: `${getPostContent(data.value.body).slice(0, 250)}...`,
      ogImage: data.value.coverImage,
    })
  }
})
</script>

<style lang="scss">
.icon-container {
  display: inline-block;
  transition: transform 0.3s ease;
}

.backbutton:hover .icon-container {
  animation: bounceLeft 0.5s ease;
}

@keyframes bounceLeft {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-5px);
  }
}

.blog-content {
  img,
  video {
    border-radius: 1rem;
  }
  ol {
    font-size: var(--text-lg);
    line-height: 2rem;
    margin-left: 3rem;
    list-style-type: decimal;
  }
  ul {
    font-size: var(--text-lg);
    line-height: 2rem;
    margin-left: 3rem;
    list-style-type: disc;
  }
  a {
    text-decoration: underline;
    &:hover {
      text-decoration-thickness: 2px;
      color: var(--primaryhover);
    }
  }
  .button {
    background-color: var(--primary);
    text-decoration: none;
    color: white;
    a {
      color: white;
      text-decoration: none;
    }
    &:hover {
      background-color: var(--primaryhover);
      color: white;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      text-decoration: none;
    }
  }
  h2 {
    margin-top: 3rem;
    font-size: var(--text-2xl);
  }
  h3 {
    margin-top: 2rem;
    font-size: var(--text-xl);
  }
  h4 {
    margin-top: 1.5rem;
    font-size: var(--text-lg);
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.8rem;
    background-color: var(--main);
  }
  th,
  td {
    padding: 8px 12px;
    border: 1px solid var(--tableborder);
    text-align: left;
  }
  thead th {
    background-color: var(--tablehead);
    font-weight: bold;
  }
  tbody tr:nth-child(even) {
    background-color: var(--tablerow);
  }
  figcaption p {
    font-weight: 00;
    font-size: 0.8rem;
    color: var(--info);
    margin-top: 10px;
    margin-bottom: 40px;
  }
  blockquote {
    background-color: var(--main);
    border-left: 5px solid var(--primary);
    padding: 10px 15px;
    margin: 20px 0;
    color: var(--text);
    font-style: italic;
  }
  hr {
    margin-top: 20px;
  }
  p code {
    background-color: var(--codebg);
    padding: 4px 8px;
    border-radius: 8px;
    font-family: monospace;
    font-size: var(--text-sm);
  }
}
</style>
