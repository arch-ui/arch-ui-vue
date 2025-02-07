import { defineConfig } from 'vitepress';
import {
  containerPreview,
  componentPreview,
} from '@vitepress-demo-preview/plugin';
// import apiTable from "vitepress-api-table";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Arch-UI',
  description: '类 Arco Design UI 库',
  base: '/arch-ui-vue/docs', // 仓库名 + 页面路径前缀
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始使用', link: '/get-started' },
      { text: '组件', link: '/components/button' },
    ],
    search: {
      provider: 'local',
    },
    sidebar: [
      {
        text: '指南',
        collapsed: false,
        items: [{ text: '快速开始', link: '/get-started' }],
      },
      {
        text: '基础组件',
        collapsed: false,
        items: [{ text: 'Button 按钮', link: 'components/button' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EricWXY/toy-element' },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(containerPreview);
      md.use(componentPreview);
      // md.use(apiTable);
    },
  },
  // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
});
