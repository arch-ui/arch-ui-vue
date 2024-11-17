import{w as v,u as x,e as z}from"./index-BflBC_Ux.js";import{W as o,x as f}from"./index-DVaQ6DbK.js";import"./vue.esm-bundler-Ck3M4qld.js";const E={title:"Example/Button",tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["primary","secondary","outline","text"]},status:{control:{type:"select"},options:["default","success","warning","danger","info"]},size:{control:{type:"select"},options:["large","default","small","mini"]},disabled:{control:"boolean"},loading:{control:"boolean"},tag:{control:{type:"select"},options:["button","a","div"]},htmlType:{control:{type:"select"},options:["button","submit","reset"]},icon:{control:{type:"text"}},loadingIcon:{control:{type:"text"}}}},s=t=>`
<div style="margin:5px">
  ${t}
</div>
`,n={args:{content:"Button"},render:t=>({components:{AButton:o},setup(){return{args:t}},template:s(`
      <a-button 
                :type="args.type" 
                :status="args.status" 
                :size="args.size" 
                :disabled="args.disabled"
                :loading="args.loading"
                :icon="args.icon"
      >
        {{args.content}}
      </a-button>
      `)}),play:async({canvasElement:t,args:m,step:y})=>{const B=v(t);await y("click btn",async()=>{await x.click(B.getByRole("button"))}),z(m.onClick).toHaveBeenCalled()}},a={args:{loading:!0},render:t=>({components:{AButton:o},setup(){return{args:t}},template:s(`
      <a-button :loading="args.loading">图标按钮</a-button>
      `)})},e={args:{},render:t=>({components:{AButton:o,AButtonGroup:f},setup(){return{args:t}},template:s(`<a-button-group 
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
      </a-button-group>`)})};var r,u,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    content: 'Button'
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
        {{args.content}}
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
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var i,l,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,d,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(d=e.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const C=["Default","ButtonIcon","ButtonGroup"];export{e as ButtonGroup,a as ButtonIcon,n as Default,C as __namedExportsOrder,E as default};
