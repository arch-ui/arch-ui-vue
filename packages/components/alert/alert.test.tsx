import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { getPrefixCls } from '@arch-ui/arch-ui-vue/_utils';
import { AAlert as Alert } from './index';
import type { AlertType } from './type';
import AIcon from '../icon/icon.vue';

const compPrefix = getPrefixCls('alert');

describe('Alert.vue', () => {
  // 基础渲染测试
  it('应该正确渲染基础 Alert', async () => {
    const title = '测试标题';
    const content = '测试内容';
    const wrapper = mount(Alert, {
      props: { title },
      slots: { default: content },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.find(`.${compPrefix}`).exists()).toBe(true);
    expect(wrapper.text()).toContain(title);
    expect(wrapper.text()).toContain(content);
  });

  // 测试不同类型的 Alert
  it.each([
    ['info', 'circle-info'],
    ['success', 'circle-check'],
    ['warning', 'circle-exclamation'],
    ['error', 'circle-xmark'],
  ])('应该为类型 %s 渲染正确的图标', async (type, iconName) => {
    const wrapper = mount(Alert, {
      props: {
        type: type as AlertType,
        showIcon: true,
      },
    });

    await wrapper.vm.$nextTick();
    const alertElement = wrapper.find(`.${compPrefix}`);
    expect(alertElement.exists()).toBe(true);
    expect(alertElement.classes()).toContain(`${compPrefix}-${type}`);
    const iconComponent = wrapper.findComponent(AIcon);
    expect(iconComponent.props('icon')).toBe(iconName);
  });

  // 测试关闭功能
  it('应该正确处理关闭事件', async () => {
    const onClose = vi.fn();
    const onAfterClose = vi.fn();

    const wrapper = mount(Alert, {
      props: {
        title: '测试标题',
        closable: true,
        onClose,
        'onAfter-close': onAfterClose,
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.find(`.${compPrefix}-close-btn`).exists()).toBe(true);
    await wrapper.find(`.${compPrefix}-close-btn`).trigger('click');
    expect(onClose).toHaveBeenCalled();

    await wrapper.vm.$nextTick();
    expect(wrapper.find(`.${compPrefix}`).exists()).toBe(false);
  });

  // 测试自定义插槽
  it('应该正确渲染自定义插槽', async () => {
    const customTitle = '自定义标题';
    const customIcon = 'custom-icon';
    const customAction = '自定义操作';
    const customClose = '关闭';

    const wrapper = mount(Alert, {
      props: {
        closable: true,
        showIcon: true,
      },
      slots: {
        title: () => customTitle,
        icon: () => <AIcon icon={customIcon} />,
        action: () => customAction,
        'close-element': () => customClose,
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain(customTitle);
    expect(wrapper.text()).toContain(customAction);
    expect(wrapper.text()).toContain(customClose);
    expect(wrapper.findComponent(AIcon).props('icon')).toBe(customIcon);
  });

  // 测试 banner 和居中模式
  it.each([
    ['banner', true, `${compPrefix}-banner`],
    ['center', true, `${compPrefix}-center`],
  ])('当 %s 为 %s 时应该添加正确的类名', async (prop, value, className) => {
    const wrapper = mount(Alert, {
      props: {
        [prop]: value,
      },
    });

    await wrapper.vm.$nextTick();

    const alertElement = wrapper.find(`.${compPrefix}`);
    expect(alertElement.exists()).toBe(true);
    expect(alertElement.classes()).toContain(className);
  });

  // 测试图标显示控制
  it('应该正确控制图标的显示', async () => {
    const wrapper = mount(Alert, {
      props: {
        showIcon: false,
      },
    });

    expect(wrapper.find(`.${compPrefix}-icon`).exists()).toBe(false);

    await wrapper.setProps({ showIcon: true });
    expect(wrapper.find(`.${compPrefix}-icon`).exists()).toBe(true);
  });
});
