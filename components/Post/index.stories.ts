import Post from '@/components/Post/index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Post> = {
  title: 'Main/post',
  component: Post,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OrderPost: Story = {};
