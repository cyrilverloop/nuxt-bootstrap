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
        current: "Badge"
    };
</script>

<template>
    <NuxtLayout
        name="default"
        :breadcrumbs="breadcrumbs"
        :currentNavItem="'badge'"
    >
        <h1>Badge !</h1>

        <h2>Not rounded</h2>

        <BSBadge
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            class="me-1"
        >
            {{ variant }} badge !
        </BSBadge>

        <h2>Rounded</h2>

        <BSBadge
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            :rounded="true"
            class="me-1"
        >
            {{ variant }} badge !
        </BSBadge>
    </NuxtLayout>
</template>
