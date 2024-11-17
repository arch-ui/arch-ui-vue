/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'Dark', value: '#000' },
        { name: 'Light', value: '#fff' },
      ],
      default: 'Light',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
