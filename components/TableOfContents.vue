<template>
  <div class="toc">
    <h4>Inhalt</h4>
    <ul>
      <li v-for="item in toc" :key="item.id" :class="{ active: item.id === activeId }">
        <button @click="scrollToSection(item.id)">{{ item.text }}</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const activeId = ref<string | null>(null)
const toc = ref<Array<{ text: string; id: string }>>([])
let observer: IntersectionObserver | null = null

function scrollToSection(id: string, offset = 120) {
  const section = document.getElementById(id)
  if (section) {
    const top = section.offsetTop - offset
    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }
}

onMounted(async () => {
  const { data } = await useAsyncData(route.path, () =>
    queryCollection('blog').path(route.path).first()
  )

  if (data.value?.body?.toc?.links) {
    const links = data.value.body.toc.links
    toc.value = (links[links.length - 1]?.text === 'Footnotes' ? links.slice(0, -1) : links).map(
      ({ text, id }: { text: string; id: string }) => ({ text, id })
    )
  }

  if (toc.value.length === 0) return

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
          break
        }
      }
    },
    { rootMargin: '-30% 0px -30% 0px', threshold: 0.5 }
  )

  toc.value.forEach(({ id }) => {
    const section = document.getElementById(id)
    if (section) {
      observer?.observe(section)
    }
  })
})

onUnmounted(() => observer?.disconnect())
</script>

<style lang="scss" scoped>
.toc {
  position: sticky;
  top: 10rem;
  right: 0;
  margin-left: 4rem;
  width: 15rem;

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    text-align: left;
    width: 100%;
  }

  li.active button {
    font-weight: bold;
    color: var(--primary);
  }

  li:hover button {
    color: var(--primaryhover);
  }
}
</style>
