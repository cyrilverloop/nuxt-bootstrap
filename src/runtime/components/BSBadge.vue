<script setup lang="ts">
    import { BSVariant } from "#nbs";

    const {
        variant = BSVariant.primary,
        rounded = false
    } = defineProps<{
        variant?: BSVariant,
        rounded?: boolean
    }>();
</script>

<template>
    <span
        :class="[`text-bg-${variant}`, {'rounded-pill': rounded}]"
        class="badge">
        <slot />
    </span>
</template>
