import{b as l,c as o}from"./index-C614jT60.js";import"./vue.esm-bundler-Dx2DBTFS.js";const d={title:"Example/Collapse",component:l,subcomponents:{ACollapseItem:o},tags:["autodocs"]},e={render:i=>({components:{ACollapse:l,ACollapseItem:o},setup(){return{args:i}},template:`
    <a-collapse v-bind="args">
      <a-collapse-item key="a" header="Title a">
        <div>this is content a</div>
      </a-collapse-item>
      <a-collapse-item key="b" header="title b">
        <div>this is content b2<br>this is content b2</div>
      </a-collapse-item>
      <a-collapse-item key="c" header="title c  disable" disabled>
        <div>this is content c</div>
      </a-collapse-item>
    </a-collapse>
    `}),args:{accordion:!0,modelValue:["a","b"]}};var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      ACollapse,
      ACollapseItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <a-collapse v-bind="args">
      <a-collapse-item key="a" header="Title a">
        <div>this is content a</div>
      </a-collapse-item>
      <a-collapse-item key="b" header="title b">
        <div>this is content b2<br>this is content b2</div>
      </a-collapse-item>
      <a-collapse-item key="c" header="title c  disable" disabled>
        <div>this is content c</div>
      </a-collapse-item>
    </a-collapse>
    \`
  }),
  args: {
    accordion: true,
    modelValue: ['a', 'b']
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const n=["Default"];export{e as Default,n as __namedExportsOrder,d as default};
