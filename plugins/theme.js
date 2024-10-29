import { ref, watch } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
    const theme = ref(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

    function applyTheme() {
        console.log(`Applying theme: ${theme.value}`);
        document.documentElement.setAttribute('data-theme', theme.value);
    }

    function toggleTheme() {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', theme.value);
    }

    // Theme anwenden, wenn Plugin geladen wird
    applyTheme();

    watch(theme, applyTheme);

    return {
        provide: {
            theme,
            toggleTheme,
        }
    };
});