<script setup lang="ts">
    import { BSSpinnerType, BSVariant } from "#nbs";

    const {
        variant = BSVariant.primary,
        type = BSSpinnerType.border,
        small = false
    } = defineProps<{
        variant?: BSVariant
        type?: BSSpinnerType,
        small?: boolean
    }>();

    const size = computed(() => {

        if(small === false) {
            return "";
        }

        return "spinner-" + type + "-sm";
    });
</script>

<template>
    <div
        :class="[`spinner-${type}`, `text-${variant}`, size]"
        role="status">
        <span class="visually-hidden"><slot /></span>
    </div>
</template>
