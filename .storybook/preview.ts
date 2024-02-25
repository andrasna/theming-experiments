import type { Preview } from '@storybook/react'
import '../app/_theme/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      default: 'spring',
      target: 'html',
      list: [
        { name: 'spring', class: 'theme-spring' },
        { name: 'summer', class: 'theme-summer' },
        { name: 'dark', class: 'theme-dark' },
      ],
    },
  },
}

export default preview
