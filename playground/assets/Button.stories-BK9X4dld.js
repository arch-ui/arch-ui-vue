import{w as f,u as v,e as z}from"./index-BflBC_Ux.js";import"./index-BRXAtGvy.js";import{M as o,Q as w}from"./Button.vue-DAGarFHk.js";import"./vue.esm-bundler-D4nsrp9Q.js";const E={title:"Components/Button",tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["primary","secondary","outline","text"]},status:{control:{type:"select"},options:["default","success","warning","danger","info"]},size:{control:{type:"select"},options:["large","default","small","mini"]},disabled:{control:"boolean"},loading:{control:"boolean"},tag:{control:{type:"select"},options:["button","a","div"]},htmlType:{control:{type:"select"},options:["button","submit","reset"]},icon:{control:{type:"text"}},loadingIcon:{control:{type:"text"}}}},s=t=>`
<div style="margin:5px">
  ${t}
</div>
`,n={args:{default:"Button"},render:t=>({components:{AButton:o},setup(){return{args:t}},template:s(`
      <a-button 
                :type="args.type" 
                :status="args.status" 
                :size="args.size" 
                :disabled="args.disabled"
                :loading="args.loading"
                :icon="args.icon"
      >
        <template #default>
          {{args.default}}
        </template>
      </a-button>
      `)}),play:async({canvasElement:t,args:b,step:y})=>{const B=f(t);await y("click btn",async()=>{await v.click(B.getByRole("button"))}),z(b.onClick).toHaveBeenCalled()}},a={args:{loading:!0},render:t=>({components:{AButton:o},setup(){return{args:t}},template:s(`
      <a-button :loading="args.loading">图标按钮</a-button>
      `)})},e={args:{},render:t=>({components:{AButton:o,AButtonGroup:w},setup(){return{args:t}},template:s(`<a-button-group 
                :type="args.type" 
                :status="args.status" 
                :size="args.size" 
                :disabled="args.disabled"
                :loading="args.loading"
                :icon="args.icon"
      >
        <a-button round>13141</a-button>
        <a-button>13141</a-button>
        <a-button round>13141</a-button>
      </a-button-group>`)})};var r,u,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    default: 'Button'
  },
  render: (args: any) => ({
    components: {
      AButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
      <a-button 
                :type="args.type" 
                :status="args.status" 
                :size="args.size" 
                :disabled="args.disabled"
                :loading="args.loading"
                :icon="args.icon"
      >
        <template #default>
          {{args.default}}
        </template>
      </a-button>
      \`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click btn', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...(i=(u=n.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: (args: any) => ({
    components: {
      AButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
      <a-button :loading="args.loading">图标按钮</a-button>
      \`)
  })
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,d,m;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: (args: any) => ({
    components: {
      AButton,
      AButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`<a-button-group 
                :type="args.type" 
                :status="args.status" 
                :size="args.size" 
                :disabled="args.disabled"
                :loading="args.loading"
                :icon="args.icon"
      >
        <a-button round>13141</a-button>
        <a-button>13141</a-button>
        <a-button round>13141</a-button>
      </a-button-group>\`)
  })
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const G=["Default","ButtonIcon","ButtonGroup"];export{e as ButtonGroup,a as ButtonIcon,n as Default,G as __namedExportsOrder,E as default};
