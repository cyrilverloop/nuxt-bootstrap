<script setup lang="ts">
    import { type BSProgress, BSVariant } from "#nbs";

    const {
        progresses
    } = defineProps<{
        progresses: BSProgress[]
    }>();
</script>

<template>
    <div class="progress-stacked">
        <BSProgress
            v-for="progress in progresses"
            :key="progress.label"
            :variant="progress.variant"
            :striped="progress?.striped"
            :animated="progress?.animated"
            :label="progress.label"
            :valuenow="progress.valuenow"
            :valuemin="progress?.valuemin"
            :valuemax="progress?.valuemax"
            :height="progress?.height"
            :inMultiple="true"
            >
            {{ progress?.label }}
        </BSProgress>
    </div>
</template>
