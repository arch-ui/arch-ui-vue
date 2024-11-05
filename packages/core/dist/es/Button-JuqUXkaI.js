import { g as $, a as P, w as _ } from "./utils-DQ7ZUJPF.js";
import { defineComponent as N, useSlots as w, inject as A, computed as s, ref as D, openBlock as m, createBlock as h, resolveDynamicComponent as E, normalizeClass as S, unref as l, withCtx as I, renderSlot as f, createVNode as K, normalizeStyle as k, createCommentVNode as V, provide as X, reactive as Y, toRef as p, createElementBlock as j } from "vue";
import { _ as z } from "./Icon-DgT99__M.js";
import { t as q } from "./vendor-BVNR0mO6.js";
const G = Symbol("BUTTON_GROUP_CTX_KEY"), C = "button", F = /* @__PURE__ */ N({
  name: $(C),
  __name: "Button",
  props: {
    tag: { default: "button" },
    type: { default: "primary" },
    size: {},
    nativeType: { default: "button" },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    icon: {},
    circle: { type: Boolean },
    plain: { type: Boolean },
    round: { type: Boolean },
    loadingIcon: {},
    useThrottle: { type: Boolean, default: !0 },
    throttleDuration: { default: 500 }
  },
  emits: ["click"],
  setup(i, { expose: r, emit: a }) {
    const n = P(C), t = i, O = a, R = w(), o = A(G, void 0), d = s(() => (o == null ? void 0 : o.size) ?? (t == null ? void 0 : t.size) ?? ""), u = s(() => (o == null ? void 0 : o.type) ?? (t == null ? void 0 : t.type) ?? ""), c = s(() => (o == null ? void 0 : o.disabled) || (t == null ? void 0 : t.disabled) || !1), y = D(), g = s(() => ({ marginRight: R.default ? "6px" : "0px" })), B = (e) => O("click", e), U = q(B, t.throttleDuration);
    return r({
      ref: y,
      disabled: c,
      size: d,
      type: u
    }), (e, b) => (m(), h(E(e.tag), {
      ref_key: "_ref",
      ref: y,
      type: e.tag === "button" ? e.nativeType : 0,
      disabled: c.value || e.loading ? !0 : 0,
      class: S({
        [`${l(n)}`]: l(n),
        [`${l(n)}--${u.value}`]: u.value,
        [`${l(n)}--${d.value}`]: d.value,
        "is-plain": e.plain,
        "is-round": e.round,
        "is-circle": e.circle,
        "is-disabled": c.value,
        "is-loading": e.loading
      }),
      onClick: b[0] || (b[0] = (v) => e.useThrottle ? l(U)(v) : B(v))
    }, {
      default: I(() => [
        e.loading ? f(e.$slots, "loading", { key: 0 }, () => [
          K(z, {
            class: "loading-icon",
            icon: e.loadingIcon ?? "spinner",
            size: "1x",
            style: k(g.value),
            spin: ""
          }, null, 8, ["icon", "style"])
        ]) : e.icon ? (m(), h(z, {
          key: 1,
          icon: e.icon,
          style: k(g.value),
          size: "1x"
        }, null, 8, ["icon", "style"])) : V("", !0),
        f(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "disabled", "class"]));
  }
}), T = "button-group", H = /* @__PURE__ */ N({
  name: $(T),
  __name: "ButtonGroup",
  props: {
    size: {},
    type: {},
    disabled: { type: Boolean }
  },
  setup(i) {
    const r = P(T), a = i;
    return X(
      G,
      Y({
        size: p(a, "size"),
        type: p(a, "type"),
        disabled: p(a, "disabled")
      })
    ), (n, t) => (m(), j("div", {
      class: S(l(r))
    }, [
      f(n.$slots, "default")
    ], 2));
  }
}), W = _(F), Z = _(H);
export {
  W as A,
  Z as a
};
