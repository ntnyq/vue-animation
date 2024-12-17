// @ts-check

import { config, defineConfig } from '@ntnyq/prettier-config'

export default defineConfig({
  ...config,

  overrides: [
    {
      files: ['index.html'],
      options: {
        parser: 'html',
        singleAttributePerLine: false,
      },
    },
  ],
})
