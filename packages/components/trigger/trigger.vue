<script setup lang="ts">
import { getPrefixCls, getPrefixPascal } from '@arch-design/arch-ui-vue/_utils';
import type { TriggerProps } from './type';

const compName = 'trigger';
const compPrefix = getPrefixCls(compName);

defineOptions({
  name: getPrefixPascal(compName),
});

const props = withDefaults(defineProps<TriggerProps>(), {
  animationName: 'fade-in',
});

const onAnimationStart = () => {
  // isAnimation.value = true;
};

const handleShow = () => {
  // isAnimation.value = false;
  // if (computedVisible.value) {
  // emit('show');
  // }
};

const handleHide = () => {
  // isAnimation.value = false;
  // if (!computedVisible.value) {
  // mounted.value = false;
  // emit('hide');
  // }
};
</script>

<template>
  <client-only>
    <Teleport to="body">
      <div :class="[compPrefix]" style="background-color: red">
        <transition
          :name="props.animationName"
          appear
          :onBeforeEnter="onAnimationStart"
          :onAfterEnter="handleShow"
          :onBeforeLeave="onAnimationStart"
          :onAfterLeave="handleHide"
        >
          <slot></slot>
        </transition>
      </div>
    </Teleport>
  </client-only>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>
