<script setup lang="ts">
    import { type BSNavItem } from "#nbs";

    const navItems: BSNavItem[] = [
        {
            name: "Accordion",
            link: "accordion"
        },
        {
            name: "Alert",
            link: "alert"
        },
        {
            name: "Badge",
            link: "badge"
        },
        {
            name: "Breadcrumbs",
            link: "breadcrumbs"
        },
        {
            name: "Button",
            link: "button"
        },
        {
            name: "Dropdown",
            link: "dropdown"
        },
        {
            name: "Pagination",
            link: "pagination"
        },
        {
            name: "Progress",
            link: "progress"
        },
        {
            name: "Spinner",
            link: "spinner"
        }
    ];

    const attrs: any = useAttrs();
</script>

<template>
    <section class="container">
        <BSNavbar
            :brand="'Nuxt Bootstrap'"
            :navItems="navItems"
            :currentNavItem="attrs.currentNavItem"
        />

        <BSBreadcrumbs
            v-if="attrs.breadcrumbs !== undefined"
            :breadcrumbs="attrs.breadcrumbs"
            class="pt-3 px-3"
        />

        <slot />
    </section>
</template>
