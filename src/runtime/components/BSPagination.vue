<script setup lang="ts">
    import { BSJustifyContent, BSSize, type BSIconPageItem, type BSPageItem } from "#nbs";

    const {
        ariaLabel = ""
    } = defineProps<{
        items: (BSPageItem|BSIconPageItem)[],
        ariaLabel?: string,
        size?: BSSize.sm|BSSize.lg,
        justifyContent?: BSJustifyContent
    }>();
</script>

<template>
    <nav
        :aria-label="ariaLabel"
    >
        <ul
            class="pagination"
            :class="justifyContent"
        >
            <li
                v-for="item in items"
                class="page-item"
                :aria-current="item.active === true ? 'page' : undefined"
                :class="[
                    {'active': item.active},
                    {'disabled': item.disabled},
                    {'pagination-sm': size === BSSize.sm},
                    {'pagination-lg': size === BSSize.lg}
                ]"
            >
                <span
                    v-if="item.disabled === true"
                    class="page-link"
                    :aria-label="item.icon === undefined ? null : item.content"
                >
                    <template
                        v-if="item.icon !== undefined"
                    >
                        {{ item.icon }}
                    </template>
                    <template v-else>
                        {{ item.content }}
                    </template>
                </span>
                <NuxtLink
                    v-else
                    class="page-link"
                    :aria-label="item.icon === undefined ? null : item.content"
                    :href="item.href"
                >
                    <span
                        v-if="item.icon !== undefined"
                        aria-hidden="true"
                    >
                        {{ item.icon }}
                    </span>
                    <template v-else>{{ item.content }}</template>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>
