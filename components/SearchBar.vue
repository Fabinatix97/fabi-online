<template>
  <div class="flex items-center" role="search">
    <div
      class="flex gap-1 rounded-full border-[1px] border-[var(--border)] bg-[var(--main)] p-2 text-[var(--info)]"
    >
      <div class="flex items-center">
        <Icon name="mdi:search" size="1.5em" />
      </div>
      <input
        id="search"
        v-model="query"
        type="text"
        name="search"
        :placeholder="placeholder"
        class="w-60 bg-transparent text-[var(--info)] outline-none"
        @input="emitSearch"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const query = ref('')
const emit = defineEmits(['search'])
const { placeholder } = defineProps({
  placeholder: {
    type: String,
    default: 'Suchen...',
  },
})

function emitSearch() {
  emit('search', query.value)
}
</script>
