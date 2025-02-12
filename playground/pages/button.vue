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
        current: "Button"
    };
</script>

<template>
    <NuxtLayout
        name="default"
        :breadcrumbs="breadcrumbs"
        :currentNavItem="'button'"
    >
        <h1>Button !</h1>

        <h2>Not oulined, text no wrap false</h2>

        <BSButton
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            class="me-1"
        >
            {{ variant }} button !
        </BSButton>

        <BSButton :variant="'link'">
            link button !
        </BSButton>


        <h2>Oulined, text no wrap false</h2>

        <BSButton
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            :outline="true"
            class="me-1"
        >
            {{ variant }} button !
        </BSButton>

        <BSButton
            :variant="'link'"
            :outline="true"
        >
            link button !
        </BSButton>


        <h2>Not oulined, text no wrap</h2>

        <BSButton
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            :text-no-wrap="true"
            class="me-1"
        >
            {{ variant }} button !
        </BSButton>

        <BSButton
            :variant="'link'"
            :text-no-wrap="true"
        >
            link button !
        </BSButton>


        <h2>Oulined, text no wrap</h2>

        <BSButton
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            :outline="true"
            :text-no-wrap="true"
            class="me-1"
        >
            {{ variant }} button !
        </BSButton>

        <BSButton
            :variant="'link'"
            :outline="true"
            :text-no-wrap="true"
        >
            link button !
        </BSButton>
    </NuxtLayout>
</template>
