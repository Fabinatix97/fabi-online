<template>
    <div class="flex items-center" role="search">
        <div class="flex gap-1 bg-[var(--main)] text-[var(--info)] p-2 rounded-full border-[1px] border-[var(--border)]">
            <div class="flex items-center">
                <Icon name="mdi:search" size="1.5em" />
            </div>
            <input 
                type="text"
                id="search"
                name="search"
                v-model="query"
                :placeholder="placeholder"
                class="bg-transparent w-60 outline-none text-[var(--info)]"
                @input="emitSearch"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const query = ref("");
const emit = defineEmits(["search"]);
const props = defineProps({
    placeholder: {
        type: String,
        default: "Suchen..."
    }
});

function emitSearch() {
    emit("search", query.value);
}
</script>