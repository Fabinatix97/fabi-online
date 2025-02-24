<template>
  <div class="fixed bottom-0 left-0 z-10 w-screen p-4 sm:pr-8">
    <button v-if="isVisible" class="scroll-to-top" aria-label="Scroll to top" @click="scrollToTop">
      <Icon name="line-md:chevron-up" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 500
  const button = document.querySelector('.scroll-to-top')
  if (button) {
    if (isVisible.value) {
      button.classList.add('show')
    } else {
      button.classList.remove('show')
    }
  }
}

const scrollToTop = () => {
  const button = document.querySelector('.scroll-to-top')
  if (button) {
    button.classList.add('fade-out')

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 300)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top {
  display: flex;
  justify-self: end;
  padding: 10px;
  background-color: var(--info);
  color: white;
  border-radius: 1rem;
  font-size: 2rem;
  opacity: 0;
  cursor: pointer;
  transform: translateY(20px) scale(1);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}
.scroll-to-top.show {
  opacity: 0.7;
  transform: translateY(0) scale(1);
}
.scroll-to-top.fade-out {
  opacity: 0;
  transform: translateY(0) scale(0);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}
.scroll-to-top:hover {
  background-color: var(--primaryhover);
  opacity: 1;
}
</style>
