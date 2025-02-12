<script setup lang="ts">
    import { type BSBreadcrumbs, type BSProgress, BSVariant } from '#nbs'

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
        current: "Progress"
    };

    const progresses: BSProgress[] = [
        {
            label: "1",
            valuenow: 10,
            valuemin: 0,
            valuemax: 100,
            variant: BSVariant.primary,
        },
        {
            label: "2",
            valuenow: 20,
            valuemin: 0,
            valuemax: 100,
            variant: BSVariant.secondary,
            striped: true
        },
        {
            label: "3",
            valuenow: 30,
            valuemin: 0,
            valuemax: 100,
            variant: BSVariant.info,
            striped: true,
            animated: true
        }
    ];
</script>

<template>
    <NuxtLayout
        name="default"
        :breadcrumbs="breadcrumbs"
        :currentNavItem="'progress'"
    >
        <h1>Badge !</h1>

        <h2>Not striped</h2>

        <BSProgress
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            :label="variant"
            :valuenow="30"
        >
            {{ variant }}
        </BSProgress>


        <h2>Striped</h2>

        <BSProgress
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            :label="variant"
            :valuenow="30"
            :striped="true"
            >
            {{ variant }}
        </BSProgress>


        <h2>Striped and animated</h2>

        <BSProgress
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            :label="variant"
            :valuenow="30"
            :striped="true"
            :animated="true"
            >
            {{ variant }}
        </BSProgress>


        <h2>Multiple</h2>

        <BSProgressMultiple
            :progresses="progresses"
        />
    </NuxtLayout>
</template>
