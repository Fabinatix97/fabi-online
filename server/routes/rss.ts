import { defineEventHandler, getQuery, send } from 'h3';
import { promises as fs } from 'fs';
import { Feed } from 'feed';
import path from 'path';
import matter from 'gray-matter';

export default defineEventHandler(async (event) => {
    const contentDir = path.resolve('content/blog');
    const files = await fs.readdir(contentDir);
    const posts: Array<{ title: string; date: string; img: string; body: string; slug: string }> = [];

    for (const file of files) {
        const filePath = path.join(contentDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const { data: attributes, content: body } = matter(content);
        if (attributes.status === 'published') {
            posts.push({
                title: attributes.title,
                date: attributes.date,
                img: attributes.coverImage,
                body,
                slug: file.replace(/\.md$/, ''),
            });
        }
    }

    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const feed = new Feed({
        title: 'Fabian Weiß',
        description: 'Ein Ort sein, an dem ich meine Gedanken zu verschiedensten Themen mit dir teile.',
        id: 'https://www.fabi-online.de/rss',
        link: 'https://www.fabi-online.de/rss',
        language: 'de',
        image: 'https://www.fabi-online.de/favicon/favicon-32x32.png',
        favicon: 'https://www.fabi-online.de/favicon/favicon.ico',
        copyright: 'All rights reserved 2024, Fabian Weiß',
        updated: new Date(),
        author: {
            name: 'Fabian Weiß',
            email: 'fabian@fabi-online.de',
            link: 'https://www.fabi-online.de/',
        },
        feedLinks: {
            atom: 'https://www.fabi-online.de/rss',
            rss: 'https://www.fabi-online.de/rss',
            json: 'https://www.fabi-online.de/rss',
        },
    });

    for (const post of posts) {
        feed.addItem({
            title: post.title,
            date: new Date(post.date),
            id: `https://www.fabi-online.de/blog/${post.slug}`,
            link: `https://www.fabi-online.de/blog/${post.slug}`,
            description: `${post.body.slice(0, 250)}...`,
            image: `https://www.fabi-online.de/${post.img}`
        });
    }
    
    const query = getQuery(event);
    const format = query.format || 'rss';

    let content: string;
    let contentType: string;

    if (format === 'atom') {
        content = feed.atom1();
        contentType = 'application/atom+xml';
    } else if (format === 'json') {
        content = feed.json1();
        contentType = 'application/json';
    } else {
        content = feed.rss2();
        contentType = 'application/rss+xml';
    }

    await send(event, content, contentType);
});