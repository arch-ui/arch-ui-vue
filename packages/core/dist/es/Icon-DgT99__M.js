import { defineComponent as i, computed as a, openBlock as c, createElementBlock as m, mergeProps as y, unref as o, createVNode as B, normalizeProps as f, guardReactiveProps as u } from "vue";
import { g as d, a as P, w as g } from "./utils-DQ7ZUJPF.js";
import { FontAwesomeIcon as v } from "@fortawesome/vue-fontawesome";
import { o as b } from "./vendor-BVNR0mO6.js";
const p = "icon", h = /* @__PURE__ */ i({
  name: d(p),
  inheritAttrs: !1,
  __name: "Icon",
  props: {
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: {},
    icon: {},
    mask: {},
    listItem: { type: Boolean },
    pull: {},
    pulse: { type: Boolean },
    rotation: {},
    swapOpacity: { type: Boolean },
    size: {},
    spin: { type: Boolean },
    transform: {},
    symbol: { type: [Boolean, String] },
    title: {},
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean },
    type: {},
    color: {}
  },
  setup(s) {
    const t = P(p), n = s, l = a(() => b(n, ["type", "color"])), r = a(() => ({
      color: n.color ?? void 0
    }));
    return (e, I) => (c(), m("i", y({
      class: [`${o(t)}`, e.type && `${o(t)}-${e.type}`],
      style: r.value
    }, e.$attrs), [
      B(o(v), f(u(l.value)), null, 16)
    ], 16));
  }
}), $ = g(h);
export {
  $ as A,
  h as _
};
