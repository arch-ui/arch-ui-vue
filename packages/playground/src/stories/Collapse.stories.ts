import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { fn, within, userEvent, expect } from '@storybook/test';

import { ACollapse, ACollapseItem } from '@arch-design/arch-ui';

type Story = StoryObj<typeof ACollapse> & { argTypes?: ArgTypes };

const meta: Meta<typeof ACollapse> = {
  title: 'Example/Collapse',
  component: ACollapse,
  subcomponents: {
    ACollapseItem,
  },
  tags: ['autodocs'],
  argTypes: {},
};

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`;

export const Default: Story = {
  args: {
    accordion: true,
    modelValue: ['1'],
  },
  render: (args: any) => ({
    components: { ACollapse, ACollapseItem },
    setup() {
      return { args };
    },
    template: container(
      `<a-collapse v-bind="args">
        <a-collapse-item key="1" header="title1">
          content1
        </a-collapse-item>
        <a-collapse-item key="2" header="title2" disabled>
          content2
        </a-collapse-item>
      </a-collapse>`
    ),
  }),
};

export default meta;
