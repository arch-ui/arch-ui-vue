import { ATooltip } from '@arch-design/arch-ui-vue';
import type { Meta, StoryObj } from '@storybook/vue3';

type Story = StoryObj<typeof ATooltip>;

const meta: Meta<typeof ATooltip> = {
  title: 'Components/Tooltip',
  component: ATooltip,
  tags: ['autodocs'],
};

export const Default: Story = {
  args: {
    default: 'Content',
  },
  render: (args: any) => ({
    components: {
      ATooltip,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
      <a-tooltip>
        <template #default>
          <span v-html="args.default"></span>
        </template>
      </a-tooltip>
    `,
  }),
};

export default meta;
