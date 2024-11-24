<template>
    <Navbar />
    <NuxtLayout>
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