<template>
	<div class="flex justify-center mx-5 mb-10">
        <div class="w-[800px]">
            <SearchBar placeholder="Artikel suchen" @search="updateSearchQuery" />
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
                    <img
                        :src="`${post.coverImage}`"
                        alt="Blog Post Cover Image"
                        class="w-full h-48 object-cover rounded-t-2xl hover:opacity-80 relative"
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
	&:hover {
		.card {
			background: radial-gradient(
				100rem circle at var(--xPos) var(--yPos),
				rgba(var(--spotlight), 0.4),
				transparent 15%
			);
		}
	}
	.card {
        width: 100%;
		height: 100%;
		background: radial-gradient(
			150rem circle at 0 0,
			rgba(var(--spotlight), 0),
			transparent 0%
		);
		border-radius: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		transition: all 0.15s;
		&:hover {
			transform: scale(0.97);
			&::before {
				opacity: 1;
			}
		}
		&::before {
			content: "";
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			border-radius: inherit;
			background: radial-gradient(
				60rem circle at var(--xPos) var(--yPos),
				rgba(var(--spotlight), 0.1),
				transparent 35%
			);
			opacity: 0;
			transition: all 0.15s ease-in-out;
		}
		.card-content {
			border-radius: inherit;
			transition: all 0.25s;
			height: calc(100% - 0.2rem);
			width: calc(100% - 0.2rem);
		}
	}
}
</style>