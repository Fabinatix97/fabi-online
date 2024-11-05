<template>
    <Navbar />
    <NuxtLayout class="mt-20">
        <NuxtPage />
    </NuxtLayout>
    <ScrollToTop />
</template>

<script>
export default {
    mounted() {
        document.documentElement.lang = 'de';
    }
}
</script>