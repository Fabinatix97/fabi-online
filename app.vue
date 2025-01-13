<template>
    <Navbar />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <CookieBanner />
    <ScrollToTop />
</template>

<script>
export default {
    mounted() {
        document.documentElement.lang = 'de';
    }
}
</script>