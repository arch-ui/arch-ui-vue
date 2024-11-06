// TODO 在main.ts中无法引入样式，在preview.js中引入即可（困扰许久，直到创了一个普通项目才发现不是我的问题）
import '@arch-design/arch-ui/dist/index.css';

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
