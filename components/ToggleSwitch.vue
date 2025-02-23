<template>
    <div 
        class="toggle-container" 
        @click="toggle" 
        role="switch" 
        :aria-checked="isDevOps" 
        :aria-labelledby="isDevOps ? 'devops-label' : 'pilot-label'"
    >
        <span :class="{ 'active-text': !isDevOps }" class="text-[var(--info)]" id="pilot-label">Pilot</span>
        <div class="toggle-switch" :class="{ 'active': isDevOps }">
            <div class="toggle-circle">
                <Icon v-if="isDevOps" name="mdi:code" class="text-[var(--primary)] absolute left-[5px] top-[4px]" size="1.4em"/>
                <Icon v-else name="ri:plane-fill" class="text-[var(--primary)] absolute left-[4px] top-[4px]" size="1.4em"/>
            </div>
        </div>
        <span :class="{ 'active-text': isDevOps }" class="text-[var(--info)]" id="devops-label">DevOps</span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

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
    border-radius: 2rem;
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
        border-radius: 2rem;
        position: absolute;
        top: 4px;
        left: 4px;
        transition: transform 0.3s;
        animation: bounce 1s ease-in-out 1;
    }

    @keyframes bounce {
        0% {
            transform: translateX(50px);
        }
        25% {
            transform: translateX(25px);
        }
        50% {
            transform: translateX(50px);
        }
        75% {
            transform: translateX(25px);
        }
        100% {
            transform: translateX(50px);
        }
    }
}

span {
    font-size: 1rem;
    font-weight: bold;
    transition: color 0.3s;

    &.active-text {
        color: var(--heading);
    }
}
</style>