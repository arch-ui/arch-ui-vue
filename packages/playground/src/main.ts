import { createApp } from 'vue';
import App from './App.vue';

import ArchUI from '@arch-design/arch-ui';
import '@arch-design/arch-ui/dist/index.css'

createApp(App).use(ArchUI).mount('#app');