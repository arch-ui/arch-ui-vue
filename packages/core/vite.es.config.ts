import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { readdirSync, readdir } from 'fs';
import { delay, defer, filter, map } from 'lodash-es';
import dts from 'vite-plugin-dts';

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });

  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types',
    }),
  ],
  build: {
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'ArchUI',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'async-validator',
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'; // 打包样式会打成一个整体 style.css 这里是重命名
          return assetInfo.name as string;
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('/packages/hooks')) {
            return 'hooks';
          }
          if (id.includes('/packages/utils') || id.includes('plugin-vue:export-helper')) {
            return 'utils';
          }
          // 对组件分包，可以按需导入
          for (const dirName of getDirectoriesSync('../components')) {
            if (id.includes(`/packages/components/${dirName}`)) {
              return dirName;
            }
          }
        }
      },
    },
  },
});
