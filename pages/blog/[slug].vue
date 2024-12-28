<template>
    <div class="flex justify-center w-full">
        <div class="flex-none w-[calc(50%-400px)] hidden xl:block">
        </div>
        <main class="min-w-0 max-w-[800px] px-4 pt-40">
            <client-only>
                <svg
                    v-if="theme === 'dark'"
                    width="400"
                    height="300"
                    viewBox="0 0 10 11"
                    class="absolute -z-10 blur-[120px]"
                    aria-hidden="true"
                >
                    <circle cx="2" cy="2" r="5" fill="var(--primary)" />
                </svg>
            </client-only>
            <div class="flex text-info mb-8">
                <NuxtLink to="/blog">
                    <div class="backbutton flex bg-main pl-4 pr-6 pt-1 gap-2 border-border border-[1px] rounded-full hover:text-primary">
                        <div class="icon-container">
                            <Icon name="mdi:arrow-back" size="1.4em" />
                        </div>
                        <span>Zurück zur Übersicht</span>
                    </div>
                </NuxtLink>
            </div>
            <div class="text-primary text-xl font-bold">
                {{ formatDate(data.date) }}
            </div>
            <h1 class="mt-4">{{ data.title }}</h1>
            <div class="flex items-center gap-2 text-info">
                <div class="flex">
                    <Icon name="mdi:clock-outline" size="1.2em"/>
                </div>
                <p class="m-0 p-0 flex">Lesezeit: {{ calculateReadingTime(getPostContent(data.body)) }}</p>
            </div>
            <img
                :src="`${data.coverImage}`"
                alt="Blog Post Cover Image"
                class="my-8 w-[calc(100%_+_60px)] relative left-[-30px] max-w-none rounded-2xl"
            />
            <ContentRenderer :value="data" class="blog-content mb-8" />
            <NuxtLink v-for="tag in data.tags" :key="tag" :href="`/blog/tags/${tag}`"
                class="text-sm font-semibold inline-block py-2 px-4 rounded-2xl text-main bg-primary uppercase last:mr-0 my-2 mr-4">
                <div class="flex">
                    <Icon name="mdi:tag" size="1.2rem" class="text-main mr-2" />
                    {{ tag }}
                </div>
            </NuxtLink>
        </main>
        <div class="flex-none w-[calc(50%-400px)] hidden xl:block">
            <div class="h-screen"></div>
            <TableOfContents />
        </div>
    </div>
    <Footer class="mb-10"/>
</template>

<script setup>
import { useNuxtApp } from '#app';

const { $theme } = useNuxtApp();
const theme = $theme;

const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent()
        .where({ _path: path })
        .findOne()
});

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = new Intl.DateTimeFormat("de-DE", { day: "numeric" }).format(date);
    const month = new Intl.DateTimeFormat("de-DE", { month: "short" }).format(date);
    const year = new Intl.DateTimeFormat("de-DE", { year: "numeric" }).format(date);
    
    return `${month} ${day}, ${year}`;
}

function getPostContent(body) {
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
    return words.join(" ");
}

function calculateReadingTime(content) {
    const text = content
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return readingTime === 1 ? `${readingTime} Minute` : `${readingTime} Minuten`;
}

definePageMeta({
    layout: false,
})

onMounted(() => {
    if (data.value) {
        useSeoMeta({
            title: data.value.title,
            description: `${getPostContent(data.value.body).slice(0, 250)}...`,
            ogImage: data.value.coverImage,
        });
    }
});
</script>

<style lang="scss">

.icon-container {
    display: inline-block;
    transition: transform 0.3s ease;
}

.backbutton:hover .icon-container {
    animation: bounceLeft 0.5s ease;
}

@keyframes bounceLeft {
    0%, 100% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-5px);
    }
}

.blog-content {
    img, video {
        border-radius: 1rem;
    }
    ol {
        margin-left: 3rem;
        list-style-type: decimal;
    }
    ul {
        margin-left: 3rem;
        list-style-type: disc;
    }
    pre {
        background-color: var(--codebg);
        color: var(--codetext);
        border-radius: 1rem;
        padding: 20px;
        font-family: 'Roboto Mono';
    }
    a {
        text-decoration: underline;

        &:hover {
            text-decoration-thickness: 2px;
            color: var(--primaryhover);
        }
    }
    .button {
        background-color: var(--primary);
        text-decoration: none;
        color: white;

        a {
            color: white;
            text-decoration: none;
        }

        &:hover {
            background-color: var(--primaryhover);
            color: white;
        }
    }
    h1, h2, h3, h4, h5, h6 {
        a {
            text-decoration: none;
        }
    }
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.8rem;
    }
    th, td {
        padding: 8px 12px;
        border: 1px solid var(--tableborder);
        text-align: left;
    }
    thead th {
        background-color: var(--tablehead);
        font-weight: bold;
    }
    tbody tr:nth-child(even) {
        background-color: var(--tablerow);
    }
    figcaption p {
        font-weight: 00;
        font-size: 0.8rem;
        color: var(--info);
        margin-top: 10px;
        margin-bottom: 40px;
    }
    blockquote {
        background-color: var(--codebg);
        border-left: 5px solid var(--primary);
        padding: 10px 15px;
        margin: 20px 0;
        color: var(--text);
    }
    hr {
        margin-top: 20px;
    }
}
</style>