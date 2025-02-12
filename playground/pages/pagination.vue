<script setup lang="ts">
    import {
        BSJustifyContent,
        BSSize,
        type BSBreadcrumbs,
        type BSIconPageItem,
        type BSPageItem
    } from '#nbs';

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
        current: "Pagination"
    };

    const pageItemsWithText: BSPageItem[] = [
        {
            content: "Previous",
            href: "#",
            disabled: true
        },
        {
            content: "1",
            href: "#",
            active: true
        },
        {
            content: "2",
            href: "#"
        },
        {
            content: "3",
            href: "#"
        },
        {
            content: "Next",
            href: "#"
        }
    ];

    const pageItemsWithIcons: BSIconPageItem[] = [
        {
            content: "Previous",
            href: "#",
            icon: "«",
            disabled: true
        },
        {
            content: "1",
            href: "#",
            active: true
        },
        {
            content: "2",
            href: "#"
        },
        {
            content: "3",
            href: "#"
        },
        {
            content: "Next",
            href: "#",
            icon: "»"
        }
    ];
</script>

<template>
    <NuxtLayout
        name="default"
        :breadcrumbs="breadcrumbs"
        :currentNavItem="'pagination'"
    >
        <h1>Pagination !</h1>

        <h2>With text</h2>

        <BSPagination
            :items="pageItemsWithText"
        />

        <h2>With icons</h2>

        <BSPagination
            :items="pageItemsWithIcons"
        />

        <h2>Size sm</h2>

        <BSPagination
            :items="pageItemsWithText"
            :size="BSSize.sm"
        />

        <h2>Size lg</h2>

        <BSPagination
            :items="pageItemsWithText"
            :size="BSSize.lg"
        />

        <h2>Alignment center</h2>

        <BSPagination
            :items="pageItemsWithText"
            :justifyContent="BSJustifyContent.center"
        />

        <h2>Alignment end</h2>

        <BSPagination
            :items="pageItemsWithText"
            :justifyContent="BSJustifyContent.end"
        />
    </NuxtLayout>
</template>
