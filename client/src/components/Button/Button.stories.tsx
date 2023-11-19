import { StoryObj } from '@storybook/react';
import Btn from './';

const sizes = ['small', 'medium', 'large'] as const;

export default {
	title: 'Inputs/Button',
	component: Btn,
	args: {
		children: 'Button'
	}
};

type Story = StoryObj<typeof Btn>;

export const Button: Story = {
	args: {}
};
