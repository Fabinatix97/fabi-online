import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import SpotlightEffect from '@/components/SpotlightEffect.vue'

vi.mock('#components', () => ({
  useNuxtApp: () => ({
    $theme: 'dark',
  }),
}))

describe('SpotlightEffect.vue', () => {
  it('renders the SVG when theme is dark', () => {
    const wrapper = shallowMount(SpotlightEffect, {
      global: {
        stubs: {
          'client-only': {
            template: '<div><slot /></div>',
          },
        },
      },
    })
    expect(wrapper.html()).toContain('<svg')
  })
})
