import{P as A,h as j,T as E,g as T}from"./index-DnESmTSk.js";import{d as B,b as z,e as L,w as P,p as q,o as S,f as D,g as v,n as d,u as i,j as b,k as G,l as u,m as f,q as J,s as M,t as Q,T as R,v as U,x as W,y as F,z as X,A as Y}from"./vue.esm-bundler-Ck3M4qld.js";const K=(e,l)=>{const c=e.__vccOpts||e;for(const[s,n]of l)c[s]=n;return c},H=Symbol("collapseContext"),g="collapse",Z=B({name:A(g),__name:"Collapse",props:{modelValue:{},activeKeys:{},accordion:{type:Boolean}},emits:["update:modelValue","change"],setup(e,{emit:l}){const c=T(g),s=e,n=l,t=z(s.modelValue??s.activeKeys);function p(a){if(!t.value||t.value.length===0)return;let o=[...t.value];if(s.accordion){o=[o[0]===a?"":a],r(o);return}const h=o.indexOf(a);h>-1?o.splice(h,1):o.push(a),r(o)}function r(a){t.value=a,n("update:modelValue",a),n("change",a)}return L(()=>{s.accordion&&t.value.length>1&&(console.warn("在手风琴模式下，不能使用多个激活面板"),t.value.splice(1))}),P(()=>s.modelValue,a=>{r(a)}),q(H,{activeKeys:t,handleItemClick:p}),(a,o)=>(S(),D("div",{class:d(`${i(c)}`)},[v(a.$slots,"default",{},void 0,!0)],2))}}),ee=K(Z,[["__scopeId","data-v-3ac73b9b"]]),y=e=>e.style.height="0px",_=e=>e.style.height=`${e.scrollHeight}px`,C=e=>e.style.height="",$=e=>e.style.overflow="hidden",k=e=>e.style.overflow="",ae={beforeEnter(e){y(e),$(e)},enter:e=>_(e),afterEnter(e){C(e),k(e)},beforeLeave(e){_(e),$(e)},leave:e=>y(e),afterLeave(e){C(e),k(e)}},se=["id"],te=["id"],w="collapse-item",le=B({name:A(w),__name:"CollapseItem",props:{header:{},disabled:{type:Boolean}},setup(e){const l=T(w),c=Y(),s=b(()=>c==null?void 0:c.vnode.key),n=e,t=G(H,void 0),p=b(()=>{var a;return(a=t==null?void 0:t.activeKeys.value)==null?void 0:a.includes(s.value)});function r(){n.disabled||t==null||t.handleItemClick(s.value)}return(a,o)=>(S(),D("div",{class:d({[`${i(l)}`]:i(l),"is-disabled":a.disabled})},[u("div",{id:`item-header-${s.value}`,class:d({[`${i(l)}__header`]:`${i(l)}__header`,"is-disabled":a.disabled,"is-active":p.value}),onClick:r},[f(j,{icon:"caret-right",class:"header-angle"}),u("span",{class:d(`${i(l)}__title`)},[v(a.$slots,"title",{},()=>[U(W(a.header),1)],!0)],2)],10,se),f(R,M({name:"slide"},Q(i(ae))),{default:J(()=>[F(u("div",{class:d(`${i(l)}__wapper`)},[u("div",{class:d(`${i(l)}__content`),id:`item-content-${s.value}`},[v(a.$slots,"default",{},void 0,!0)],10,te)],2),[[X,p.value]])]),_:3},16)],2))}}),oe=K(le,[["__scopeId","data-v-864ef258"]]),N=E(ee),O=E(oe),ne={title:"Example/Collapse",component:N,subcomponents:{ACollapseItem:O},tags:["autodocs"]},m={render:e=>({components:{ACollapse:N,ACollapseItem:O},setup(){return{args:e}},template:`
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
    `}),args:{accordion:!0,modelValue:["a","b"]}};var x,V,I;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(I=(V=m.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const de=["Default"];export{m as Default,de as __namedExportsOrder,ne as default};
