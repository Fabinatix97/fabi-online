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
            :to="post._path"
            v-for="post in filteredPosts"
            :key="post.slug"
            class="card"
        >
            <div class="card-content bg-main flex flex-col h-full">
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
					<div class="justify-self-start py-1 px-3 border-2 border-primary text-primary text-sm rounded-2xl">
						{{ formatDate(post.date) }}
					</div>
					<h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
                    <p class="text-base mb-4">{{ extractContent(post.body, 40) }}...</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="js">
import { ref, computed, onMounted } from "vue";

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

onMounted(() => {
	const cards = document.querySelectorAll(".card");
	const wrapper = document.querySelector(".cards");
	wrapper.addEventListener("mousemove", (event) => {
		cards.forEach((card) => {
		const rect = card.getBoundingClientRect();
		card.style.setProperty("--xPos", `${event.clientX - rect.left}px`);
		card.style.setProperty("--yPos", `${event.clientY - rect.top}px`);
		});
	});
});
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