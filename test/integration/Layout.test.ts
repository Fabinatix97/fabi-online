import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { defineComponent } from 'vue'
import { useRouter } from '#imports'

async function resolveLayoutFor(path: string) {
  let layoutName: string | undefined

  await mountSuspended(
    defineComponent({
      name: 'LayoutResolver',
      async setup() {
        const router = useRouter()
        await router.isReady()
        layoutName = router.resolve(path).meta.layout as string | undefined
        return () => null
      },
    })
  )

  return layoutName ?? 'default'
}

describe('Layouts', () => {
  it('applies the nofooter layout on the home page', async () => {
    const layout = await resolveLayoutFor('/')
    expect(layout).toBe('nofooter')
  })

  it('applies the widelayout on the blog index page', async () => {
    const layout = await resolveLayoutFor('/blog')
    expect(layout).toBe('widelayout')
  })

  it('applies the default layout on a blog post page', async () => {
    const layout = await resolveLayoutFor('/blog/2021-01-10-der-kalorien-mythos')
    expect(layout).toBe('default')
  })
})
