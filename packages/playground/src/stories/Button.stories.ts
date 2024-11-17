import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { fn, within, userEvent, expect } from '@storybook/test';

import { AButton, AButtonGroup } from '@arch-design/arch-ui-vue';

// type Story = StoryObj<typeof AButton> & { argTypes?: ArgTypes };

const meta: Meta = {
  title: 'Example/Button',
  // component: AButton, // TODO 这里 组件的类型会和argTypes冲突
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'text'],
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'danger', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small', 'mini'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    tag: {
      control: { type: 'select' },
      options: ['button', 'a', 'div'],
    },
    htmlType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    icon: {
      control: { type: 'text' },
    },
    loadingIcon: {
      control: { type: 'text' },
    },
  },
};

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`;

export const Default = {
  args: {
    content: 'Button',
  },
  render: (args: any) => ({
    components: { AButton },
    setup() {
      return { args };
    },
    template: container(`
      <a-button 
                :type="args.type" 
                :status="args.status" 
                :size="args.size" 
                :disabled="args.disabled"
                :loading="args.loading"
                :icon="args.icon"
      >
        {{args.content}}
      </a-button>
      `),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step('click btn', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
    expect(args.onClick).toHaveBeenCalled();
  },
};

export const ButtonIcon = {
  args: {
    loading: true,
  },
  render: (args: any) => ({
    components: { AButton },
    setup() {
      return { args };
    },
    template: container(
      `
      <a-button :loading="args.loading">图标按钮</a-button>
      `
    ),
  }),
};

export const ButtonGroup = {
  args: {},
  render: (args: any) => ({
    components: { AButton, AButtonGroup },
    setup() {
      return { args };
    },
    template: container(
      `<a-button-group 
                :type="args.type" 
                :status="args.status" 
                :size="args.size" 
                :disabled="args.disabled"
                :loading="args.loading"
                :icon="args.icon"
      >
        <a-button round>13141</a-button>
        <a-button>13141</a-button>
        <a-button round>13141</a-button>
      </a-button-group>`
    ),
  }),
};

export default meta;
