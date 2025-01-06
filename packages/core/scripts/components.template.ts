import { pascalToKebab } from '../_utils';

export function getIndexContent(comp: string) {
  return `import { withInstall } from '@arch-design/arch-ui-vue/_utils';
import _${comp} from './${comp}.vue';

export const A${comp} = withInstall(_${comp});

export * from './type.d';
`;
}

export function getStyleContent(comp: string) {
  const kebabComp = pascalToKebab(comp);
  return `@use '@arch-design/arch-ui-vue/_style/index.scss' as *;

$${kebabComp}-prefix-cls: '#{$prefix}-${kebabComp}';`;
}

export function getComponentContent(comp: string) {
  const kebabComp = pascalToKebab(comp);
  return `<script setup lang="ts">
import { getPrefixCls, getPrefixPascal } from '@arch-design/arch-ui-vue/_utils';

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
  return ``;
}

export function getTypeContent(comp: string) {
  return ``;
}

export function getStorybookContent(comp: string) {
  const kebabComp = pascalToKebab(`A${comp}`);
  return `
  import { A${comp} } from '@arch-design/arch-ui-vue';
import type { Meta, StoryObj } from '@storybook/vue3';

type Story = StoryObj<typeof A${comp}>;

const meta: Meta<typeof A${comp}> = {
  title: 'Example/${comp}',
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
