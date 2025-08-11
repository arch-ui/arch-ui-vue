import type { App } from 'vue';
// import { ElementPlusContainer } from 'vitepress-preview-component';
import DefaultTheme from 'vitepress/theme';
import ArchUI from '@arch-ui/arch-ui-vue';

// import 'vitepress-preview-component/style.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    // app.component('demo-preview', ElementPlusContainer);
    app.use(ArchUI);
  },
};
