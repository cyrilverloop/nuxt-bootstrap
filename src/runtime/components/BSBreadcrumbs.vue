<script setup lang="ts">
    import { type BSBreadcrumbs } from "#nbs";

    const { breadcrumbs } = defineProps<{
        breadcrumbs: BSBreadcrumbs
    }>();
</script>

<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li v-for="breadcrumb in breadcrumbs.parents"
                class="breadcrumb-item">
                <a :href="breadcrumb.link">{{ breadcrumb.name }}</a>
            </li>

            <li class="breadcrumb-item active" aria-current="page">
                {{ breadcrumbs.current }}
            </li>
        </ol>
    </nav>
</template>
