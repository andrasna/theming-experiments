import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta = {
  title: 'core/button',
  component: Button,
  parameters: {
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SolidAlfa: Story = {
  args: {
    variant: 'solid-alfa',
    children: 'Button',
  },
};

export const SolidBravo: Story = {
  args: {
    variant: 'solid-bravo',
    children: 'Button',
  },
};

export const SolidCharlie: Story = {
  args: {
    variant: 'solid-charlie',
    children: 'Button',
  },
};

export const OutlineAlfa: Story = {
  args: {
    variant: 'outline-alfa',
    children: 'Button',
  },
};