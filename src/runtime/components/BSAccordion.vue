<script setup lang="ts">
    import { type BSAccordionItem } from "#nbs";

    const {
        flushed = false,
        alwaysOpened = false,
    } = defineProps<{
        id: string,
        items: BSAccordionItem[],
        flushed?: boolean,
        alwaysOpened?: boolean
    }>();

    /**
     * Toggles the items.
     * @param event the event.
     * @param items the items.
     */
    function toggleItems(event: any, items: BSAccordionItem[]) {
        const itemIndex = event.target.dataset.itemIndex;
        const currentItem = items[itemIndex];

        for(const item of items) {

            if(
                alwaysOpened !== true &&
                item.id !== currentItem.id
            ) {
                item.show = false;
            }
        }

        currentItem.show = true;
    }
</script>

<template>
    <div
        class="accordion"
        :class="{'accordion-flush': flushed}"
        :id="id"
        @click.stop="toggleItems($event, items)"
    >
        <div
            v-for="(item, itemIndex) in items"
            :key="item.id"
            class="accordion-item"
        >
            <h2 class="accordion-header">
                <button
                    class="accordion-button"
                    :class="{'collapsed': item?.show !== true}"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-item-index="itemIndex"
                    :data-bs-target="`#${item.id}`"
                    :aria-controls="item.id"
                    :aria-expanded="(item?.show === true) ? 'true' : 'false'"
                >
                    <slot name="item-title" :title="item.title" />
                </button>
            </h2>

            <div
                :id="item.id"
                class="accordion-collapse collapse"
                :class="{'show': item?.show}"
                :data-bs-parent="(alwaysOpened === false) ? id : null"
            >
                <div
                    class="accordion-body"
                    :class="(item?.noPadding === true) ? 'p-0' : null"
                >
                    <slot name="item-content" :content="item.content" />
                </div>
            </div>
        </div>
    </div>
</template>
