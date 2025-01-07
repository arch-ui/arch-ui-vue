---
search: false
next:
  link: /components/button
  text: Button 按钮
---

# 类 Arco Design UI 库

## 安装

```bash
npm i @arch-design/arch-ui-vue --save
```

## 开始使用

**全局使用**

```js
// 引入所有组件
import ArchUI from "@arch-design/arch-ui-vue";

import App from "./App.vue";
// 全局使用
createApp(App).use(ArchUI).mount("#app");
```

```vue
<template>
  <a-button>我是 Button</a-button>
</template>
```

**单个导入**

Arch-UI 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
  <a-button>我是 Button</a-button>
</template>
<script>
import { AButton } from "@arch-design/arch-ui-vue";
export default {
  components: { AButton },
};
</script>
```


::: api-table src=components/Button/types.ts
:::

## 亮点

::: details

- Vite + Vitest + Vitepress 工具链
- monorepo 分包管理
- github actions 实现 CI/CD 自动化部署
- 大模型辅助：使用大模型辅助完成需求分析，设计思路，快速实现组件，提升开发效率。
- 当然，也会展示 发布“开箱即用” 的 npm 包
  :::