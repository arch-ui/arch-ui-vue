<script setup lang="ts">
import type { ButtonProps } from './type';
import { getPrefixCls, getPrefixPascal } from '@healwrap/hp-ui-utils';
import { ref } from 'vue';

defineOptions({
  name: getPrefixPascal('button'),
});

const compPrefix = getPrefixCls('button');

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  type: 'primary'
});

const slots = defineSlots();

const _ref = ref<HTMLElement | null>(null);
</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    :type="tag === 'button' ? nativeType : 0"
    :disabled="disabled || loading ? true : 0"
    :class="{
      [`${compPrefix}--${type}`]: type,
      [`${compPrefix}--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
  >
    <slot></slot>
  </component>
</template>

<style src="./style.css"></style>
