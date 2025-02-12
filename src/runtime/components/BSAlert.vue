<script setup lang="ts">
    import { BSVariant } from "#nbs";

    const {
        variant = BSVariant.primary,
        dismissible = false
    } = defineProps<{
        variant?: BSVariant,
        dismissible?: boolean
    }>();
</script>

<template>
    <div class="alert" role="alert"
        :class="[`alert-${variant}`, {'alert-dismissible': dismissible}]">

        <slot />

        <button
            v-if="dismissible"
            type="button" class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close">
        </button>
    </div>
</template>
