import {
    addPlugin,
    createResolver,
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
        _nuxt.options.css.push('bootstrap/dist/css/bootstrap.min.css');
        const resolver = createResolver(import.meta.url);

        // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
        addPlugin(resolver.resolve('./runtime/plugins/useBootstrap.client'));
    }
});
