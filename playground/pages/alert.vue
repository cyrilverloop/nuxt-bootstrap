<script setup lang="ts">
    import { type BSBreadcrumbs, BSVariant } from '#nbs'

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
        current: "Alert"
    };
</script>

<template>
    <NuxtLayout
        name="default"
        :breadcrumbs="breadcrumbs"
        :currentNavItem="'alert'"
    >
        <h1>Alert !</h1>

        <h2>Non dismissible</h2>

        <BSAlert
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
        >
            {{ variant }} alert !
        </BSAlert>

        <h2>Dismissible</h2>

        <BSAlert
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            :dismissible="true"
        >
            {{ variant }} alert !
        </BSAlert>
    </NuxtLayout>
</template>
