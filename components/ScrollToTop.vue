<template>
    <div>
        <button v-if="isVisible" class="scroll-to-top" @click="scrollToTop" aria-label="Scroll to top">
            <Icon name="line-md:arrow-up" />
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
    isVisible.value = window.scrollY > 500;
    const button = document.querySelector('.scroll-to-top');
    if (button) {
        if (isVisible.value) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    }
};

const scrollToTop = () => {
    const button = document.querySelector('.scroll-to-top');
    if (button) {
        button.classList.add('fade-out');

        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 300);
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    right: 20px;
    background-color: var(--button);
    color: white;
    border: none;
    border-radius: 50%;
    padding: 10px;
    font-size: 30px;
    cursor: pointer;
    opacity: 0;
    transform: translateY(20px) scale(1);
    transition: opacity 0.5s ease, transform 0.5s ease;
    z-index: 1000;
}

.scroll-to-top.show {
    opacity: 0.7;
    transform: translateY(0) scale(1);
}

.scroll-to-top.fade-out {
    opacity: 0;
    transform: translateY(0) scale(0);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.scroll-to-top:hover {
    background-color: var(--buttonhover);
    opacity: 1;
}
</style>

