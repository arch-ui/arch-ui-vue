import type { Component, Ref, ComputedRef } from 'vue';

// AlertType定义
export type AlertType = 'info' | 'success' | 'warning' | 'error';

// AlertProps接口定义
export interface AlertProps {
  /**
   * @property type
   * @type AlertType
   * @description 警告提示的类型
   * @default "info"
   */
  type?: AlertType;

  /**
   * @property showIcon
   * @type boolean
   * @description 是否展示图标
   * @default true
   */
  showIcon?: boolean;

  /**
   * @property closable
   * @type boolean
   * @description 是否展示关闭按钮
   * @default false
   */
  closable?: boolean;

  /**
   * @property title
   * @type string
   * @description 警告提示的标题
   */
  title?: string;

  /**
   * @property banner
   * @type boolean
   * @description 是否作为顶部公告使用（去除边框和圆角）
   * @default false
   */
  banner?: boolean;

  /**
   * @property center
   * @type boolean
   * @description 内容是否居中显示
   * @default false
   */
  center?: boolean;
}

// AlertEmits接口定义
export interface AlertEmits {
  /**
   * @description 点击关闭按钮时触发
   * @param ev MouseEvent
   */
  (e: 'close', ev: MouseEvent): void;

  /**
   * @description 关闭动画结束后触发
   */
  (e: 'after-close'): void;
}

// AlertSlots接口定义
export interface AlertSlots {
  default?: () => JSX.Element;
  /**
   * @description 图标插槽
   */
  icon?: () => JSX.Element;

  /**
   * @description 标题插槽
   */
  title?: () => JSX.Element;

  /**
   * @description 操作项插槽
   */
  action?: () => JSX.Element;

  /**
   * @description 关闭元素插槽
   * @version 2.36.0
   */
  'close-element'?: () => JSX.Element;
}

// AlertInstance接口定义
export interface AlertInstance {
  ref: Ref<HTMLElement | void | null>;
}
