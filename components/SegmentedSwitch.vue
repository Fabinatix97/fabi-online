<template>
    <div class="flex">
        <div class="flex items-center h-10 bg-main border-[1px] border-border rounded-full">
            <div class="flex items-center">
                <div 
                    v-for="(name, index) in segments" 
                    :key="index" 
                    @click="setSegment(index)" 
                    :class="['segment', { active: segment === index }]"
                >
                    {{ name }}
                </div>
            </div>  
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    segments: {
        type: Array,
        required: true
    }
});

const segment = ref(0);

const setSegment = (nr) => {
    segment.value = nr;
    console.log(segment.value);
}
</script>

<style lang="scss" scoped>
.segment {
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    height: 38px;
    align-items: center;
    border-radius: 19px;
    color: var(--heading);
    font-weight: 500;
    cursor: pointer;
}

.active {
    background-color: var(--primary);
    color: var(--main);
}
</style>