import type { InjectionKey } from 'vue';
import type { CollapseContext } from './type.d';

export const COLLAPSE_CTX_KEY: InjectionKey<CollapseContext> =
  Symbol('collapseContext');
