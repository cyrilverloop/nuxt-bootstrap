<script setup lang="ts">
    const { valid } = defineProps<{
        valid: boolean
    }>();
</script>

<template>
    <div :class="{'valid-feedback': valid, 'invalid-feedback': !valid }">
        <slot />
    </div>
</template>
