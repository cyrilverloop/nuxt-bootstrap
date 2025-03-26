<script setup lang="ts">
    import { type BSBreadcrumbs, BSSpinnerType, BSVariant } from '#nbs'

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
        current: "Spinner"
    };
</script>

<template>
    <NuxtLayout
        name="default"
        :breadcrumbs="breadcrumbs"
        :currentNavItem="'spinner'"
    >
        <h1>Spinner !</h1>

        <h2>Border</h2>

        <BSSpinner
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
        />

        <h2>Grow</h2>

        <BSSpinner
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            :type="BSSpinnerType.grow"
        />

        <h2>Small border</h2>

        <BSSpinner
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            :small="true"
        />

        <h2>Small grow</h2>

        <BSSpinner
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            :type="BSSpinnerType.grow"
            :small="true"
        />

        <h2>With hidden text</h2>

        <BSSpinner
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
        >
            {{ variant }}
        </BSSpinner>
    </NuxtLayout>
</template>
