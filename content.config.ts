import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
        source: '**/*.md',
        type: 'page'
    })
  }
})
