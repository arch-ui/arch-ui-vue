import { defineComponent, onMounted, ref } from 'vue';

/** 页面挂载完毕后再加载slot内容，避免在SSR场景下报错 */
export default defineComponent({
  name: 'ClientOnly',
  setup(_, { slots }) {
    const mounted = ref(false);
    onMounted(() => (mounted.value = true));

    return () => {
      if (mounted.value) {
        return slots.default?.();
      }
      return null;
    };
  },
});
