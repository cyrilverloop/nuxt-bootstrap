import {
    defineNuxtModule
} from '@nuxt/kit';

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: '@cyrilverloop/nuxt-bootstrap',
        configKey: 'nuxtBootstrap',
    },
    // Default configuration options of the Nuxt module
    defaults: {},
    setup(_options, _nuxt) {
    }
});
