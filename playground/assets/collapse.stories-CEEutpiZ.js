import{L as I,h as N,T as A,w as B}from"./index-CgBX6OQU.js";import{d as S,f as j,B as z,w as F,p as G,o as D,m as T,q as v,n,k as i,e as b,b as O,z as m,s as f,j as q,C as J,D as M,A as P,E as Q,F as R,G as U,H as W,I as X}from"./vue.esm-bundler-CexWwosR.js";const K=Symbol("collapseContext"),g="collapse",Y=S({name:I(g),__name:"collapse",props:{modelValue:{},activeKeys:{},accordion:{type:Boolean}},emits:["update:modelValue","change"],setup(e,{emit:l}){const d=B(g),t=e,r=l,s=j(t.modelValue??t.activeKeys);function p(a){if(!s.value||s.value.length===0)return;let o=[...s.value];if(t.accordion){o=[o[0]===a?"":a],c(o);return}const h=o.indexOf(a);h>-1?o.splice(h,1):o.push(a),c(o)}function c(a){s.value=a,r("update:modelValue",a),r("change",a)}return z(()=>{t.accordion&&s.value.length>1&&(console.warn("在手风琴模式下，不能使用多个激活面板"),s.value.splice(1))}),F(()=>t.modelValue,a=>{c(a)}),G(K,{activeKeys:s,handleItemClick:p}),(a,o)=>(D(),T("div",{class:n(`${i(d)}`)},[v(a.$slots,"default")],2))}}),y=e=>e.style.height="0px",_=e=>e.style.height=`${e.scrollHeight}px`,C=e=>e.style.height="",$=e=>e.style.overflow="hidden",k=e=>e.style.overflow="",Z={beforeEnter(e){y(e),$(e)},enter:e=>_(e),afterEnter(e){C(e),k(e)},beforeLeave(e){_(e),$(e)},leave:e=>y(e),afterLeave(e){C(e),k(e)}},ee=["id"],ae=["id"],w="collapse-item",se=S({name:I(w),__name:"collapse-item",props:{header:{},disabled:{type:Boolean}},setup(e){const l=B(w),d=X(),t=b(()=>d==null?void 0:d.vnode.key),r=e,s=O(K,void 0),p=b(()=>{var a;return(a=s==null?void 0:s.activeKeys.value)==null?void 0:a.includes(t.value)});function c(){r.disabled||s==null||s.handleItemClick(t.value)}return(a,o)=>(D(),T("div",{class:n({[`${i(l)}`]:i(l),"is-disabled":a.disabled})},[m("div",{id:`item-header-${t.value}`,class:n({[`${i(l)}__header`]:`${i(l)}__header`,"is-disabled":a.disabled,"is-active":p.value}),onClick:c},[f(N,{icon:"caret-right",class:"header-angle"}),m("span",{class:n(`${i(l)}__title`)},[v(a.$slots,"title",{},()=>[Q(R(a.header),1)])],2)],10,ee),f(P,J({name:"slide"},M(i(Z))),{default:q(()=>[U(m("div",{class:n(`${i(l)}__wapper`)},[m("div",{class:n(`${i(l)}__content`),id:`item-content-${t.value}`},[v(a.$slots,"default")],10,ae)],2),[[W,p.value]])]),_:3},16)],2))}}),H=A(Y),L=A(se),oe={title:"Components/Collapse",component:H,subcomponents:{ACollapseItem:L},tags:["autodocs"]},u={render:e=>({components:{ACollapse:H,ACollapseItem:L},setup(){return{args:e}},template:`
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
    `}),args:{accordion:!0,modelValue:["a","b"]}};var V,x,E;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(x=u.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const ie=["Default"];export{u as Default,ie as __namedExportsOrder,oe as default};
