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
