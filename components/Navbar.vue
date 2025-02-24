<template>
  <nav>
    <NavbarRegular v-if="isDesktop" />
    <NavbarMobile v-else />
  </nav>
</template>

<script>
import NavbarRegular from './NavbarRegular.vue'
import NavbarMobile from './NavbarMobile.vue'

export default {
  components: {
    NavbarRegular,
    NavbarMobile,
  },
  data() {
    return {
      isDesktop: false,
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.isDesktop = window.innerWidth >= 640
      window.addEventListener('resize', this.handleResize)
    }
  },
  beforeUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      if (typeof window !== 'undefined') {
        this.isDesktop = window.innerWidth >= 640
      }
    },
  },
}
</script>
