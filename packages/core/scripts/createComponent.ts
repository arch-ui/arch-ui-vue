import fs from 'node:fs';
import path from 'node:path';
import { resolve, join } from 'path';
import { existsSync, statSync } from 'fs';
import ora from 'ora';

import {
  getIndexContent,
  getStyleContent,
  getComponentContent,
  getTestComponent,
  getTypeContent,
  getStorybookContent,
} from './components.template';
import { kebabToPascal } from '../_utils';

const spinner = ora(`新建组件中`).start();

main();

function main() {
  try {
    const component = getComponentName();
    createComponentFiles(component);
    createStorybookFile(component);
    addToIndex(component);
    spinner.succeed(`已成功新建 ${component} 组件\n`);
  } catch (e) {
    spinner.fail('新建组件失败\n');
    console.error(e);
  }
}

/**
 * 获取根目录路径
 * @returns
 */
function getProjectPath() {
  const findup = (targetFolder: string, limit = 4) => {
    let currentDir = process.cwd();
    let attempt = 0;
    while (true) {
      const targetPath = join(currentDir, targetFolder);
      if (existsSync(targetPath) && statSync(targetPath).isDirectory()) {
        return targetPath;
      }
      attempt++;
      const parentDir = resolve(currentDir, '..');
      if (attempt === limit || parentDir === currentDir) {
        // 已经到达文件系统的根目录
        return null;
      }
      currentDir = parentDir;
    }
  };
  return resolve(findup('.git', 4) ?? '', '..');
}

// 获取输入的组件名
function getComponentName(): string {
  const componentName = process.argv[2];

  if (!componentName) {
    spinner.fail('请输入要创建的组件名称\n');
    process.exit(1);
  }

  return componentName;
}

// 在packages/components下创建组件目录
function createComponentFiles(component: string) {
  const pascalComp = kebabToPascal(component);
  const projectPath = getProjectPath();
  const compsPath = path.join(projectPath, 'packages/components');

  const componentFolder = path.join(compsPath, component);

  if (fs.existsSync(componentFolder)) {
    spinner.fail('组件目录已存在\n');
    process.exit(1);
  }
  fs.mkdirSync(componentFolder);

  const indexPath = path.join(componentFolder, 'index.ts');
  fs.writeFileSync(indexPath, getIndexContent(pascalComp));

  const vuePath = path.join(componentFolder, `${component}.vue`);
  fs.writeFileSync(vuePath, getComponentContent(pascalComp));

  const stylePath = path.join(componentFolder, 'style.scss');
  fs.writeFileSync(stylePath, getStyleContent(pascalComp));

  const typePath = path.join(componentFolder, 'type.d.ts');
  fs.writeFileSync(typePath, getTypeContent(pascalComp));

  const testPath = path.join(componentFolder, `${component}.test.tsx`);
  fs.writeFileSync(testPath, getTestComponent(pascalComp));
}

function createStorybookFile(component: string) {
  const pascalComp = kebabToPascal(component);
  const projectPath = getProjectPath();
  const playgroundPath = path.join(projectPath, 'packages/playground');
  const storybookFile = path.join(
    playgroundPath,
    `./src/stories/${component}.stories.ts`
  );

  if (fs.existsSync(storybookFile)) {
    spinner.fail('组件storybook已存在\n');
    process.exit(1);
  }

  fs.writeFileSync(storybookFile, getStorybookContent(pascalComp));
}

// 添加组件到导出入口
function addToIndex(component: string) {
  const pascalComp = kebabToPascal(component);
  const projectPath = getProjectPath();
  const indexPath = path.join(projectPath, 'packages/components/index.ts');
  const coreComponentPath = path.join(
    projectPath,
    'packages/core/components.ts'
  );

  // packages/components/index.ts
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  // packages/core/components.ts
  let componentContent = fs.readFileSync(coreComponentPath, 'utf-8');

  const newImport = `export * from './${component}';\n`;
  indexContent = newImport + indexContent;

  const newExport = `A${pascalComp}`;
  // 正则表达式匹配export语句，但不包括花括号内的内容
  const exportRegex = /\{([^}]+)\}/;
  const pluginRegex = /\[([^\]]+)\]/;
  const exportMatch = componentContent.match(exportRegex);
  const pluginMatch = componentContent.match(pluginRegex);

  if (exportMatch && pluginMatch) {
    // 在现有import语句中添加新项
    componentContent = componentContent.replace(
      exportRegex,
      `{ ${exportMatch[1].trim()}, ${newExport.trim()} }`
    );
    // 在现有export 语句中添加新项
    componentContent = componentContent.replace(
      pluginRegex,
      `[${pluginMatch[1].trim()}, ${newExport.trim()}]`
    );
  } else {
    spinner.fail('在入口文件导出组件失败\n');
    process.exit(1);
  }

  fs.writeFileSync(indexPath, indexContent, 'utf-8');
  fs.writeFileSync(coreComponentPath, componentContent, 'utf-8');
}
