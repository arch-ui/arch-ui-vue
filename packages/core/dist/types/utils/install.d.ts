import { Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;
export declare function makeInstaller(components: Plugin[]): Plugin;
export declare function withInstall<T>(component: T): SFCWithInstall<T>;
export {};
