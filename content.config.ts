import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
        source: '**/*.md',
        type: 'page',
        schema: z.object({
          title: z.string(),
          description: z.string(),
          date: z.string(),
          status: z.string(),
          category: z.string(),
          tags: z.array(z.string()),
          coverImage: z.string()
        })
    })
  }
})
