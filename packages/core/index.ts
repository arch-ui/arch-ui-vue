import { makeInstaller } from '@arch-design/arch-ui-utils';
import components from './components';

const installer = makeInstaller(components);

export * from '@arch-design/arch-ui-components';
export default installer;
