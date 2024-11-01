<template>
    <Navbar />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
export default {
    mounted() {
        document.documentElement.lang = 'de';
    }
}
</script>