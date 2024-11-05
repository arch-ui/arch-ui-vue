export declare const AButton: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('packages/core').ButtonSize>;
        };
        icon: {
            type: import('vue').PropType<string>;
        };
        type: {
            type: import('vue').PropType<import('packages/core').ButtonType>;
            default: string;
        };
        circle: {
            type: import('vue').PropType<boolean>;
        };
        tag: {
            type: import('vue').PropType<string | import('vue').Component>;
            default: string;
        };
        nativeType: {
            type: import('vue').PropType<import('packages/core').NativeType>;
            default: string;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        loading: {
            type: import('vue').PropType<boolean>;
        };
        plain: {
            type: import('vue').PropType<boolean>;
        };
        round: {
            type: import('vue').PropType<boolean>;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
        };
        useThrottle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        throttleDuration: {
            type: import('vue').PropType<number>;
            default: number;
        };
    }>> & Readonly<{
        onClick?: ((val: MouseEvent) => any) | undefined;
    }>, {
        ref: import('vue').Ref<HTMLButtonElement | void>;
        disabled: ComputedRef<boolean>;
        size: ComputedRef<import('packages/core').ButtonSize | "">;
        type: ComputedRef<import('packages/core').ButtonType | "">;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (val: MouseEvent) => void;
    }, import('vue').PublicProps, {
        type: import('packages/core').ButtonType;
        tag: string | import('vue').Component;
        nativeType: import('packages/core').NativeType;
        useThrottle: boolean;
        throttleDuration: number;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('packages/core').ButtonSize>;
        };
        icon: {
            type: import('vue').PropType<string>;
        };
        type: {
            type: import('vue').PropType<import('packages/core').ButtonType>;
            default: string;
        };
        circle: {
            type: import('vue').PropType<boolean>;
        };
        tag: {
            type: import('vue').PropType<string | import('vue').Component>;
            default: string;
        };
        nativeType: {
            type: import('vue').PropType<import('packages/core').NativeType>;
            default: string;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        loading: {
            type: import('vue').PropType<boolean>;
        };
        plain: {
            type: import('vue').PropType<boolean>;
        };
        round: {
            type: import('vue').PropType<boolean>;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
        };
        useThrottle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        throttleDuration: {
            type: import('vue').PropType<number>;
            default: number;
        };
    }>> & Readonly<{
        onClick?: ((val: MouseEvent) => any) | undefined;
    }>, {
        ref: import('vue').Ref<HTMLButtonElement | void>;
        disabled: ComputedRef<boolean>;
        size: ComputedRef<import('packages/core').ButtonSize | "">;
        type: ComputedRef<import('packages/core').ButtonType | "">;
    }, {}, {}, {}, {
        type: import('packages/core').ButtonType;
        tag: string | import('vue').Component;
        nativeType: import('packages/core').NativeType;
        useThrottle: boolean;
        throttleDuration: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: import('vue').PropType<import('packages/core').ButtonSize>;
    };
    icon: {
        type: import('vue').PropType<string>;
    };
    type: {
        type: import('vue').PropType<import('packages/core').ButtonType>;
        default: string;
    };
    circle: {
        type: import('vue').PropType<boolean>;
    };
    tag: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: string;
    };
    nativeType: {
        type: import('vue').PropType<import('packages/core').NativeType>;
        default: string;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    loading: {
        type: import('vue').PropType<boolean>;
    };
    plain: {
        type: import('vue').PropType<boolean>;
    };
    round: {
        type: import('vue').PropType<boolean>;
    };
    loadingIcon: {
        type: import('vue').PropType<string>;
    };
    useThrottle: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    throttleDuration: {
        type: import('vue').PropType<number>;
        default: number;
    };
}>> & Readonly<{
    onClick?: ((val: MouseEvent) => any) | undefined;
}>, {
    ref: import('vue').Ref<HTMLButtonElement | void>;
    disabled: ComputedRef<boolean>;
    size: ComputedRef<import('packages/core').ButtonSize | "">;
    type: ComputedRef<import('packages/core').ButtonType | "">;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (val: MouseEvent) => void;
}, string, {
    type: import('packages/core').ButtonType;
    tag: string | import('vue').Component;
    nativeType: import('packages/core').NativeType;
    useThrottle: boolean;
    throttleDuration: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<Record<string, any>> & Record<string, any>;
}) & import('vue').Plugin;
export declare const AButtonGroup: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('packages/core').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('packages/core').ButtonType>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('packages/core').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('packages/core').ButtonType>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: import('vue').PropType<import('packages/core').ButtonSize>;
    };
    type: {
        type: import('vue').PropType<import('packages/core').ButtonType>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './type.d';
