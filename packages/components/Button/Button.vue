<script setup lang="ts">
import type { ButtonProps, ButtonEmits, ButtonInstance, ButtonSlots } from './type';
import { getPrefixCls, getPrefixPascal } from '@arch-design/arch-ui-vue/_utils';
import AIcon from '../Icon/Icon.vue';
import { computed, inject, ref } from 'vue';
import { BUTTON_GROUP_CTX_KEY } from './constants';

const compName = 'button';
const compPrefix = getPrefixCls(compName);

defineOptions({
  name: getPrefixPascal(compName),
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  htmlType: 'button',
  type: 'secondary',
});

const emit = defineEmits<ButtonEmits>();

const slots = defineSlots<ButtonSlots>();

const ctx = inject(BUTTON_GROUP_CTX_KEY, undefined);
const type = computed(() => ctx?.type ?? props?.type ?? '');
const size = computed(() => ctx?.size ?? props?.size ?? '');
const status = computed(() => ctx?.status ?? props?.status ?? '');
const disabled = computed(() => ctx?.disabled || props?.disabled || false);
const _ref = ref<HTMLButtonElement | void>();
const iconStyle = computed(() => ({ marginRight: slots.default ? '6px' : '0px' }));

const handleBtnClick = (e: MouseEvent) => emit('click', e);

defineExpose<ButtonInstance>({
  ref: _ref,
  disabled,
  type,
  size,
  status,
});
</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    :type="tag === 'button' ? htmlType : undefined"
    :disabled="disabled || loading ? true : undefined"
    :class="{
      [`${compPrefix}`]: compPrefix,
      [`${compPrefix}--${type}`]: type,
      [`${compPrefix}--${size}`]: size,
      [`${compPrefix}-status--${status}`]: status,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="handleBtnClick"
  >
    <template v-if="loading">
      <slot name="loading">
        <a-icon class="loading-icon" :icon="loadingIcon ?? 'spinner'" size="1x" :style="iconStyle" spin />
      </slot>
    </template>
    <template v-else-if="icon">
      <a-icon :icon="icon" :style="iconStyle" size="1x" />
    </template>
    <slot></slot>
  </component>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>
