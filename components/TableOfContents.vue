<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const { path } = useRoute();
const activeId = ref<string | null>(null);

interface TocItem {
  text: string;
  depth: number;
  id: string;
}

const toc = ref<TocItem[]>([]);
let observer: IntersectionObserver | null = null;

function createObserver() {
    const options = {
        root: null,
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0.5,
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeId.value = entry.target.id;
            }
        });
    }, options);

    toc.value.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
            observer?.observe(section);
        }
    });
}

onMounted(async () => {
    try {
        const content = await queryContent().where({ _path: path }).findOne();
        if (content?.body?.toc) {
            let links = content.body.toc.links;
            if (links.length > 0 && links[links.length - 1].text === "Footnotes") {
                links = links.slice(0, -1);
            }
            toc.value = links.map((item: any) => ({
                text: item.text,
                depth: item.depth,
                id: item.id,
            }));
        }
    } catch (error) {
        console.error("Error fetching content:", error);
    }
    createObserver();
});

onUnmounted(() => {
    observer?.disconnect();
});

function scrollToSection(id: string, offset = 120) {
    const section = document.getElementById(id);
    if (section) {
        const top = section.offsetTop - offset;
        window.scrollTo({
            top,
            behavior: "smooth",
        });
    }
}
</script>

<template>
    <div class="toc">
        <h4>Table of Contents</h4>
        <ul>
            <li
                v-for="(item, index) in toc"
                :key="index"
                :class="{ active: item.id === activeId }"
            >
                <a
                    href="javascript:void(0)"
                    @click="scrollToSection(item.id)"
                >
                    {{ item.text }}
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.toc {
    position: sticky;
    top: 10rem;
    right: 0;
    margin-left: 4rem;
    width: 15rem;

    li.active {
        font-weight: bold;
        color: var(--primary);
    }

    li:hover {
        color: var(--primaryhover);
    }
}
</style>