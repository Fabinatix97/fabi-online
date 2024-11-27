<template>
    <div class="wide">
        <nuxt-page />
    </div>
</template>

<style lang="scss" scoped>
.wide {
    padding: 0 40px 40px 40px;
    width: 100%;
    margin: auto;
}

@media (max-width: 640px) {
    .wide {
        padding: 0 20px 20px 20px;
    }
}
</style>