<script setup lang="ts">
import type { ButtonProps } from './type';
import { ref } from 'vue';

defineOptions({
  name: 'HpButton',
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
});

const slots = defineSlots();

const _ref = ref<HTMLElement | null>(null);
</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    :type="tag === 'button' ? nativeType : 0"
    :disabled="disabled"
    :class="['hp-button', props.type]"
  >
  </component>
</template>
