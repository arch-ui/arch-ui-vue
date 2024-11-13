import"./index-DQLiMaGX.js";import{S,h as j,N as A,y as B}from"./index-CP73LF6h.js";import{d as E,b as z,w as L,p as q,o as D,e as K,f as v,n as i,u as n,g as f,j as F,k as u,l as y,m as G,q as J,t as M,T as P,s as Q,v as R,x as U,y as W,z as X}from"./vue.esm-bundler-MqSFIsM9.js";const N=(e,s)=>{const r=e.__vccOpts||e;for(const[l,c]of s)r[l]=c;return r},T=Symbol("collapseContext"),g="collapse",Y=E({name:S(g),__name:"Collapse",props:{modelValue:{},activeKeys:{},accordion:{type:Boolean}},emits:["update:modelValue","change"],setup(e,{emit:s}){const r=B(g),l=e,c=s,t=z(l.modelValue??l.activeKeys);l.accordion&&t.value.length>1&&console.warn("在手风琴模式下，不能使用多个激活面板");function p(a){if(!t.value||t.value.length===0)return;let o=[...t.value];if(l.accordion){o=[o[0]===a?"":a],d(o);return}const h=o.indexOf(a);h>-1?o.splice(h,1):o.push(a),d(o)}function d(a){t.value=a,c("update:modelValue",a),c("change",a)}return L(()=>l.modelValue,a=>{d(a)}),q(T,{activeKeys:t,handleItemClick:p}),(a,o)=>(D(),K("div",{class:i(`${n(r)}`)},[v(a.$slots,"default",{},void 0,!0)],2))}}),Z=N(Y,[["__scopeId","data-v-b0df3339"]]),_=e=>e.style.height="0px",b=e=>e.style.height=`${e.scrollHeight}px`,C=e=>e.style.height="",$=e=>e.style.overflow="hidden",k=e=>e.style.overflow="",ee={beforeEnter(e){_(e),$(e)},enter:e=>b(e),afterEnter(e){C(e),k(e)},beforeLeave(e){b(e),$(e)},leave:e=>_(e),afterLeave(e){C(e),k(e)}},ae=["id"],le=["id"],x="collapse-item",se=E({name:S(x),__name:"CollapseItem",props:{key:{},header:{},disabled:{type:Boolean}},setup(e){const s=B(x),r=X(),l=f(()=>r==null?void 0:r.vnode.key),c=e,t=F(T,void 0),p=f(()=>{var a;return(a=t==null?void 0:t.activeKeys.value)==null?void 0:a.includes(l.value)});function d(){c.disabled||t==null||t.handleItemClick(l.value)}return(a,o)=>(D(),K("div",{class:i({[`${n(s)}`]:n(s),"is-disabled":a.disabled})},[u("div",{id:`item-header-${l.value}`,class:i({[`${n(s)}__header`]:`${n(s)}__header`,"is-disabled":a.disabled,"is-active":p.value}),onClick:d},[y(j,{icon:"caret-right",class:"header-angle"}),u("span",{class:i(`${n(s)}__title`)},[v(a.$slots,"title",{},()=>[Q(R(a.header),1)],!0)],2)],10,ae),y(P,J({name:"slide"},M(n(ee))),{default:G(()=>[U(u("div",{class:i(`${n(s)}__wapper`)},[u("div",{class:i(`${n(s)}__content`),id:`item-content-${l.value}`},[v(a.$slots,"default",{},void 0,!0)],10,le)],2),[[W,p.value]])]),_:3},16)],2))}}),te=N(se,[["__scopeId","data-v-c5ba902e"]]),H=A(Z),O=A(te),ie={title:"Example/Collapse",component:H,subcomponents:{ACollapseItem:O},tags:["autodocs"],argTypes:{}},oe=e=>`
<div style="margin:5px">
  ${e}
</div>
`,m={args:{accordion:!0,modelValue:["1"]},render:e=>({components:{ACollapse:H,ACollapseItem:O},setup(){return{args:e}},template:oe(`<a-collapse v-bind="args">
        <a-collapse-item key="1" header="title1">
          content1
        </a-collapse-item>
        <a-collapse-item key="2" header="title2" disabled>
          content2
        </a-collapse-item>
      </a-collapse>`)})};var w,V,I;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(V=m.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const de=["Default"];export{m as Default,de as __namedExportsOrder,ie as default};
