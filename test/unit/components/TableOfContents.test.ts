import { describe, expect, it } from 'vitest'
import TableOfContents from '@/components/TableOfContents.vue'
import { mount } from '@vue/test-utils'

describe('TableOfContents', () => {
  it('should mount the component', () => {
    const wrapper = mount(TableOfContents)
    expect(wrapper.exists()).toBe(true)
    console.log(wrapper.html())
  })
})
