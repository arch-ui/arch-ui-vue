import { makeInstaller } from '@healwrap/hp-ui-utils';
import components from './components';
import '@healwrap/hp-ui-theme/index.css';

const installer = makeInstaller(components);

export * from '@healwrap/hp-ui-components';
export default installer;
