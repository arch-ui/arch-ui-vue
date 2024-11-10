import type { Ref } from 'vue';
export type CollapseItemKey = string | number;

export interface CollapseProps {
  modelValue:  CollapseItemKey[];
  activeKeys?:  CollapseItemKey[];
  accordion?: boolean;
}

export interface CollapseItemProps {
  key: CollapseItemKey;
  header: string;
  disabled?: boolean;
}

export interface CollapseEmits {
  (e: 'update:modelValue', value: CollapseItemKey[]): void;
  (e: 'change', value: CollapseItemKey[]): void;
}

export interface CollapseContext {
  activeKeys: Ref< CollapseItemKey[]>;
  handleItemClick(key: CollapseItemKey): void;
}
