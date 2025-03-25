<script setup lang="ts">
    import { type BSAccordionItem, type BSBreadcrumbs } from '#nbs'

    definePageMeta({
            layout: false
    });

    const breadcrumbs: BSBreadcrumbs = {
        parents: [
            {
                name: "Home",
                link: "/"
            }
        ],
        current: "Accordion"
    };

    const nonFlushedItems: Ref<BSAccordionItem[]> = ref([
        {
            id: "non-flushed-item-1",
            title: "Title 1",
            content: "Content 1",
            show: true
        },
        {
            id: "non-flushed-item-2",
            title: "Title 2",
            content: "Content 2"
        },
        {
            id: "non-flushed-item-3",
            title: "Title 3",
            content: "Content 3"
        }
    ]);

    const flushedItems: Ref<BSAccordionItem[]> = ref([
        {
            id: "flushed-item-1",
            title: "Title 1",
            content: "Content 1"
        },
        {
            id: "flushed-item-2",
            title: "Title 2",
            content: "Content 2",
            show: true
        },
        {
            id: "flushed-item-3",
            title: "Title 3",
            content: "Content 3"
        }
    ]);

    const alwaysOpenedItems: Ref<BSAccordionItem[]> = ref([
        {
            id: "always-opened-item-1",
            title: "Title 1",
            content: "Content 1"
        },
        {
            id: "always-opened-item-2",
            title: "Title 2",
            content: "Content 2"
        },
        {
            id: "always-opened-item-3",
            title: "Title 3",
            content: "Content 3",
            show: true
        }
    ]);

    const bodyWithoutPaddingItems: Ref<BSAccordionItem[]> = ref([
        {
            id: "without-padding-item-1",
            title: "Title 1",
            content: "Content 1",
            show: true,
            noPadding: true
        },
        {
            id: "without-padding-item-2",
            title: "Title 2",
            content: "Content 2",
            show: true,
            noPadding: true
        },
        {
            id: "without-padding-item-3",
            title: "Title 3",
            content: "Content 3",
            show: true,
            noPadding: true
        }
    ]);

    const headerContainingTags: Ref<BSAccordionItem[]> = ref([
        {
            id: "header-containing-tags-1",
            title: "Title 1",
            content: "Content 1",
            show: true
        },
        {
            id: "header-containing-tags-2",
            title: "Title 2",
            content: "Content 2"
        },
        {
            id: "header-containing-tags-3",
            title: "Title 3",
            content: "Content 3"
        }
    ]);
</script>

<template>
    <NuxtLayout
        name="default"
        :breadcrumbs="breadcrumbs"
        :currentNavItem="'accordion'"
    >
        <h1>Accordion !</h1>

        <h2>Non flushed</h2>

        <BSAccordion
            :id="'non-flushed'"
            :items="nonFlushedItems"
        >
            <template #item-title="{ title }">
                {{ title }}
            </template>

            <template #item-content="{ content }">
                {{ content }}
            </template>
        </BSAccordion>

        <h2>Flushed</h2>

        <BSAccordion
            :id="'flushed'"
            :items="flushedItems"
            :flushed="true"
        >
            <template #item-title="{ title }">
                {{ title }}
            </template>

            <template #item-content="{ content }">
                {{ content }}
            </template>
        </BSAccordion>

        <h2>Always opened</h2>

        <BSAccordion
            :id="'always-opened'"
            :items="alwaysOpenedItems"
            :alwaysOpened="true"
        >
            <template #item-title="{ title }">
                {{ title }}
            </template>

            <template #item-content="{ content }">
                {{ content }}
            </template>
        </BSAccordion>

        <h2>Body without padding</h2>

        <BSAccordion
            :id="'without-padding'"
            :items="bodyWithoutPaddingItems"
        >
            <template #item-title="{ title }">
                {{ title }}
            </template>

            <template #item-content="{ content }">
                {{ content }}
            </template>
        </BSAccordion>

        <h2>Header containing HTML tags</h2>

        <BSAccordion
            :id="'header-containing-tags'"
            :items="headerContainingTags"
        >
            <template #item-title="{ title }">
                <span>{{ title }}</span>
            </template>

            <template #item-content="{ content }">
                {{ content }}
            </template>
        </BSAccordion>
    </NuxtLayout>
</template>
