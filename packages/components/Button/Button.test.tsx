import { getPrefixCls } from '@arch-design/arch-ui-vue/_utils';
import { describe, it, expect, vi, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { AButton as Button } from './index';
import Icon from '../Icon/Icon.vue';
import ButtonGroup from './ButtonGroup.vue';

const compName = ['button', 'button-group'];

describe('Button.vue', () => {
  // Props: status
  it('should has the correct status class when status prop is set', () => {
    const statusArr = ['primary', 'success', 'warning', 'danger', 'info'];
    statusArr.forEach((status) => {
      const wrapper = mount(Button, {
        props: { status: status as any },
      });
      expect(wrapper.classes()).toContain(
        `${getPrefixCls(compName[0])}-status--${status}`
      );
    });
  });

  // Props: type
  it('should has the correct type class when type prop is set', () => {
    const types = ['primary', 'secondary', 'outline', 'text'];
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type: type as any },
      });
      expect(wrapper.classes()).toContain(
        `${getPrefixCls(compName[0])}--${type}`
      );
    });
  });

  // Props: size
  it('should has the correct size class when size prop is set', () => {
    const sizes = ['large', 'default', 'small', 'mini'];
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size: size as any },
      });
      expect(wrapper.classes()).toContain(
        `${getPrefixCls(compName[0])}--${size}`
      );
    });
  });

  // Props: plain, round, circle
  it.each([
    ['disabled', 'is-disabled'],
    ['loading', 'is-loading'],
  ])(
    'should has the correct class when prop %s is set to true',
    (prop, className) => {
      const wrapper = mount(Button, {
        props: { [prop]: true },
      });
      expect(wrapper.classes()).toContain(className);
    }
  );

  it('should has the correct native type attribute when native-type prop is set', () => {
    const wrapper = mount(Button, {
      props: { htmlType: 'submit' },
    });
    expect(wrapper.element.tagName).toBe('BUTTON');
    expect((wrapper.element as any).type).toBe('submit');
  });

  // Props: tag
  it('should renders the custom tag when tag prop is set', () => {
    const wrapper = mount(Button, {
      props: { tag: 'a' },
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe('a');
  });

  // Props: Icon
  it('should renders the custom icon when icon prop is set', () => {
    const wrapper = mount(() => (
      <Button {...{ icon: 'search' }}>测试内容</Button>
    ));
    expect(wrapper.find('i').exists()).toBe(true);
  });

  // Events: click
  it('should emits a click event when the button is clicked', async () => {
    const wrapper = mount(Button, {});
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toHaveLength(1);
  });

  // Exception Handling: loading state
  it('should display loading icon and not emit click event when button is loading', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    });
    const iconElement = wrapper.findComponent(Icon);

    expect(wrapper.find('.loading-icon').exists()).toBe(true);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.find('svg').attributes('data-icon')).toBe('spinner');
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });
});

describe('ButtonGroup.vue', () => {
  test('basic button group', async () => {
    const wrapper = mount(() => (
      <ButtonGroup>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ));

    expect(wrapper.classes()).toContain(getPrefixCls(compName[1]));
  });

  test('button group size', () => {
    const sizes = ['large', 'default', 'small', 'mini'];
    sizes.forEach((size) => {
      const wrapper = mount(() => (
        <ButtonGroup size={size as any}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));

      const buttonWrapper = wrapper.findComponent(Button);
      expect(buttonWrapper.classes()).toContain(
        `${getPrefixCls(compName[0])}--${size}`
      );
    });
  });

  test('button group status', () => {
    const statusArr = ['primary', 'success', 'warning', 'danger', 'info'];
    statusArr.forEach((status) => {
      const wrapper = mount(() => (
        <ButtonGroup status={status as any}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));

      const buttonWrapper = wrapper.findComponent(Button);
      expect(buttonWrapper.classes()).toContain(
        `${getPrefixCls(compName[0])}-status--${status}`
      );
    });
  });

  test('button group disabled', () => {
    const wrapper = mount(() => (
      <ButtonGroup disabled>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ));

    const buttonWrapper = wrapper.findComponent(Button);
    expect(buttonWrapper.classes()).toContain(`is-disabled`);
  });
});
