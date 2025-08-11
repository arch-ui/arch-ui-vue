import { makeInstaller } from '@arch-ui/arch-ui-vue/_utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import components from './components';

library.add(fas);
const installer = makeInstaller(components);

export * from '@arch-ui/arch-ui-components';
export default installer;
