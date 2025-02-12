<script setup lang="ts">
    import { type BSBreadcrumbs } from "#nbs";

    definePageMeta({
        layout: false
    });

    const breadcrumbs: BSBreadcrumbs = {
        parents: [
            {
                name: "Home",
                link: "/"
            }
        ],
        current: "Breadcrumbs"
    };

    const demoBreadcrumbs: BSBreadcrumbs = {
        parents: [
            {
                name: 'first',
                link: '/',
            },
            {
                name: 'second',
                link: 'breadcrumbs',
            },
        ],
        current: 'last crumb',
    }
</script>

<template>
    <NuxtLayout
        name="default"
        :breadcrumbs="breadcrumbs"
        :currentNavItem="'breadcrumbs'"
    >
        <h1>Breadcrumbs !</h1>

        <BSBreadcrumbs
            :breadcrumbs="demoBreadcrumbs"
        />
    </NuxtLayout>
</template>
