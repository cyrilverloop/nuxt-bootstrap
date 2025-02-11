export default defineNuxtConfig({
    modules: ['../src/module'],
    nuxtBootstrap: {},
    devtools: { enabled: true },
    compatibilityDate: '2025-01-01',
    typescript: {
        strict: true,
        typeCheck: true
    },
});
