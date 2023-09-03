import PostList from '@/components/PostList/index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostList> = {
  title: 'Main/PostList',
  component: PostList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const OrderList: Story = {};
