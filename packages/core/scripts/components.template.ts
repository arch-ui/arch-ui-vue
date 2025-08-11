import { pascalToKebab } from '../_utils';

export function getIndexContent(comp: string) {
  const kabebComp = pascalToKebab(comp);
  return `import { withInstall } from '@arch-ui/arch-ui-vue/_utils';
import _${comp} from './${kabebComp}.vue';

export const A${comp} = withInstall(_${comp});

export * from './type.d';
`;
}

export function getStyleContent(comp: string) {
  const kebabComp = pascalToKebab(comp);
  return `@use '@arch-ui/arch-ui-vue/_style/index.scss' as *;

$${kebabComp}-prefix-cls: '#{$prefix}-${kebabComp}';`;
}

export function getComponentContent(comp: string) {
  const kebabComp = pascalToKebab(comp);
  return `<script setup lang="ts">
import { getPrefixCls, getPrefixPascal } from '@arch-ui/arch-ui-vue/_utils';

const compName = '${kebabComp}';
const compPrefix = getPrefixCls(compName);

defineOptions({
  name: getPrefixPascal(compName),
});
</script>

<template>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>
`;
}

export function getTestComponent(comp: string) {
  return `import { test } from "vitest";

test.skip("should skip this test", () => {});`;
}

export function getTypeContent(comp: string) {
  return ``;
}

export function getStorybookContent(comp: string) {
  const kebabComp = pascalToKebab(`A${comp}`);
  return `import { A${comp} } from '@arch-ui/arch-ui-vue';
import type { Meta, StoryObj } from '@storybook/vue3';

type Story = StoryObj<typeof A${comp}>;

const meta: Meta<typeof A${comp}> = {
  title: 'Components/${comp}',
  component: A${comp},
  tags: ['autodocs'],
};

export const Default: Story = {
  render: (args: any) => ({
    components: {
      A${comp},
    },
    setup() {
      return {
        args,
      };
    },
    template: ${'`'}
      ${`<${kebabComp}></${kebabComp}>`}
    ${'`'},
  }),
};

export default meta;
  `;
}
