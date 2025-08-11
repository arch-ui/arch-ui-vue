import type { Meta, StoryObj } from '@storybook/vue3';
import { AIcon } from '@arch-ui/arch-ui-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faCircleInfo,
  faCircleCheck,
  faCircleExclamation,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

type Story = StoryObj<typeof AIcon>;

// 添加 FontAwesome 图标到库中
library.add(
  faCoffee,
  faCircleInfo,
  faCircleCheck,
  faCircleExclamation,
  faCircleXmark
);

const meta: Meta<typeof AIcon> = {
  title: 'Components/Icon',
  component: AIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [
        'coffee',
        'circle-info',
        'circle-check',
        'circle-exclamation',
        'circle-xmark',
      ],
      description: '图标名称',
    },
    color: {
      control: 'color',
      description: '图标颜色',
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info'],
      description: '图标类型',
    },
  },
};

export const Default: Story = {
  args: {
    icon: 'coffee',
    color: '#000000',
  },

  render: (args: any) => ({
    components: {
      AIcon,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
      <a-icon
        :icon="args.icon"
        :color="args.color"
        :type="args.type"
      />
    `,
  }),
};

export const InfoIcon: Story = {
  args: {
    icon: 'circle-info',
    color: '#007bff',
    type: 'info',
  },
};

export const SuccessIcon: Story = {
  args: {
    icon: 'circle-check',
    color: '#28a745',
    type: 'success',
  },
};

export const WarningIcon: Story = {
  args: {
    icon: 'circle-exclamation',
    color: '#ffc107',
    type: 'warning',
  },
};

export const ErrorIcon: Story = {
  args: {
    icon: 'circle-xmark',
    color: '#dc3545',
    type: 'danger',
  },
};

export default meta;
