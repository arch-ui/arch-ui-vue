import { ATrigger } from '@arch-design/arch-ui-vue';
import type { Meta, StoryObj } from '@storybook/vue3';

type Story = StoryObj<typeof ATrigger>;

const meta: Meta<typeof ATrigger> = {
  title: 'Components/Trigger',
  component: ATrigger,
  tags: ['autodocs'],
};

export const Default: Story = {
  render: (args: any) => ({
    components: {
      ATrigger,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
      <a-trigger></a-trigger>
    `,
  }),
};

export default meta;
