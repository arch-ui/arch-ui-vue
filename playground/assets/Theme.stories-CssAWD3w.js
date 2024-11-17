import{w as m}from"./vue.esm-bundler-Ck3M4qld.js";import{W as c}from"./index-DVaQ6DbK.js";function s(e){document&&(document.documentElement.style.setProperty("--primary-color",e.primary??""),document.documentElement.style.setProperty("--success-color",e.success??""),document.documentElement.style.setProperty("--warning-color",e.warning??""),document.documentElement.style.setProperty("--info-color",e.info??""))}const u={title:"Example/Theme",argTypes:{primary:{control:{type:"color"}},success:{control:{type:"color"}},warning:{control:{type:"color"}},danger:{control:{type:"color"}},info:{control:{type:"color"}}}},r={args:{primary:"#165dff",success:"#00b42a",warning:"#ff7d00",danger:"#f53f3f",info:"#909399"},render:e=>({components:{AButton:c},setup(){return m(()=>e,n=>{s({primary:n.primary})},{immediate:!0,deep:!0}),{args:e}},template:`
      <label>主题色:</label><input type="color" v-model="args.primary" /> <br><br>
      <a-button type="primary">测试按钮</a-button>
    `})};var t,o,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    primary: '#165dff',
    success: '#00b42a',
    warning: '#ff7d00',
    danger: '#f53f3f',
    info: '#909399'
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const i=["Default"];export{r as Default,i as __namedExportsOrder,u as default};
