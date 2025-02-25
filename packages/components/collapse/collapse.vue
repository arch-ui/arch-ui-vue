<script lang="ts" setup>
import { getPrefixCls, getPrefixPascal } from '@arch-design/arch-ui-vue/_utils';
import type { CollapseEmits, CollapseProps, CollapseItemKey } from './type';
import { ref, provide, watch, watchEffect } from 'vue';
import { COLLAPSE_CTX_KEY } from './constants';

const compName = 'collapse';
const compPrefix = getPrefixCls(compName);

defineOptions({
  name: getPrefixPascal(compName),
});

const props = defineProps<CollapseProps>();
const emit = defineEmits<CollapseEmits>();
const activeKeys = ref(props.modelValue ?? props.activeKeys);

function handleItemClick(key: CollapseItemKey) {
  if (!activeKeys.value || activeKeys.value.length === 0) {
    return;
  }

  let _activeKeys = [...activeKeys.value];
  if (props.accordion) {
    _activeKeys = [_activeKeys[0] === key ? '' : key];
    updateActiveKeys(_activeKeys);
    return;
  }
  // 存在则删除，不存在则添加
  const index = _activeKeys.indexOf(key);
  if (index > -1) {
    _activeKeys.splice(index, 1);
  } else {
    _activeKeys.push(key);
  }
  updateActiveKeys(_activeKeys);
}
function updateActiveKeys(keys: CollapseItemKey[]) {
  activeKeys.value = keys;
  emit('update:modelValue', keys);
  emit('change', keys);
}
watchEffect(() => {
  if (props.accordion && activeKeys.value.length > 1) {
    console.warn('在手风琴模式下，不能使用多个激活面板');
    activeKeys.value.splice(1);
  }
});
watch(
  () => props.modelValue,
  (val) => {
    updateActiveKeys(val);
  }
);
provide(COLLAPSE_CTX_KEY, {
  activeKeys,
  handleItemClick,
});
</script>

<template>
  <div :class="`${compPrefix}`">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>
