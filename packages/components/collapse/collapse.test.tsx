import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
// TODO 使用 @arch-ui/arch-ui-vue 时需要注意是 dev 模式，build模式无法引入
import { ACollapse, ACollapseItem } from '@arch-ui/arch-ui-vue';
import { getPrefixCls } from '@arch-ui/arch-ui-vue/_utils';

const compItemPrefix = getPrefixCls('collapse-item');

describe('Collapse.vue', () => {
  it('应该正确渲染 Collapse 组件', () => {
    const wrapper = mount(ACollapse, {
      props: {
        modelValue: ['a'],
      },
      slots: {
        default: [
          h(ACollapseItem, { key: 'a', header: 'Title a' }, () =>
            h('div', 'this is content a')
          ),
          h(ACollapseItem, { key: 'b', header: 'Title b' }, () =>
            h('div', 'this is content b')
          ),
        ],
      },
    });

    expect(wrapper.findAllComponents(ACollapseItem).length).toBe(2);
  });

  it('应该在手风琴模式下只允许一个面板打开', async () => {
    const wrapper = mount(ACollapse, {
      props: {
        modelValue: ['a'],
        accordion: true,
      },
      slots: {
        default: [
          h(ACollapseItem, { key: 'a', header: 'Title a' }, () =>
            h('div', 'this is content a')
          ),
          h(ACollapseItem, { key: 'b', header: 'Title b' }, () =>
            h('div', 'this is content b')
          ),
        ],
      },
    });

    await wrapper.vm.$nextTick();

    const items = wrapper.findAllComponents(ACollapseItem);
    await items[1].find(`.${compItemPrefix}__header`).trigger('click');

    expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual(['b']);
  });

  it('应该正确处理面板的点击事件', async () => {
    const wrapper = mount(ACollapse, {
      props: {
        modelValue: ['a'],
      },
      slots: {
        default: [
          h(ACollapseItem, { key: 'a', header: 'Title a' }, () =>
            h('div', 'this is content a')
          ),
          h(ACollapseItem, { key: 'b', header: 'Title b' }, () =>
            h('div', 'this is content b')
          ),
        ],
      },
    });

    await wrapper.vm.$nextTick();

    const items = wrapper.findAllComponents(ACollapseItem);
    await items[1].find(`.${compItemPrefix}__header`).trigger('click');

    expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual(['a', 'b']);
  });

  it('应该在禁用状态下不响应点击事件', async () => {
    const wrapper = mount(ACollapse, {
      props: {
        modelValue: ['a'],
      },
      slots: {
        default: [
          h(
            ACollapseItem,
            { key: 'a', header: 'Title a', disabled: true },
            () => h('div', 'this is content a')
          ),
        ],
      },
    });

    await wrapper.vm.$nextTick();

    const item = wrapper.findComponent(ACollapseItem);
    await item.find(`.${compItemPrefix}__header`).trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeUndefined();
  });
});
