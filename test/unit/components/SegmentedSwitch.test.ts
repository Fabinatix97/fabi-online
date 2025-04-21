import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Icon } from '#components'
import SegmentedSwitch from '@/components/SegmentedSwitch.vue'

describe('SegmentedSwitch', () => {
  it('renders string segments', () => {
    const segments = ['One', 'Two', 'Three']
    const wrapper = mount(SegmentedSwitch, { props: { segments, modelValue: 0 } })
    segments.forEach((seg) => {
      expect(wrapper.text()).toContain(seg)
    })
  })

  it('renders segments with icon correctly', () => {
    const segments = ['Alpha', 'Beta', { icon: 'mdi:gamma' }]

    const wrapper = mount(SegmentedSwitch, {
      props: { segments, modelValue: 0 },
      global: {
        components: { Icon },
      },
    })

    expect(wrapper.text()).toContain('Alpha')
    expect(wrapper.text()).toContain('Beta')
    expect(wrapper.findAll('.iconify').length).toBe(1)
    expect(wrapper.find('[class*="mdi:gamma"]').exists()).toBe(true)
  })

  it('marks the correct segment as active and emits update:modelValue', async () => {
    const segments = ['A', 'B', 'C']
    const wrapper = mount(SegmentedSwitch, { props: { segments, modelValue: 0 } })
    const segmentDivs = wrapper.findAll('.segment')

    console.log('segmentDivs[2] BEFORE:', segmentDivs[2].classes())

    // Check initial active segment
    expect(segmentDivs[0].classes()).toContain('active')
    expect(segmentDivs[1].classes()).not.toContain('active')
    expect(segmentDivs[2].classes()).not.toContain('active')

    // Click on the third segment
    await segmentDivs[2].trigger('click')
    await wrapper.setProps({ modelValue: 2 })

    console.log('segmentDivs[2] AFTER:', segmentDivs[2].classes())

    // Check if the third segment is now active
    expect(segmentDivs[2].classes()).toContain('active')
    expect(segmentDivs[0].classes()).not.toContain('active')
    expect(segmentDivs[1].classes()).not.toContain('active')

    // Verify emitted event
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
  })
})
