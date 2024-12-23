<template>
    <div class="flex justify-center mx-5 mb-10">
        <div class="w-[800px]">
            <SearchBar placeholder="Artikel suchen" @search="updateSearchQuery" />
        </div>
    </div>
    <div class="item error" v-if="input && !filteredPosts.length">
        <p>Keine Artikel gefunden</p>
    </div>
    <div class="gallery">
        <figure v-for="post in filteredPosts" :key="post.slug">
            <NuxtLink :to="post._path">
                <img
                    :src="`${post.coverImage}`"
                    alt="Blog Post Cover Image"
                />
                <figcaption>
                    <div class="justify-self-start py-1 px-3 border-2 border-primary text-primary text-sm rounded-2xl">
                        {{ formatDate(post.date) }}
                    </div>
                    <h4>{{ post.title }}</h4>
                    <p>{{ extractContent(post.body, 30) }}...</p>
                    
                </figcaption>
            </NuxtLink>
        </figure>
    </div>
</template>

<script setup lang="js">
import { ref, computed } from "vue";

const input = ref("");
const props = defineProps({
    posts: Array
});

const filteredPosts = computed(() => {
  const searchTerm = input.value.toLowerCase();
  return props.posts
    .filter(post => post.status === "published")
    .filter(post => {
        const bodyText = extractContent(post.body).toLowerCase();
        return (
            post.title.toLowerCase().includes(searchTerm) ||
            bodyText.includes(searchTerm)
        );
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
});

function updateSearchQuery(query) {
  input.value = query;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = new Intl.DateTimeFormat("de-DE", { day: "numeric" }).format(date);
    const month = new Intl.DateTimeFormat("de-DE", { month: "short" }).format(date);
    const year = new Intl.DateTimeFormat("de-DE", { year: "numeric" }).format(date);
    return `${month} ${day}, ${year}`;
}

function extractContent(body, wordLimit) {
    const collectValues = (node) => {
        const values = [];
        if (node.value) {
            values.push(node.value);
        }
        if (node.children) {
            for (const child of node.children) {
                values.push(...collectValues(child));
            }
        }
        return values;
    };
    const words = collectValues(body).join(" ").trim().split(/\s+/);
    return words.slice(0, wordLimit).join(" ");
}
</script>

<style lang="scss" scoped>
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-auto-rows: 24rem;
    grid-auto-flow: dense;
    gap: 0.75rem;
}

.gallery figure {
    border-radius: 1rem;
    container: figure / inline-size;
    overflow: hidden;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    background-color: var(--main);
    position: relative;
}

.gallery img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
    grid-area: 1 / 1 / -1 / -1;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease, filter 0.3s ease;
}

.gallery figure:hover img {
    transform: scale(1.125);
    opacity: 0.4;
    filter: blur(5px); 
}

.gallery figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 3em 1em 1em;
    background: linear-gradient(transparent 25%, var(--mainrgb));
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}
.gallery figure:hover figcaption {
    opacity: 1;
    visibility: visible;
}

@media (min-width: 1270px) {
    .gallery figure:nth-child(1) {
        grid-area: span 2 / span 2;
    }

    /*.gallery figure:nth-child(4n + 1) {
        grid-row: span 2;
    }*/

    .gallery figure:nth-child(4n + 2) {
        grid-column: span 2;
    }
}
</style>