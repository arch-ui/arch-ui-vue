import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 定义 package.json 的路径
const filePath = path.join(__dirname, '../package.json');

// 异步读取 package.json 文件
async function readPackageJSON(file) {
  try {
    const data = await fs.readFile(file, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading package.json:', err);
    return null;
  }
}

// 异步写入 package.json 文件
async function writePackageJSON(file, data) {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    await fs.writeFile(file, jsonData, 'utf-8');
    console.log('package.json has been updated.');
  } catch (err) {
    console.error('Error writing package.json:', err);
  }
}

// 初始化 packageData
let packageData;

// 异步读取 package.json 并初始化 packageData
(async () => {
  packageData = await readPackageJSON(filePath);
})();

// 开发环境的 package.json 配置
const devPackageData = {
  main: './index.ts',
  module: "",
  types: "",
  files: "",
  sideEffects: "",
};

// 构建环境的 package.json 配置
const buildPackageData = {
  main: './dist/umd/index.umd.cjs',
  module: './dist/es/index.js',
  types: './dist/types/core/index.d.ts',
  files: ['dist'],
  sideEffects: ['dist/**/*.css', 'dist/*.css'],
};

// 导出用于开发环境的函数
export const useDev = async () => {
  if (!packageData) {
    packageData = await readPackageJSON(filePath);
  }
  await writePackageJSON(filePath, {
    ...packageData,
    ...devPackageData,
  });
};

// 导出用于构建环境的函数
export const useBuild = async () => {
  if (!packageData) {
    packageData = await readPackageJSON(filePath);
  }
  await writePackageJSON(filePath, {
    ...packageData,
    ...buildPackageData,
  });
};

// 根据命令行参数执行特定函数
const args = process.argv.slice(2);

if (args.includes('dev')) {
  useDev().catch(console.error);
} else if (args.includes('build')) {
  useBuild().catch(console.error);
} else {
  console.log('Please specify "dev" or "build" as an argument.');
}