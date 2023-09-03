import { NavLink } from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavLink> = {
  title: 'Header/Nav',
  component: NavLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof NavLink>;

export const small: Story = {
  args: {
    size: 'small',
    label: '오늘의 영화',
    url: '/',
  },
};

export const medium: Story = {
  args: {
    size: 'medium',
    label: '오늘의 영화',
    url: '/',
  },
};

export const large: Story = {
  args: {
    size: 'large',
    label: '오늘의 영화',
    url: '/',
  },
};
