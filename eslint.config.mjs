import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  vue: {
    overrides: {
      'vue/no-static-inline-styles': ['off'],
    },
  },
})
