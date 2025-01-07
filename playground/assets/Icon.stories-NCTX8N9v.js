import{l as b,f as h,a as E,b as w,c as A,d as D,x as C}from"./index-hqmhLQ0D.js";import"./vue.esm-bundler-DWx66a-0.js";b.add(h,E,w,A,D);const O={title:"Components/Icon",component:C,tags:["autodocs"],argTypes:{icon:{control:{type:"select"},options:["coffee","circle-info","circle-check","circle-exclamation","circle-xmark"],description:"图标名称"},color:{control:"color",description:"图标颜色"},type:{control:{type:"select"},options:["primary","success","warning","danger","info"],description:"图标类型"}}},r={args:{icon:"coffee",color:"#000000"},render:S=>({components:{AIcon:C},setup(){return{args:S}},template:`
      <a-icon
        :icon="args.icon"
        :color="args.color"
        :type="args.type"
      />
    `})},c={args:{icon:"circle-info",color:"#007bff",type:"info"}},o={args:{icon:"circle-check",color:"#28a745",type:"success"}},e={args:{icon:"circle-exclamation",color:"#ffc107",type:"warning"}},a={args:{icon:"circle-xmark",color:"#dc3545",type:"danger"}};var n,s,t;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    icon: 'coffee',
    color: '#000000'
  },
  render: (args: any) => ({
    components: {
      AIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <a-icon
        :icon="args.icon"
        :color="args.color"
        :type="args.type"
      />
    \`
  })
}`,...(t=(s=r.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var i,l,p;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    icon: 'circle-info',
    color: '#007bff',
    type: 'info'
  }
}`,...(p=(l=c.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,f,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: 'circle-check',
    color: '#28a745',
    type: 'success'
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var d,u,y;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    icon: 'circle-exclamation',
    color: '#ffc107',
    type: 'warning'
  }
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var I,x,k;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: 'circle-xmark',
    color: '#dc3545',
    type: 'danger'
  }
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const T=["Default","InfoIcon","SuccessIcon","WarningIcon","ErrorIcon"];export{r as Default,a as ErrorIcon,c as InfoIcon,o as SuccessIcon,e as WarningIcon,T as __namedExportsOrder,O as default};
