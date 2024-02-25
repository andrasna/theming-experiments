import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './heading'

const meta = {
  title: 'core/typography/heading',
  component: Heading,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Alfa: Story = {
  args: {
    variant: 'alfa',
    children: 'Heading',
    as: 'h1',
  },
}

export const Bravo: Story = {
  args: {
    variant: 'bravo',
    children: 'Heading',
    as: 'h1',
  },
}