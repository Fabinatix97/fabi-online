<template>
  <nav>
    <NavbarRegular v-if="isDesktop" />
    <NavbarMobile v-else />
  </nav>
</template>

<script setup>
import { useMediaQuery } from '#imports'

const isDesktop = useMediaQuery('(min-width: 860px)')
</script>
