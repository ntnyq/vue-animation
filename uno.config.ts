import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'flex-center': 'flex items-center justify-center',

      'bg-base': 'bg-white dark:bg-black',
      'bg-hover': 'bg-[#8881]',
      'color-base': 'text-#222 dark:text-#ddd',
      'border-base': 'border-gray:20',

      'box-input': 'box-input-shell box-input-inner focus:(border-primary ring-2 ring-primary:20)',
      'box-input-inner': 'px-2 py-1 outline-none w-full bg-base rounded-sm placeholder-gray:50',
      'box-input-shell':
        'bg-base border-base color-base border rounded-sm focus-within:(border-primary ring-2 ring-primary:20) disabled:(bg-gray:10 color-gray:50)',
    },
    [
      /^btn-simple-(.*)$/,
      ([, color]) => [
        `@hover:bg-${color}/90 @hover:opacity-100`,
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        `border border-${color} rounded`,
        `bg-${color} text-white`,
        'min-w-100px',
        'cursor-pointer',
        'flex gap-1 items-center justify-center',
      ],
    ],
  ],

  theme: {
    colors: {
      primary: '#4b32c3',
    },
  },

  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      autoInstall: true,
      extraProperties: {
        color: 'inherit',
      },
    }),
  ],

  transformers: [transformerDirectives(), transformerVariantGroup()],
})
