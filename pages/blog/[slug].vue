<template>
    <main>
        <div class="justify-self-center py-1 px-3 border-2 border-button text-button text-sm rounded-full">
            {{ formatDate(data.date) }}
        </div>
        <h1 class="text-center">{{ data.title }}</h1>
        <p class="text-center text-info">Lesedauer: {{ calculateReadingTime(getPostContent(data.body)) }}</p>
        <img
            :src="`${data.coverImage}`"
            alt="Blog Post Cover Image"
            class="my-8 w-[calc(100%_+_60px)] relative left-[-30px] max-w-none"
        />
        <ContentRenderer :value="data" class="blog-content my-10 mx-auto max-w-7xl text-lg" />
        <div class="">
            <a v-for="tag in data.tags" :key="tag" :href="`/blog/tags/${tag}`"
                class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-white bg-button uppercase last:mr-0 my-2 mr-4">
                <div class="flex">
                    <Icon name="mdi:tag" size="1.2rem" class="text-gray-100 mr-2" />
                    {{ tag }}
                </div>
            </a>
        </div>
    </main>
</template>

<script setup>

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
</script>

<style lang="scss">
.blog-content {
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
        border-radius: 15px;
        padding: 20px;
        font-size: medium;
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
        font-size: 80%;
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
        font-size: 0.8em;
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