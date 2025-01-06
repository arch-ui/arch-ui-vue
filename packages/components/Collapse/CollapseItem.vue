<script lang="ts" setup>
import type { CollapseItemProps } from './type.d';
import { computed, inject, getCurrentInstance } from 'vue';
import { COLLAPSE_CTX_KEY } from './constants';
import { getPrefixCls, getPrefixPascal } from '@arch-design/arch-ui-vue/_utils';
import AIcon from '../Icon/Icon.vue';
import transitionEvents from './transitionEvents';

const compName = 'collapse-item';
const compPrefix = getPrefixCls(compName);
const instance = getCurrentInstance();
const key = computed<any>(() => instance?.vnode.key);
defineOptions({
  name: getPrefixPascal(compName),
});

const props = defineProps<CollapseItemProps>();
const ctx = inject(COLLAPSE_CTX_KEY, undefined);
const isActive = computed(() => ctx?.activeKeys.value?.includes(key.value));

function handleClick() {
  if (props.disabled) {
    return;
  }
  ctx?.handleItemClick(key.value);
}
</script>
<template>
  <div
    :class="{
      [`${compPrefix}`]: compPrefix,
      'is-disabled': disabled,
    }"
  >
    <div
      :id="`item-header-${key}`"
      :class="{
        [`${compPrefix}__header`]: `${compPrefix}__header`,
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      @click="handleClick"
    >
      <a-icon icon="caret-right" class="header-angle" />
      <span :class="`${compPrefix}__title`">
        <slot name="title">
          {{ header }}
        </slot>
      </span>
    </div>
    <transition name="slide" v-on="transitionEvents">
      <div :class="`${compPrefix}__wapper`" v-show="isActive">
        <div :class="`${compPrefix}__content`" :id="`item-content-${key}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>
