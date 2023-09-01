import {Meta, StoryObj} from '@storybook/react';
import Header from '.';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['fullscreen'],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {};

export const LoggedOut: Story = {};
