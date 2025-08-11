<script setup lang="ts">
import { getPrefixCls, getPrefixPascal } from '@arch-ui/arch-ui-vue/_utils';
import Trigger from '../trigger/trigger.vue';
const compName = 'tooltip';
const compPrefix = getPrefixCls(compName);

defineOptions({
  name: getPrefixPascal(compName),
});
</script>

<template>
  <trigger animation-name="zoom-in-fade-out">
    <slot></slot>
  </trigger>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>
