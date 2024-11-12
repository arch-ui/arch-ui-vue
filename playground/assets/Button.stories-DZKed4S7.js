import{f as B,w as f,u as T,e as w}from"./index-DQLiMaGX.js";import{e as a,t as x}from"./index-jxdrVlBr.js";import"./vue.esm-bundler-MqSFIsM9.js";const C={title:"Example/Button",component:a,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},size:{control:{type:"select"},options:["large","default","small",""]},plain:{control:"boolean"},circle:{control:"boolean"},round:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"},useThrottle:{control:"boolean"},throttleDuration:{control:"number"},tag:{control:{type:"select"},options:["button","a","div"]},nativeType:{control:{type:"select"},options:["button","submit","reset",""]},icon:{control:{type:"text"}},loadingIcon:{control:{type:"text"}}},args:{onClick:B()}},r=t=>`
<div style="margin:5px">
  ${t}
</div>
`,e={argTypes:{content:{control:{type:"text"}}},args:{type:"primary",content:"Button"},render:t=>({components:{AButton:a},setup(){return{args:t}},template:r('<a-button data-testid="story-test-btn" v-bind="args">{{args.content}}</a-button>')}),play:async({canvasElement:t,args:y,step:m})=>{const v=f(t);await m("click btn",async()=>{await T.click(v.getByRole("button"))}),w(y.onClick).toHaveBeenCalled()}},o={args:{icon:"search",circle:!0,plain:!0},render:t=>({components:{AButton:a},setup(){return{args:t}},template:r('<a-button data-testid="story-test-btn" v-bind="args"></a-button>')})},n={argTypes:{groupType:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},groupSize:{control:{type:"select"},options:["large","default","small",""]},groupDisabled:{control:"boolean"}},args:{},render:t=>({components:{AButton:a,AButtonGroup:x},setup(){return{args:t}},template:r(`<a-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
        <a-button round>13141</a-button>
        <a-button>13141</a-button>
        <a-button round>13141</a-button>
      </a-button-group>`)})};var s,c,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  argTypes: {
    content: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    type: 'primary',
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
    template: container(\`<a-button data-testid="story-test-btn" v-bind="args">{{args.content}}</a-button>\`)
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
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,l,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    circle: true,
    plain: true
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
    template: container(\`<a-button data-testid="story-test-btn" v-bind="args"></a-button>\`)
  })
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var g,d,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: {
    groupType: {
      control: {
        type: 'select'
      },
      options: ['primary', 'success', 'warning', 'danger', 'info', '']
    },
    groupSize: {
      control: {
        type: 'select'
      },
      options: ['large', 'default', 'small', '']
    },
    groupDisabled: {
      control: 'boolean'
    }
  },
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
    template: container(\`<a-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
        <a-button round>13141</a-button>
        <a-button>13141</a-button>
        <a-button round>13141</a-button>
      </a-button-group>\`)
  })
}`,...(b=(d=n.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const D=["Default","Circle","ButtonGroup"];export{n as ButtonGroup,o as Circle,e as Default,D as __namedExportsOrder,C as default};
