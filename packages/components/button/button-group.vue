<script setup lang="ts">
import type { ButtonGroupProps } from './type';
import { provide, reactive, toRef } from 'vue';
import { BUTTON_GROUP_CTX_KEY } from './constants';
import { getPrefixCls, getPrefixPascal } from '@arch-design/arch-ui-vue/_utils';

const compName = 'button-group';
const compPrefix = getPrefixCls(compName);

defineOptions({
  name: getPrefixPascal(compName),
});

const props = defineProps<ButtonGroupProps>();

provide(
  BUTTON_GROUP_CTX_KEY,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
    status: toRef(props, 'status'),
    disabled: toRef(props, 'disabled'),
  })
);
</script>

<template>
  <div :class="compPrefix">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>
