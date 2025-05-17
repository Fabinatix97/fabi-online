<template>
  <div class="flex flex-col justify-center">
    <div>
      <h1>Hey! 👋🏻</h1>
      <h1>
        Ich bin
        <span class="typing text-[var(--primary)]">{{ currentText }}</span>
      </h1>
    </div>
    <div class="flex">
      <p class="text-xl/9">
        Auf dieser Seite erwarten dich Book-Reviews, Tutorials, aber vor allem Essays. Ja, richtig
        gelesen: Essays – inspiriert durch persönliche Erfahrungen, Bücher oder aktuelle Ereignisse.
        Dies soll ein Ort sein, an dem ich meine Gedanken zu verschiedensten Themen mit dir teilen
        möchte.
      </p>
    </div>
    <div class="mt-8 flex flex-wrap gap-2">
      <router-link
        to="/about"
        class="btn border-[1px] border-[var(--primary)] bg-[var(--primary)] text-[var(--main)] hover:border-[var(--primaryhover)] hover:bg-[var(--primaryhover)]"
      >
        Über mich
      </router-link>
      <router-link
        to="/blog"
        class="btn border-[1px] border-[var(--border)] bg-[var(--main)] text-[var(--heading)] hover:text-[var(--primary)]"
      >
        Mein Blog
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentText = ref('')
const strings = ref(['Fabian.', 'Pilot.', 'DevOps Engineer.'])
const currentIndex = ref(0)
const typingSpeed = 150
const deletingSpeed = 75
const pauseDurationEnd = 2000
const pauseDurationStart = 500
const isDeleting = ref(false)

const typingProcess = () => {
  const currentString = strings.value[currentIndex.value]

  if (isDeleting.value) {
    currentText.value = currentString.slice(0, currentText.value.length - 1)

    if (currentText.value === '') {
      isDeleting.value = false
      currentIndex.value = (currentIndex.value + 1) % strings.value.length
      setTimeout(() => {
        typingProcess()
      }, pauseDurationStart)
    } else {
      setTimeout(typingProcess, deletingSpeed)
    }
  } else {
    currentText.value = currentString.slice(0, currentText.value.length + 1)

    if (currentText.value === currentString) {
      setTimeout(() => {
        isDeleting.value = true
        typingProcess()
      }, pauseDurationEnd)
    } else {
      setTimeout(typingProcess, typingSpeed)
    }
  }
}

onMounted(() => {
  typingProcess()
})

definePageMeta({
  layout: 'nofooter',
})

useSeoMeta({
  title: 'Home',
  description:
    'Auf dieser Seite erwarten dich Book-Reviews, Tutorials, aber vor allem Essays. Ja, richtig gelesen: Essays – inspiriert durch persönliche Erfahrungen, Bücher oder aktuelle Ereignisse. Dies soll ein Ort sein, an dem ich meine Gedanken zu verschiedensten Themen mit dir teilen möchte.',
  ogImage: '/img/about/fabionline.png',
})
</script>

<style lang="scss" scoped>
.typing {
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid var(--primary);
  padding-right: 5px;
  animation: blink-cursor 1s step-start infinite;
}
@keyframes blink-cursor {
  50% {
    border-color: transparent;
  }
}
.btn {
  border-radius: 1rem;
  padding: 10px 20px;
  font-weight: 600;
}
</style>
