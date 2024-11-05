import { ButtonProps } from './type';

declare function __VLS_template(): Readonly<Record<string, any>> & Record<string, any>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonProps>, {
    tag: string;
    nativeType: string;
    type: string;
    useThrottle: boolean;
    throttleDuration: number;
}>>, {
    ref: import('vue').Ref<HTMLButtonElement | void>;
    disabled: ComputedRef<boolean>;
    size: ComputedRef<import('packages/core').ButtonSize | "">;
    type: ComputedRef<import('packages/core').ButtonType | "">;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (val: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonProps>, {
    tag: string;
    nativeType: string;
    type: string;
    useThrottle: boolean;
    throttleDuration: number;
}>>> & Readonly<{
    onClick?: ((val: MouseEvent) => any) | undefined;
}>, {
    type: import('packages/core').ButtonType;
    tag: string | import('vue').Component;
    nativeType: import('packages/core').NativeType;
    useThrottle: boolean;
    throttleDuration: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
