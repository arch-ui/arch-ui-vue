import { f as n } from "./vendor-BVNR0mO6.js";
function f(r) {
  return (a) => n(r, (e) => {
    a.use(e);
  });
}
function u(r) {
  return r.install = (t) => {
    const a = r.name;
    t.component(a, r);
  }, r;
}
function s(r, t) {
  const a = t || "arch";
  return r ? `${a}-${r}` : a;
}
function c(r, t) {
  return i(s(r, t));
}
function i(r) {
  return r.replace(/-([a-z])/g, (t, a) => a.toUpperCase());
}
export {
  s as a,
  c as g,
  f as m,
  u as w
};
