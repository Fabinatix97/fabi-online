<script setup>
// TODO: Update TOC logic to support HeadingWithIcon components
// Issue URL: https://github.com/Fabinatix97/fabi-online/issues/6
defineProps({
  icon: {
    type: String,
    required: true
  },
  level: {
    type: [String, Number],
    default: 2,
    validator: v => [1,2,3,4,5,6].includes(+v)
  }
})
</script>

<template>
  <component :is="`h${level}`" class="flex items-center gap-2">
    <Icon :name="icon" />
    <slot mdc-unwrap="p" />
  </component>
</template>
