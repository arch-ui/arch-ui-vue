import { makeInstaller } from '@healwrap/hp-ui-utils';
import components from './components';

const installer = makeInstaller(components);

export * from '@healwrap/hp-ui-components';
export default installer;
