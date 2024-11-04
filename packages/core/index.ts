import { makeInstaller } from '@arch-design/arch-ui-utils';
import components from './components';
import '@arch-design/arch-ui-theme/index.css';

const installer = makeInstaller(components);

export * from '@arch-design/arch-ui-components';
export default installer;
