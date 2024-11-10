<script lang="ts" setup>
import type { CollapseItemProps } from './type.d';
import { computed, inject, useAttrs } from 'vue';
import { COLLAPSE_CTX_KEY } from './constants';
import { getPrefixCls, getPrefixPascal } from '@arch-design/arch-ui/_utils';
import AIcon from '../Icon/Icon.vue';
import transitionEvents from './transitionEvents';

const compName = 'collapse-item';
const compPrefix = getPrefixCls(compName);

defineOptions({
  name: getPrefixPascal(compName),
});

const props = defineProps<CollapseItemProps>();
const ctx = inject(COLLAPSE_CTX_KEY, void 0);
const atters: any = useAttrs();
console.log(atters);
const isActive = computed(() => ctx?.activeKeys.value?.includes(atters.key));

function handleClick() {
  if (props.disabled) return;
  ctx?.handleItemClick(atters.key);
}
</script>
<template>
  <div
    :class="{
      compPrefix,
      'is-disabled': disabled,
    }"
  >
    <div
      :id="`item-header-${atters.key}`"
      :class="{
        [`${compPrefix}__header`]: `${compPrefix}__header`,
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      @click="handleClick"
    >
      <span class="${compPrefix}__title">
        <slot name="title">
          {{ header }}
        </slot>
      </span>
      <a-icon icon="angle-right" class="header-angle" />
    </div>
    <transition name="slide" v-on="transitionEvents">
      <div class="${compPrefix}__wapper" v-show="isActive">
        <div class="${compPrefix}__content" :id="`item-content-${atters.key}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@use './style.scss' as *;
</style>
