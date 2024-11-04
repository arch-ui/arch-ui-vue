<script setup lang="ts">
import { getPrefixCls, getPrefixPascal } from '@arch-design/arch-ui-utils';
import type { IconProps } from './type';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { omit } from 'lodash-es';
import { computed } from 'vue';

const compName = 'icon';
const compPrefix = getPrefixCls(compName);
defineOptions({
  name: getPrefixPascal(compName),
  inheritAttrs: false, // 透传属性 false
});
const props = defineProps<IconProps>();
const filterProps = computed(() => omit(props, ['type', 'color']));
const customStyle = computed(() => ({
  color: props.color ?? void 0,
}));
</script>

<template>
  <i
    :class="[`${compPrefix}`, type && `${compPrefix}-${type}`]"
    :style="customStyle"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>
