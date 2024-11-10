import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { readdirSync } from 'fs';
import { filter, map } from 'lodash-es';
import dts from 'vite-plugin-dts';

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });

  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}

// 自动导入组件样式
function importCssPlugin(): Plugin {
  return {
    name: 'vite-plugin-vue-import-css',
    apply: 'build',
    enforce: 'post',
    renderChunk(code, chunk) {
      const isVueSFC = /^(?!.*node_modules)(?!.*_virtual).*\.vue\.js$/i.test(chunk.fileName);
      if (chunk.isEntry || chunk.type !== 'chunk' || !isVueSFC) {
        return null;
      }
      const componentNameReg = /([^/]+)\.vue\.js$/;
      const match = chunk.fileName.match(componentNameReg);
      const componentName = match ? match[1] : null;
      if (componentName) {
        // 插入对 index.css 和 [componentName].css 的导入
        return `import './${componentName}.css';\n${code}`;
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types',
    }),
    importCssPlugin(),
  ],
  build: {
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'ArchUI',
      fileName: 'index',
      formats: ['es'],
    },
    cssCodeSplit: true,
    cssTarget: 'chrome61',
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
        // assetFileNames: (assetInfo) => {
        //   console.log(assetInfo.name);
        //   // if (assetInfo.name === 'style.css') return 'index.css'; // 打包样式会打成一个整体 style.css 这里是重命名
        //   return assetInfo.name as string;
        // },
        chunkFileNames: (chunk) => {
          // 在manualChunks处理之后的chunk会到这个阶段，在这里对命名进行处理
          for (const compName of getDirectoriesSync('../components')) {
            if (chunk.name === compName) {
              return `${chunk.name}.vue.js`;
            }
          }
          return `${chunk.name}.js`;
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
        },
      },
    },
  },
});
