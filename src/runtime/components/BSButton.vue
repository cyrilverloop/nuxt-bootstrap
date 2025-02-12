<script setup lang="ts">
    import { BSVariant } from "#nbs";

    const {
        variant = BSVariant.primary,
        outline = false,
        textNoWrap = false
    } = defineProps<{
        variant?: BSVariant|"link",
        outline?: boolean,
        textNoWrap?: boolean
    }>();

    const fullBSVariant = computed(() => {

        if(outline === true) {
            return "btn-outline-" + variant;
        }

        return "btn-" + variant;
    });
</script>

<template>
    <button
        type="button"
        class="btn"
        :class="[fullBSVariant, {'text-nowrap': textNoWrap}]"
    >
        <slot />
    </button>
</template>
