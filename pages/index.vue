<template>
    <div class="flex flex-col justify-center">
        <div>
            <client-only>
                <svg v-if="theme === 'dark'" width="400" height="300" viewBox="0 0 10 11" class="absolute -z-10 blur-[120px]">
                    <circle cx="2" cy="2" r="5" fill="var(--primary)" />
                </svg>
            </client-only>
            <h1>Hey! 👋🏻</h1>
            <h1>Ich bin <span class="typing text-primary">{{ currentText }}</span></h1>
        </div>
        <div class="flex">
            <p class="text-xl">Auf dieser Seite erwarten dich Book-Reviews, Tutorials, aber vor allem Essays. Ja, richtig gelesen: Essays – inspiriert durch persönliche Erfahrungen, Bücher oder aktuelle Ereignisse. Dies soll ein Ort sein, an dem ich meine Gedanken zu verschiedensten Themen mit dir teilen möchte.</p>
        </div>
        <div class="flex flex-wrap gap-2">
            <router-link to="/about">
                <button class="btn text-body bg-primary border-[1px] border-primary hover:bg-primaryhover hover:border-primaryhover" type="button">Über mich</button>
            </router-link>
            <router-link to="/blog">
                <button class="btn text-heading bg-main border-[1px] border-border hover:text-primary" type="button">Mein Blog</button>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const { $theme } = useNuxtApp();
const theme = $theme;

const currentText = ref('');
const strings = ref(["Fabian.", "Pilot.", "DevOps Engineer."]);
const currentIndex = ref(0);
const typingSpeed = 150;
const deletingSpeed = 75;
const pauseDurationEnd = 2000;
const pauseDurationStart = 500;
const isDeleting = ref(false);

const typingProcess = () => {
    const currentString = strings.value[currentIndex.value];

    if (isDeleting.value) {
    currentText.value = currentString.slice(0, currentText.value.length - 1);

    if (currentText.value === "") {
        isDeleting.value = false;
        currentIndex.value = (currentIndex.value + 1) % strings.value.length;
        setTimeout(() => {
        typingProcess();
        }, pauseDurationStart);
    } else {
        setTimeout(typingProcess, deletingSpeed);
    }
    } else {
    currentText.value = currentString.slice(0, currentText.value.length + 1);

    if (currentText.value === currentString) {
        setTimeout(() => {
        isDeleting.value = true;
        typingProcess();
        }, pauseDurationEnd);
    } else {
        setTimeout(typingProcess, typingSpeed);
    }
    }
};

onMounted(() => {
    typingProcess();
});
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
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: 600;
}
</style>