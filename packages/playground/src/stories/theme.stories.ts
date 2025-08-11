import type { Meta } from '@storybook/vue3';
import { updateThemeToken } from '@arch-ui/arch-ui-vue/_utils';
import { watch } from 'vue';
import { AButton } from '@arch-ui/arch-ui-vue';

const meta: Meta = {
  title: 'Components/Theme',
  argTypes: {
    primary: {
      control: { type: 'color' },
    },
    success: {
      control: { type: 'color' },
    },
    warning: {
      control: { type: 'color' },
    },
    danger: {
      control: { type: 'color' },
    },
    info: {
      control: { type: 'color' },
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    primary: '#165dff',
    success: '#00b42a',
    warning: '#ff7d00',
    danger: '#f53f3f',
    info: '#909399',
  },
  render: (args: any) => ({
    components: {
      AButton,
    },
    setup() {
      watch(
        () => args,
        (val) => {
          updateThemeToken({ primary: val.primary });
        },
        {
          immediate: true,
          deep: true,
        }
      );
      return {
        args,
      };
    },
    template: `
      <label>主题色:</label><input type="color" v-model="args.primary" /> <br><br>
      <a-button type="primary">测试按钮</a-button>
    `,
  }),
};

export default meta;
