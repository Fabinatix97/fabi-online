<script setup lang="ts">
import mermaid from 'mermaid'
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  code: string
}>()

const container = ref<HTMLElement | null>(null)
const error = ref<string | null>(null)

function getTheme(): 'dark' | 'neutral' {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'neutral'
}

async function render() {
  if (!container.value || !props.code) return

  const id = `mermaid-${Math.random().toString(36).slice(2, 11)}`

  mermaid.initialize({
    startOnLoad: false,
    theme: getTheme(),
    securityLevel: 'loose',
  })

  try {
    const { svg } = await mermaid.render(id, props.code.trim())
    container.value.innerHTML = svg
    error.value = null
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Diagramm konnte nicht gerendert werden.'
  }
}

let observer: MutationObserver | undefined

onMounted(() => {
  render()
  observer = new MutationObserver(() => render())
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class', 'data-theme'],
  })
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <figure class="mermaid-figure">
    <div ref="container" class="mermaid-diagram" role="img" />
    <p v-if="error" class="mermaid-error">{{ error }}</p>
    <figcaption v-if="$slots.default">
      <slot mdc-unwrap="p" />
    </figcaption>
  </figure>
</template>

<style scoped>
.mermaid-figure {
  margin: 2rem 0 2.5rem;
}

.mermaid-diagram {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid var(--codeborder);
  background: var(--main);
}

.mermaid-diagram :deep(svg) {
  max-width: 100%;
  height: auto;
}

.mermaid-error {
  color: var(--primary);
  font-size: 0.9rem;
  margin-top: 0.75rem;
}

.mermaid-figure :deep(figcaption p) {
  font-size: 0.8rem;
  color: var(--info);
  margin-top: 10px;
  margin-bottom: 0;
}
</style>
