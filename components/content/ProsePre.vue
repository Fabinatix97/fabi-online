<template>
  <div
    v-if="$props.filename"
    class="text-sm border-t-[1px] border-r-[1px] border-l-[1px]
           border-[var(--codeborder)] py-2 px-3 rounded-t-md"
  >
    {{ $props.filename }}
  </div>
  <div class="relative">
    <pre
      :class="[
        $props.class,
        $props.filename ? 'rounded-bottom' : 'rounded-all',
        'custom-code-block',
        $props.filename && 'mt-0'
      ]"
      ref="preEl"
    ><slot /></pre>
    <button
      class="copy-btn"
      @click="copyCode"
      :aria-label="copied ? 'Copied!' : 'Copy code'"
    >
      <Icon v-if="!copied" name="mdi:content-copy" size="1em" />
      <Icon v-else name="mdi:check" size="1em" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const copied = ref(false);
const preEl = ref<HTMLElement | null>(null);

function copyCode() {
  if (!preEl.value) return;
  // Get the text content of the <pre> element
  const code = preEl.value.innerText;
  navigator.clipboard.writeText(code).then(() => {
    copied.value = true;
    setTimeout(() => (copied.value = false), 1200);
  });
}

defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});
</script>

<style>
pre code .line {
  display: block;
}

.custom-code-block {
  background: var(--codebg);
  color: #1e293b;
  padding: 1rem;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 0.95em;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 2px 0 #0001;
  border: 1px solid var(--codeborder);
}

.rounded-all {
  border-radius: 0.5rem;
}

.rounded-bottom {
  border-radius: 0 0 0.5rem 0.5rem;
}

.relative {
  position: relative;
}

.copy-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: 1px solid var(--codeborder);
  border-radius: 0.25rem;
  padding: 0.3rem 0.5rem 0.1rem 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  z-index: 2;
}

.copy-btn:hover {
  background-color: var(--body);
}
</style>