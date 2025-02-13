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
        current: "Alerts"
    };
</script>

<template>
    <NuxtLayout
        name="default"
        :breadcrumbs="breadcrumbs"
        :currentNavItem="'alerts'"
    >
        <h1>Alerts !</h1>

        <h2>Non dismissible</h2>

        <BSAlerts
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
        >
            {{ variant }} alert !
        </BSAlerts>

        <h2>Dismissible</h2>

        <BSAlerts
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            :dismissible="true"
        >
            {{ variant }} alert !
        </BSAlerts>
    </NuxtLayout>
</template>
