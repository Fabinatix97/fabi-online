<template>
	<div class="flex justify-center mx-5 mb-10">
        <div class="w-[800px]">
            <SearchBar
				@search="updateSearchQuery"
				placeholder="Artikel suchen"
				aria-label="Artikel suchen"
			/>
        </div>
    </div>
    <div class="item error" v-if="input && !filteredPosts.length">
        <p>Keine Artikel gefunden</p>
    </div>
    <div class="cards grid grid-cols-1 sm:grid-cols-2 gap-4">
        <NuxtLink
            :to="post.path"
            v-for="post in filteredPosts"
            :key="post.id"
            class="card"
        >
            <div class="card-content bg-[var(--main)] flex flex-col h-full">
                <div>
                    <NuxtImg
                        :src="`${post.coverImage}`"
						width="500px"
						format="webp"
                        alt="Blog Post Cover Image"
                        class="w-full h-48 object-cover rounded-t-2xl relative"
                    />
                </div>
                <div class="p-6 flex-grow">
					<div class="justify-self-start py-1 px-3 border-2 border-[var(--primary)] text-[var(--primary)] text-sm rounded-2xl">
						{{ formatDate(post.date) }}
					</div>
					<h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
                    <p class="text-base mb-4">{{ extractContent(post.body, 40) }}</p>
                </div>
            </div>
        </NuxtLink>
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
    return props.posts.filter(post => {
        const bodyText = extractContent(post.body).toLowerCase();
        return (
            post.title.toLowerCase().includes(searchTerm) ||
            bodyText.includes(searchTerm)
        );
    });
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
    if (!body || !Array.isArray(body.value)) {
        return "";
    }

    let words = [];

    const extractText = (node) => {
        if (Array.isArray(node)) {
            node.forEach((child, index) => {
                if (index === 0 && typeof child === "string") return;
                extractText(child);
            });
        } else if (typeof node === "string") {
            words.push(...node.split(/\s+/));
        }
    };

    body.value.forEach(block => extractText(block));

    return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "..." : "");
}
</script>

<style lang="scss" scoped>
.cards {
	justify-content: center;
	align-items: center;
	.card {
        width: 100%;
		height: 100%;
		border-radius: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		.card-content {
			border-radius: inherit;
		}
	}
}
</style>