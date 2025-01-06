import type { Meta, StoryObj } from '@storybook/vue3';
import { ACollapse, ACollapseItem } from '@arch-design/arch-ui-vue';

type Story = StoryObj<typeof ACollapse>;

const meta: Meta<typeof ACollapse> = {
  title: 'Components/Collapse',
  component: ACollapse,
  subcomponents: { ACollapseItem },
  tags: ['autodocs'],
};

export const Default: Story = {
  render: (args: any) => ({
    components: {
      ACollapse,
      ACollapseItem,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <a-collapse v-bind="args">
      <a-collapse-item key="a" header="Title a">
        <div>this is content a</div>
      </a-collapse-item>
      <a-collapse-item key="b" header="title b">
        <div>this is content b2<br>this is content b2</div>
      </a-collapse-item>
      <a-collapse-item key="c" header="title c  disable" disabled>
        <div>this is content c</div>
      </a-collapse-item>
    </a-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ['a', 'b'],
  },
};

export default meta;
