import type { Component, Ref } from 'vue';

/** 参考 arco-design-vue https://arco.design/vue/component/button#API */
export type ButtonType = '' | 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonStatus = '' | 'success' | 'warning' | 'danger' | 'info';
export type HtmlType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'mini' | 'small' | 'default' | 'large';

export interface ButtonProps {
  /**
   * @property tag
   * @type string|Component
   * @description 自定义元素标签
   * @default "button"
   */
  tag?: string | Component;
  /**
   * @property type
   * @type ButtonType
   * @description 按钮类型
   * @default "secondary"
   */
  type?: ButtonType;
  /**
   * @property status
   * @type ButtonStatus
   * @description 按钮状态
   * @default ""
   */
  status?: ButtonStatus;
  /**
   * @description 按钮尺寸
   * @type ButtonSize
   * @default "medium"
   */
  size?: ButtonSize;
  /**
   * @description 原生 type 属性
   * @default "button"
   * @type 'button'|'reset'|'submit'
   */
  htmlType?: HtmlType;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 是否为加载中状态
   * @default false
   */
  loading?: boolean;
  /**
   * @description 按钮图标
   * @default "-"
   */
  icon?: string;
  /**
   * @description 自定义加载中状态图标组件
   * @default "spinner"
   */
  loadingIcon?: string;
}

export interface ButtonEmits {
  (e: 'click', val: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
  disabled: ComputedRef<boolean>;
  type: ComputedRef<ButtonType | ''>;
  size: ComputedRef<ButtonSize | ''>;
  status: ComputedRef<ButtonStatus | ''>;
}

export interface ButtonGroupProps {
  size?: ButtonSize;
  type?: ButtonType;
  status?: ButtonStatus;
  disabled?: boolean;
}

export interface ButtonGroupContext {
  size?: ButtonSize;
  type?: ButtonType;
  status?: ButtonStatus;
  disabled?: boolean;
}

export interface ButtonSlots {
  default?: () => JSX.Element;
  loading?: () => JSX.Element;
}
