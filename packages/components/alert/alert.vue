<script setup lang="ts">
import { getPrefixCls, getPrefixPascal } from '@arch-design/arch-ui-vue/_utils';
import type { AlertProps, AlertEmits, AlertSlots, AlertInstance } from './type';
import AIcon from '../icon/icon.vue';
import { ref, computed, defineExpose, onMounted } from 'vue';

const compName = 'alert';
const compPrefix = getPrefixCls(compName);

defineOptions({
  name: getPrefixPascal(compName),
});

const props = withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  showIcon: true,
  closable: false,
  banner: false,
  center: false,
});

const emit = defineEmits<AlertEmits>();

const slots = defineSlots<AlertSlots>();

const visible = ref(false);
const alertRef = ref<HTMLElement | null>(null);
const typeIcon = computed(() => {
  const iconMap = {
    info: 'circle-info',
    success: 'circle-check',
    warning: 'circle-exclamation',
    error: 'circle-xmark',
  };
  return iconMap[props.type];
});

const handleClose = (ev: MouseEvent) => {
  visible.value = false;
  emit('close', ev);
};

defineExpose<AlertInstance>({
  ref: alertRef,
});

onMounted(() => (visible.value = true));
</script>

<template>
  <transition name="zoom-in-top" @after-leave="emit('after-close')">
    <div
      ref="alertRef"
      v-if="visible"
      role="alert"
      :class="[
        compPrefix,
        `${compPrefix}-${props.type}`,
        {
          [`${compPrefix}-with-title`]: Boolean(props.title || slots.title),
          [`${compPrefix}-banner`]: props.banner,
          [`${compPrefix}-center`]: props.center,
        },
      ]"
    >
      <div v-if="showIcon" :class="`${compPrefix}-icon`">
        <slot name="icon">
          <a-icon :icon="typeIcon" />
        </slot>
      </div>
      <div :class="`${compPrefix}-body`">
        <div
          v-if="closable"
          tabindex="-1"
          role="button"
          aria-label="Close"
          :class="`${compPrefix}-close-btn`"
          @click="handleClose"
        >
          <slot name="close-element">
            <a-icon icon="xmark" />
          </slot>
        </div>
        <div v-if="title || slots.title" :class="`${compPrefix}-title`">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        <div :class="`${compPrefix}-content`">
          <slot></slot>
        </div>
        <div v-if="slots.action" :class="`${compPrefix}-action`">
          <slot name="action"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@use './style.scss' as *;
</style>
