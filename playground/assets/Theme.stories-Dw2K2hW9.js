import{w as m}from"./vue.esm-bundler-Dx2DBTFS.js";import{A as p}from"./index-C614jT60.js";function s(e){document&&(document.documentElement.style.setProperty("--primary-color",e.primary??""),document.documentElement.style.setProperty("--success-color",e.success??""),document.documentElement.style.setProperty("--warning-color",e.warning??""),document.documentElement.style.setProperty("--info-color",e.info??""))}const u={title:"Example/Theme",argTypes:{primary:{control:{type:"color"}},success:{control:{type:"color"}},warning:{control:{type:"color"}},info:{control:{type:"color"}}}},r={args:{primary:"#165dff"},render:e=>({components:{AButton:p},setup(){return m(()=>e,a=>{s({primary:a.primary})},{immediate:!0,deep:!0}),{args:e}},template:`
      <label>主题色:</label><input type="color" v-model="args.primary" /> <br><br>
      <a-button type="primary">测试按钮</a-button>
    `})};var t,n,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    primary: '#165dff'
  },
  render: (args: any) => ({
    components: {
      AButton
    },
    setup() {
      watch(() => args, val => {
        updateThemeToken({
          primary: val.primary
        });
      }, {
        immediate: true,
        deep: true
      });
      return {
        args
      };
    },
    template: \`
      <label>主题色:</label><input type="color" v-model="args.primary" /> <br><br>
      <a-button type="primary">测试按钮</a-button>
    \`
  })
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const i=["Default"];export{r as Default,i as __namedExportsOrder,u as default};
