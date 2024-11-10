import"./index-DQLiMaGX.js";import{S as I,h as O,N as A,y as S}from"./index-DAOYLv0K.js";import{d as B,b as j,w as z,p as H,o as E,e as K,f as u,n as v,u as r,g as L,j as q,k as F,l as d,m as f,q as G,s as J,t as M,T as Q,v as R,x as U,y as W,z as X}from"./vue.esm-bundler-Da_7A-mx.js";const P=(e,c)=>{const i=e.__vccOpts||e;for(const[a,s]of c)i[a]=s;return i},D=Symbol("collapseContext"),y="collapse",Y=B({name:I(y),__name:"Collapse",props:{modelValue:{},activeKeys:{},accordion:{type:Boolean}},emits:["update:modelValue","change"],setup(e,{emit:c}){const i=S(y),a=e,s=c,o=j(a.modelValue??a.activeKeys);a.accordion&&o.value.length>1&&console.warn("在手风琴模式下，不能使用多个激活面板");function m(t){if(console.log(o.value),console.log(a),!o.value||o.value.length===0)return;let n=[...o.value];if(a.accordion){n=[n[0]===t?"":t],l(n);return}const h=n.indexOf(t);h>-1?n.splice(h,1):n.push(t),l(n)}function l(t){o.value=t,s("update:modelValue",t),s("change",t)}return z(()=>a.modelValue,t=>{l(t)}),H(D,{activeKeys:o,handleItemClick:m}),(t,n)=>(E(),K("div",{class:v([r(i)])},[u(t.$slots,"default",{},void 0,!0)],2))}}),Z=P(Y,[["__scopeId","data-v-72ba0633"]]),g=e=>e.style.height="0px",_=e=>e.style.height=`${e.scrollHeight}px`,b=e=>e.style.height="",C=e=>e.style.overflow="hidden",k=e=>e.style.overflow="",ee={beforeEnter(e){g(e),C(e)},enter:e=>_(e),afterEnter(e){b(e),k(e)},beforeLeave(e){_(e),C(e)},leave:e=>g(e),afterLeave(e){b(e),k(e)}},ae=["id"],te={class:"${compPrefix}__title"},le={class:"${compPrefix}__wapper"},se=["id"],x="collapse-item",oe=B({name:I(x),__name:"CollapseItem",props:{key:{},header:{},disabled:{type:Boolean}},setup(e){const c=S(x),i=e,a=L(D,void 0),s=q();console.log(s);const o=F(()=>{var l;return(l=a==null?void 0:a.activeKeys.value)==null?void 0:l.includes(s.key)});function m(){i.disabled||a==null||a.handleItemClick(s.key)}return(l,t)=>(E(),K("div",{class:v({compPrefix:r(c),"is-disabled":l.disabled})},[d("div",{id:`item-header-${r(s).key}`,class:v({[`${r(c)}__header`]:`${r(c)}__header`,"is-disabled":l.disabled,"is-active":o.value}),onClick:m},[d("span",te,[u(l.$slots,"title",{},()=>[R(U(l.header),1)],!0)]),f(O,{icon:"angle-right",class:"header-angle"})],10,ae),f(Q,J({name:"slide"},M(r(ee))),{default:G(()=>[W(d("div",le,[d("div",{class:"${compPrefix}__content",id:`item-content-${r(s).key}`},[u(l.$slots,"default",{},void 0,!0)],8,se)],512),[[X,o.value]])]),_:3},16)],2))}}),ne=P(oe,[["__scopeId","data-v-fc57c8bd"]]),N=A(Z),T=A(ne),pe={title:"Example/Collapse",component:N,subcomponents:{ACollapseItem:T},tags:["autodocs"],argTypes:{}},ce=e=>`
<div style="margin:5px">
  ${e}
</div>
`,p={args:{accordion:!0,modelValue:["1"]},render:e=>({components:{ACollapse:N,ACollapseItem:T},setup(){return{args:e}},template:ce(`<a-collapse v-bind="args">
        <a-collapse-item key="1" header="title1">
          content1
        </a-collapse-item>
        <a-collapse-item key="2" header="title2" disabled>
          content2
        </a-collapse-item>
      </a-collapse>`)})};var $,w,V;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    accordion: true,
    modelValue: ['1']
  },
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
    template: container(\`<a-collapse v-bind="args">
        <a-collapse-item key="1" header="title1">
          content1
        </a-collapse-item>
        <a-collapse-item key="2" header="title2" disabled>
          content2
        </a-collapse-item>
      </a-collapse>\`)
  })
}`,...(V=(w=p.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const me=["Default"];export{p as Default,me as __namedExportsOrder,pe as default};
