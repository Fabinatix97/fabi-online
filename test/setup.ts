// test/setup.ts
import { defineComponent } from 'vue'
import { config } from '@vue/test-utils'

// Register a dummy global component for Icon
config.global.components = {
  ...config.global.components,
  Icon: defineComponent({
    name: 'Icon',
    template: '<svg></svg>',
  }),
}
