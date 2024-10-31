<script setup lang="ts">
const { x, y } = useMouse()
const el = ref<HTMLElement | null>(null)
</script>

<template>
    <div
        class="p-[2px] bg-gray-900 relative card"
        :style="{
            '--x': `${x - (el?.offsetLeft ?? 0)}px`,
            '--y': `${y - (el?.offsetTop ?? 0)}px`
        }"
        ref="el"
    >
        <div class="bg-gray-950 relative p-4">
            <p class="text-xl font-bold text-white">
                Hello World
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur.
            </p>
        </div>
    </div>
</template>

<style scoped>
.card::before {
    content: '';
    position: absolute;
    inset: 0px;
    background: radial-gradient(
        200px circle at var(--x) var(--y),
        #15ca82,
        transparent
    );
}
</style>