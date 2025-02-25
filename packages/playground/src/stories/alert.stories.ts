import { AAlert, AButton } from '@arch-design/arch-ui-vue';
import type { Meta, StoryObj } from '@storybook/vue3';

type Story = StoryObj<typeof AAlert>;

const meta: Meta<typeof AAlert> = {
  title: 'Components/Alert',
  component: AAlert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: '警告提示的类型',
    },
    showIcon: {
      control: { type: 'boolean' },
      description: '是否显示图标',
    },
    closable: {
      control: { type: 'boolean' },
      description: '是否可关闭',
    },
    title: {
      control: { type: 'text' },
      description: '标题',
    },
    banner: {
      control: { type: 'boolean' },
      description: '是否用作顶部公告',
    },
    center: {
      control: { type: 'boolean' },
      description: '文字是否居中',
    },
  },
};

export const Default: Story = {
  args: {
    type: 'info',
    closable: true,
    banner: false,
    center: false,
    default: 'Alert Content',
    title: 'Alert Title',
  },

  render: (args: any) => ({
    components: {
      AAlert,
      AButton,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
      <a-alert
        :type="args.type"
        :closable="args.closable"
        :banner="args.banner"
        :center="args.center"
        :show-icon="args.showIcon"
        :title="args.title"
      >
        <template #title>
          <span v-html="args.title"></span>
        </template>
        <template #default>
          <span v-html="args.default"></span>
        </template>
        <template #action>
          <a-button type="primary" size="small">查看</a-button>
          <a-button type="primary" status="danger" size="small">删除</a-button>
        </template>
      </a-alert>
    `,
  }),
};

export default meta;
