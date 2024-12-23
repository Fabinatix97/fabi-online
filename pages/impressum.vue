<template>
    <ContentDoc class="impressum"/>
</template>

<script setup>
useSeoMeta({
    title: 'Impressum',
    description: 'Impressum und Datenschutzerklärung von Fabian Weiß',
    ogImage: '/img/about/fabionline.png',
});
</script>

<style lang="scss">
.impressum {
    ul {
        margin-left: 3rem;
        list-style-type: disc;
    }
    pre {
        background-color: var(--codebg);
        color: var(--codetext);
        border-radius: 1rem;
        padding: 20px;
        font-family: 'Roboto Mono';
    }
}
</style>