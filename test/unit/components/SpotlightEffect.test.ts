import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SpotlightEffect from '@/components/SpotlightEffect.vue'

describe('SpotlightEffect', () => {
  it('renders the SVG when theme is dark', () => {
    const wrapper = mount(SpotlightEffect, {
      props: { theme: 'dark' },
      global: {
        stubs: {
          'client-only': { template: '<div><slot /></div>' },
        },
      },
    })

    expect(wrapper.find('.spotlight-glow').exists()).toBe(true)
  })

  it('does not render the SVG when theme is light', () => {
    const wrapper = mount(SpotlightEffect, {
      props: { theme: 'light' },
      global: {
        stubs: {
          'client-only': { template: '<div><slot /></div>' },
        },
      },
    })

    expect(wrapper.find('.spotlight-glow').exists()).toBe(false)
  })
})
