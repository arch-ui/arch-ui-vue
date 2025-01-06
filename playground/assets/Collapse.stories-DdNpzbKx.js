import{L as E,h as j,T as A,w as B}from"./index-DiukUMmR.js";import{d as T,f as z,y as F,w as G,p as H,o as D,m as S,q as v,n,k as i,e as b,b as O,z as m,s as f,j as q,A as J,B as M,T as P,C as Q,D as R,E as U,F as W,G as X}from"./vue.esm-bundler-DWx66a-0.js";const K=Symbol("collapseContext"),y="collapse",Y=T({name:E(y),__name:"Collapse",props:{modelValue:{},activeKeys:{},accordion:{type:Boolean}},emits:["update:modelValue","change"],setup(e,{emit:l}){const d=B(y),t=e,r=l,s=z(t.modelValue??t.activeKeys);function p(a){if(!s.value||s.value.length===0)return;let o=[...s.value];if(t.accordion){o=[o[0]===a?"":a],c(o);return}const h=o.indexOf(a);h>-1?o.splice(h,1):o.push(a),c(o)}function c(a){s.value=a,r("update:modelValue",a),r("change",a)}return F(()=>{t.accordion&&s.value.length>1&&(console.warn("在手风琴模式下，不能使用多个激活面板"),s.value.splice(1))}),G(()=>t.modelValue,a=>{c(a)}),H(K,{activeKeys:s,handleItemClick:p}),(a,o)=>(D(),S("div",{class:n(`${i(d)}`)},[v(a.$slots,"default")],2))}}),g=e=>e.style.height="0px",C=e=>e.style.height=`${e.scrollHeight}px`,_=e=>e.style.height="",$=e=>e.style.overflow="hidden",k=e=>e.style.overflow="",Z={beforeEnter(e){g(e),$(e)},enter:e=>C(e),afterEnter(e){_(e),k(e)},beforeLeave(e){C(e),$(e)},leave:e=>g(e),afterLeave(e){_(e),k(e)}},ee=["id"],ae=["id"],w="collapse-item",se=T({name:E(w),__name:"CollapseItem",props:{header:{},disabled:{type:Boolean}},setup(e){const l=B(w),d=X(),t=b(()=>d==null?void 0:d.vnode.key),r=e,s=O(K,void 0),p=b(()=>{var a;return(a=s==null?void 0:s.activeKeys.value)==null?void 0:a.includes(t.value)});function c(){r.disabled||s==null||s.handleItemClick(t.value)}return(a,o)=>(D(),S("div",{class:n({[`${i(l)}`]:i(l),"is-disabled":a.disabled})},[m("div",{id:`item-header-${t.value}`,class:n({[`${i(l)}__header`]:`${i(l)}__header`,"is-disabled":a.disabled,"is-active":p.value}),onClick:c},[f(j,{icon:"caret-right",class:"header-angle"}),m("span",{class:n(`${i(l)}__title`)},[v(a.$slots,"title",{},()=>[Q(R(a.header),1)])],2)],10,ee),f(P,J({name:"slide"},M(i(Z))),{default:q(()=>[U(m("div",{class:n(`${i(l)}__wapper`)},[m("div",{class:n(`${i(l)}__content`),id:`item-content-${t.value}`},[v(a.$slots,"default")],10,ae)],2),[[W,p.value]])]),_:3},16)],2))}}),L=A(Y),N=A(se),oe={title:"Components/Collapse",component:L,subcomponents:{ACollapseItem:N},tags:["autodocs"]},u={render:e=>({components:{ACollapse:L,ACollapseItem:N},setup(){return{args:e}},template:`
    <a-collapse v-bind="args">
      <a-collapse-item key="a" header="Title a">
        <div>this is content a</div>
      </a-collapse-item>
      <a-collapse-item key="b" header="title b">
        <div>this is content b2<br>this is content b2</div>
      </a-collapse-item>
      <a-collapse-item key="c" header="title c  disable" disabled>
        <div>this is content c</div>
      </a-collapse-item>
    </a-collapse>
    `}),args:{accordion:!0,modelValue:["a","b"]}};var V,x,I;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      ACollapse,
      ACollapseItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <a-collapse v-bind="args">
      <a-collapse-item key="a" header="Title a">
        <div>this is content a</div>
      </a-collapse-item>
      <a-collapse-item key="b" header="title b">
        <div>this is content b2<br>this is content b2</div>
      </a-collapse-item>
      <a-collapse-item key="c" header="title c  disable" disabled>
        <div>this is content c</div>
      </a-collapse-item>
    </a-collapse>
    \`
  }),
  args: {
    accordion: true,
    modelValue: ['a', 'b']
  }
}`,...(I=(x=u.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const ie=["Default"];export{u as Default,ie as __namedExportsOrder,oe as default};
