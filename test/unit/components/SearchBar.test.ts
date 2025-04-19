import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchBar from '@/components/SearchBar.vue'

describe('SearchBar', () => {
  it('should emit "search" event with the correct payload when input changes', async () => {
    const wrapper = mount(SearchBar)
    const input = wrapper.find('input[type="text"]')
    await input.setValue('test')
    expect(wrapper.emitted('search')).toBeTruthy()
    expect(wrapper.emitted('search')![0]).toEqual(['test'])
  })
})
