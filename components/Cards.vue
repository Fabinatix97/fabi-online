<template>
  <div class="mx-5 mb-10 flex justify-center">
    <div class="w-[800px]">
      <SearchBar
        placeholder="Artikel suchen"
        aria-label="Artikel suchen"
        @search="updateSearchQuery"
      />
    </div>
  </div>
  <div v-if="input && !filteredPosts.length" class="item error">
    <p>Keine Artikel gefunden</p>
  </div>
  <div class="cards grid grid-cols-1 gap-4 sm:grid-cols-2">
    <NuxtLink v-for="post in filteredPosts" :key="post.id" :to="post.path" class="card">
      <div class="card-content flex h-full flex-col bg-[var(--main)]">
        <div>
          <NuxtImg
            :src="`${post.coverImage}`"
            width="500px"
            format="webp"
            alt="Blog Post Cover Image"
            class="relative h-48 w-full rounded-t-2xl object-cover"
          />
        </div>
        <div class="flex-grow p-6">
          <div
            class="justify-self-start rounded-2xl border-2 border-[var(--primary)] px-3 py-1 text-sm text-[var(--primary)]"
          >
            {{ formatDate(post.date) }}
          </div>
          <h2 class="mb-2 text-xl font-bold">{{ post.title }}</h2>
          <p class="mb-4 text-base">{{ extractContent(post.body, 40) }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="js">
import { ref, computed } from 'vue'

const input = ref('')
const props = defineProps({
  posts: {
    type: Array,
    default: () => [],
  },
})

const filteredPosts = computed(() => {
  const searchTerm = input.value.toLowerCase()
  return props.posts.filter((post) => {
    const bodyText = extractContent(post.body).toLowerCase()
    return post.title.toLowerCase().includes(searchTerm) || bodyText.includes(searchTerm)
  })
})

function updateSearchQuery(query) {
  input.value = query
}

function formatDate(dateString) {
  const date = new Date(dateString)
  const day = new Intl.DateTimeFormat('de-DE', { day: 'numeric' }).format(date)
  const month = new Intl.DateTimeFormat('de-DE', { month: 'short' }).format(date)
  const year = new Intl.DateTimeFormat('de-DE', { year: 'numeric' }).format(date)
  return `${month} ${day}, ${year}`
}

function extractContent(body, wordLimit) {
  if (!body || !Array.isArray(body.value)) {
    return ''
  }

  const words = []

  const extractText = (node) => {
    if (Array.isArray(node)) {
      node.forEach((child, index) => {
        if (index === 0 && typeof child === 'string') return
        extractText(child)
      })
    } else if (typeof node === 'string') {
      words.push(...node.split(/\s+/))
    }
  }

  body.value.forEach((block) => extractText(block))

  return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '...' : '')
}
</script>

<style lang="scss" scoped>
.cards {
  justify-content: center;
  align-items: center;
  .card {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .card-content {
      border-radius: inherit;
    }
  }
}
</style>
