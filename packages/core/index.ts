import { makeInstaller } from '@arch-design/arch-ui/_utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import components from './components';

library.add(fas);
const installer = makeInstaller(components);

export * from '@arch-design/arch-ui-components';
export default installer;
