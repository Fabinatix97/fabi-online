<template>
    <div class="toggle-container" @click="toggle">
        <span :class="{ 'active-text': !isDevOps }" class="text-info">Pilot</span>
        <div class="toggle-switch" :class="{ 'active': isDevOps }">
            <div class="toggle-circle">
                <Icon v-if="isDevOps" name="mdi:code" class="text-primary absolute left-[5px] top-[4px]" size="1.4em"/>
                <Icon v-else name="ri:plane-fill" class="text-primary absolute left-[4px] top-[4px]" size="1.4em"/>
            </div>
        </div>
        <span :class="{ 'active-text': isDevOps }" class="text-info">DevOps</span>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const isDevOps = ref(true);
const emit = defineEmits(['toggle']);

const toggle = () => {
    isDevOps.value = !isDevOps.value;
    emit('toggle', isDevOps.value);
};
</script>

<style lang="scss" scoped>
.toggle-container {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.toggle-switch {
    width: 90px;
    height: 40px;
    background-color: var(--primary);
    border-radius: 20px;
    position: relative;
    margin: 0 10px;

    &.active {
        .toggle-circle {
            transform: translateX(50px);
        }
    }

    .toggle-circle {
        color: var(--primary);
        width: 32px;
        height: 32px;
        background-color: var(--main);
        border-radius: 50%;
        position: absolute;
        top: 4px;
        left: 4px;
        transition: transform 0.3s;
    }
}

span {
    font-size: 16px;
    font-weight: bold;
    transition: color 0.3s;

    &.active-text {
        color: var(--heading);
    }
}
</style>