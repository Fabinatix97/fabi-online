import { mount } from '@vue/test-utils'
import ScrollToTop from '@@/components/ScrollToTop.vue'
import { beforeEach, describe, it, expect } from 'vitest'

describe('ScrollToTop', () => {
  beforeEach(() => {
    window.scrollY = 0
  })

  it('should hide the button initially', () => {
    const wrapper = mount(ScrollToTop)
    expect(wrapper.find('button').exists()).toBe(false)
  })

  it('should show the button after scrolling past 500px', async () => {
    const wrapper = mount(ScrollToTop)

    window.scrollY = 600
    window.dispatchEvent(new Event('scroll'))
    await wrapper.vm.$nextTick()

    expect(wrapper.find('button').exists()).toBe(true)
  })
})
