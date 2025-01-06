# @arch-design/arch-ui-vue

类 arco-design UI库

## 预览

文档：[https://arch-desgin.github.io/arch-ui-vue/docs/](https://arch-desgin.github.io/arch-ui-vue/docs/)

演练场：[https://arch-desgin.github.io/arch-ui-vue/playground](https://arch-desgin.github.io/arch-ui-vue/playground)

## 亮点

这里简单记一下，包括针对这些亮点可能的提问：

- 使用Vue3 + TypeScript + Sass 开发
  - 类型提示良好
    - 疑问1: 为啥使用interface 而不是 type
  - 组件支持高度定制化
    - 疑问1: 为什么使用Design Token，能介绍下[Design Token](https://juejin.cn/post/7257708221360111675) 么
    - 疑问2: sass 的作用是什么，为什么要配置统一的前缀prefix
- 合理分配架构
  - 使用pnpm + monorepo
    - 疑问1：为什么使用pnpm + monorepo 而不是 yarn + lerna
    - 疑问2: 同样可以提高安装依赖的速度，yarn 和 pnpm 的区别是什么
    - 疑问3: 分包的作用是什么，为什么要分包
  - 分包为
    - components 组件包
    - core 核心包(一些工具和方法也在这)
    - docs 文档 (vitepress)
    - playground (storybook)
- 其他
  - npm script 运用
    - 使用 tsx xxx 运行 ts 脚本
    - 使用 useDevBuild.ts 切换 package.json 配置
    - 使用 createComponent.ts 自动创建组件
    - 知识点：npm script 生命周期
  - Github Action
    - push 后自动进行 lint、test检查
    - 打包 components 并 打包部署vitepress 和 storybook
    - 根据readme生成 index.html，并区分docs 和 playground 进行导航
