import{F as o}from"./index-BRXAtGvy.js";import"./vue.esm-bundler-D4nsrp9Q.js";const c={title:"Components/Alert",component:o,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["info","success","warning","error"],description:"警告提示的类型"},showIcon:{control:{type:"boolean"},description:"是否显示图标"},closable:{control:{type:"boolean"},description:"是否可关闭"},title:{control:{type:"text"},description:"标题"},banner:{control:{type:"boolean"},description:"是否用作顶部公告"},center:{control:{type:"boolean"},description:"文字是否居中"}}},e={args:{title:"131313113131",default:"121313",type:"info",closable:!0,banner:!1,center:!1},render:s=>({components:{AAlert:o},setup(){return{args:s}},template:`
      <a-alert
        :type="args.type"
        :closable="args.closable"
        :banner="args.banner"
        :center="args.center"
        :show-icon="args.showIcon"
        :title="args.title"
      >
        <template #title>
          {{args.title}}
        </template>
        <template #default>
          {{args.default}}
        </template>
      </a-alert>
    `})};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    title: '131313113131',
    default: '121313',
    type: 'info',
    closable: true,
    banner: false,
    center: false
  },
  render: (args: any) => ({
    components: {
      AAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <a-alert
        :type="args.type"
        :closable="args.closable"
        :banner="args.banner"
        :center="args.center"
        :show-icon="args.showIcon"
        :title="args.title"
      >
        <template #title>
          {{args.title}}
        </template>
        <template #default>
          {{args.default}}
        </template>
      </a-alert>
    \`
  })
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,c as default};
