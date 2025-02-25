import{w as s}from"./vue.esm-bundler-CexWwosR.js";import"./index-CgBX6OQU.js";import{M as m}from"./button.vue-BPYZn5EQ.js";function c(e){document&&(document.documentElement.style.setProperty("--primary-color",e.primary??""),document.documentElement.style.setProperty("--success-color",e.success??""),document.documentElement.style.setProperty("--warning-color",e.warning??""),document.documentElement.style.setProperty("--info-color",e.info??""))}const i={title:"Components/Theme",argTypes:{primary:{control:{type:"color"}},success:{control:{type:"color"}},warning:{control:{type:"color"}},danger:{control:{type:"color"}},info:{control:{type:"color"}}},tags:["autodocs"]},r={args:{primary:"#165dff",success:"#00b42a",warning:"#ff7d00",danger:"#f53f3f",info:"#909399"},render:e=>({components:{AButton:m},setup(){return s(()=>e,n=>{c({primary:n.primary})},{immediate:!0,deep:!0}),{args:e}},template:`
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const d=["Default"];export{r as Default,d as __namedExportsOrder,i as default};
