<script setup lang="ts">
import type { ButtonProps, ButtonEmits, ButtonInstance } from './type';
import { getPrefixCls, getPrefixPascal } from '@arch-design/arch-ui-utils';
import { throttle } from 'lodash-es';
import { ref } from 'vue';

const compName = 'button';

defineOptions({
  name: getPrefixPascal(compName),
});

const compPrefix = getPrefixCls(compName);

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  type: 'primary',
});

const emit = defineEmits<ButtonEmits>();

const slots = defineSlots();

const _ref = ref<HTMLButtonElement | void>();

const handleBtnClick = (e: MouseEvent) => emit('click', e);

const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);

defineExpose<ButtonInstance>({
  ref: _ref,
});
</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    :type="tag === 'button' ? nativeType : 0"
    :disabled="disabled || loading ? true : 0"
    :class="{
      [`${compPrefix}`]: compPrefix,
      [`${compPrefix}--${type}`]: type,
      [`${compPrefix}--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="(e: MouseEvent) => (useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e))"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss">
@import './style.scss';
</style>
