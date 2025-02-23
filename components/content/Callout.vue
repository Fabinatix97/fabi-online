<script setup lang="ts">
defineProps<{
    icon: string;
    title: string;
}>()
defineSlots<{
    default?: () => VNode[]
}>()
</script>
<template>
    <div class="border-l-8 border-[var(--secondary)] bg-[var(--secondarybg)] rounded-r-2xl p-4 items-center mb-4">
        <div class="flex gap-2 text-[var(--secondary)]">
            <Icon :name="icon" size="1.5em" />
            <p class="my-0 font-bold">{{title}}</p>
        </div>
        <div>
            <slot />
        </div>
    </div>
</template>