import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Projects from '~/components/Projects.vue'
import { projects } from '~/data/projects'
import { Icon, NuxtLink } from '#components'

describe('Projects.vue', () => {
  it('renders the correct number of projects', () => {
    const wrapper = mount(Projects, {
      global: {
        components: { Icon, NuxtLink },
      },
    })

    const projectCards = wrapper.findAll('[data-test="project-card"]')
    expect(projectCards.length).toBe(projects.length)
  })

  it('displays project names, images, and tech stack', () => {
    const wrapper = mount(Projects, {
      global: {
        components: { Icon, NuxtLink },
      },
    })

    projects.forEach((project) => {
      expect(wrapper.text()).toContain(project.name)
      expect(wrapper.text()).toContain(project.description)

      project.technologies.forEach((tech) => {
        expect(wrapper.text()).toContain(tech)
      })

      const img = wrapper.find(`img[alt="Link zum Projekt ${project.name}"]`)
      expect(img.exists()).toBe(true)
      expect(img.attributes('src')).toBe(project.image)
    })
  })
})
