import{G as n}from"./index-DiukUMmR.js";import{M as o}from"./Button.vue-DOVYKMB_.js";import"./vue.esm-bundler-DWx66a-0.js";const i={title:"Components/Alert",component:n,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["info","success","warning","error"],description:"警告提示的类型"},showIcon:{control:{type:"boolean"},description:"是否显示图标"},closable:{control:{type:"boolean"},description:"是否可关闭"},title:{control:{type:"text"},description:"标题"},banner:{control:{type:"boolean"},description:"是否用作顶部公告"},center:{control:{type:"boolean"},description:"文字是否居中"}}},t={args:{type:"info",closable:!0,banner:!1,center:!1,default:"Alert Content",title:"Alert Title"},render:l=>({components:{AAlert:n,AButton:o},setup(){return{args:l}},template:`
      <a-alert
        :type="args.type"
        :closable="args.closable"
        :banner="args.banner"
        :center="args.center"
        :show-icon="args.showIcon"
        :title="args.title"
      >
        <template #title>
          <span v-html="args.title"></span>
        </template>
        <template #default>
          <span v-html="args.default"></span>
        </template>
        <template #action>
          <a-button type="primary" size="small">查看</a-button>
          <a-button type="primary" status="danger" size="small">删除</a-button>
        </template>
      </a-alert>
    `})};var e,a,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    type: 'info',
    closable: true,
    banner: false,
    center: false,
    default: 'Alert Content',
    title: 'Alert Title'
  },
  render: (args: any) => ({
    components: {
      AAlert,
      AButton
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
          <span v-html="args.title"></span>
        </template>
        <template #default>
          <span v-html="args.default"></span>
        </template>
        <template #action>
          <a-button type="primary" size="small">查看</a-button>
          <a-button type="primary" status="danger" size="small">删除</a-button>
        </template>
      </a-alert>
    \`
  })
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,i as default};
