<script setup lang="ts">
    import { BSVariant } from "#nbs";

    const {
        to,
        variant = BSVariant.primary,
        outline = false,
        textNoWrap = false
    } = defineProps<{
        to : string|object,
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
    <NuxtLinkLocale
        :to="to"
        :class="[fullBSVariant, {'text-nowrap': textNoWrap}]"
        role="button" class="btn">
        <slot />
    </NuxtLinkLocale>
</template>
