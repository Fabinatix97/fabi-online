<template>
    <div class="cards grid grid-cols-1 sm:grid-cols-2 gap-2">
        <NuxtLink
            :to="post._path"
            v-for="post in props.posts"
            :key="post.slug"
            class="card"
        >
            <div class="card-content bg-card flex flex-col h-full">
                <div>
                    <img
                        :src="`/img/blog/${post.coverImage}`"
                        alt="Blog Post Cover Image"
                        class="w-full h-48 object-cover rounded-t-lg hover:opacity-80"
                    />
                </div>
                <div class="p-6 flex-grow">
                    <h2 class="text-xl font-bold mb-2 hyphens-auto">{{ post.title }}</h2>
                    <p class="text-cardtext mb-4 hyphens-auto">{{ getPostPreview(post.body, 40) }}...</p>
                </div>
                <div class="p-6 mt-auto flex justify-end">
                    <div
                        class="bg-button hover:bg-buttonhover text-white py-2 px-4 relative rounded"
                    >
                        Read More
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="js">
import { onMounted, defineProps } from "vue";

const props = defineProps({
  posts: Array
});

function getPostPreview(body, wordLimit) {
  let result = "";

  function getWords(text) {
    return text.trim().split(/\s+/);
  }

  function collectValues(body) {
    if (body.value) {
      result += body.value + " ";
    }
    if (body.children) {
      for (const child of body.children) {
        collectValues(child);
      }
    }
  }

  collectValues(body);
  const words = getWords(result);
  return words.slice(0, wordLimit).join(" ");
}

onMounted(() => {
	const cards = document.querySelectorAll(".card");
	const wrapper = document.querySelector(".cards");

	wrapper.addEventListener("mousemove", function ($event) {
		cards.forEach((card) => {
			const rect = card.getBoundingClientRect();
			const x = $event.clientX - rect.left;
			const y = $event.clientY - rect.top;

			card.style.setProperty("--xPos", `${x}px`);
			card.style.setProperty("--yPos", `${y}px`);
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
		border-radius: 0.5rem;
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
			height: calc(100% - 0.1rem);
			width: calc(100% - 0.1rem);
		}
	}
}
</style>