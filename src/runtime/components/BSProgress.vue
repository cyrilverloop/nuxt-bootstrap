<script setup lang="ts">
    import { BSVariant } from "#nbs";

    const {
        variant = BSVariant.primary,
        striped = false,
        animated = false,
        valuenow = 0,
        valuemin = 0,
        valuemax = 100,
        height = "1rem",
        inMultiple = false
    } = defineProps<{
        variant?: BSVariant,
        striped?: boolean,
        animated?: boolean,
        label?: string,
        valuenow?: number,
        valuemin?: number,
        valuemax?: number,
        height?: string,
        inMultiple?: boolean
    }>();

    if(valuemin > valuemax) {
        throw new Error("The minimum value can not be higher than the maximum value.");
    }

    if(valuemin > valuenow) {
        throw new Error("The minimum value can not be higher than the current value.");
    }

    if(valuemax < valuenow) {
        throw new Error("The maximum value can not be lower than the current value.");
    }

    const progressBarClasses = [
        `text-bg-${variant}`,
        {'progress-bar-striped': striped},
        {'progress-bar-animated': striped && animated}
    ];

    const progressStyle = computed(() => {
        let style = "height: " + height + ";";

        if(inMultiple === true) {
            style += "width: " + valuenow + "%;";
        }

        return style;
    });

    const progressBarStyle = computed(() => {

        if(inMultiple !== true) {
            return "width: " + valuenow + "%;";
        }

        return "";
    });
</script>

<template>
    <div
        class="progress"
        :style="progressStyle"
        role="progressbar"
        :aria-label="label"
        :aria-valuenow="valuenow"
        :aria-valuemin="valuemin"
        :aria-valuemax="valuemax"
    >
        <div
            class="progress-bar"
            :class="progressBarClasses"
            :style="progressBarStyle"
        >
            <slot />
        </div>
    </div>
</template>
