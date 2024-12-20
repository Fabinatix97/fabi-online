import { defineEventHandler } from 'h3';
import { promises as fs } from 'fs';
import path from 'path';
import { Feed } from 'feed';
import matter from 'gray-matter';
import { send } from 'h3';

export default defineEventHandler(async (event) => {
    const text = 'Hello world!';
    
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
        id: 'hhttps://www.fabi-online.de/',
        link: 'https://www.fabi-online.de/rss',
        language: 'de',
        image: 'https://www.fabi-online.de/favicon/favicon-32x32.png',
        //favicon: 'http://localhost:3000/favicon/favicon.ico',
        copyright: 'All rights reserved 2024, Fabian Weiß',
        updated: new Date(),
        //generator: 'Feed for Node.js',
        //feedLinks: {
        //    rss: 'http://localhost:3000/rss.xml',
        //},
        author: {
            name: 'Fabian Weiß',
            email: 'fabian@fabi-online.de',
            link: 'https://www.fabi-online.de/',
        },
    });

    for (const post of posts) {
        feed.addItem({
            title: post.title,
            date: new Date(post.date),
            id: `https://www.fabi-online.de/blog/${post.slug}`,
            link: `https://www.fabi-online.de/blog/${post.slug}`,
            description: `${post.body.slice(0, 250)}...`,
            content: post.body,
            //image: post.img
        });
    }

    const rssContent = feed.rss2();
    await send(event, rssContent, 'application/rss+xml');
});