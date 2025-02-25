import{L as p,T as l}from"./index-CgBX6OQU.js";import{d as m,o as u,g as d,j as i,q as c}from"./vue.esm-bundler-CexWwosR.js";import{y as f}from"./trigger.vue-COSFIhoQ.js";const g="tooltip",_=m({name:p(g),__name:"tooltip",setup(e){return(s,C)=>(u(),d(f,{"animation-name":"zoom-in-fade-out"},{default:i(()=>[c(s.$slots,"default")]),_:3}))}}),r=l(_),k={title:"Components/Tooltip",component:r,tags:["autodocs"]},t={args:{default:"Content"},render:e=>({components:{ATooltip:r},setup(){return{args:e}},template:`
      <a-tooltip>
        <template #default>
          <span v-html="args.default"></span>
        </template>
      </a-tooltip>
    `})};var o,n,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    default: 'Content'
  },
  render: (args: any) => ({
    components: {
      ATooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <a-tooltip>
        <template #default>
          <span v-html="args.default"></span>
        </template>
      </a-tooltip>
    \`
  })
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const v=["Default"];export{t as Default,v as __namedExportsOrder,k as default};
