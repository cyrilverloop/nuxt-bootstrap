<script setup lang="ts">
    import {
        BSAutoClose,
        BSDropdownContent,
        BSDropdownDirection,
        BSDropdownDivider,
        BSDropdownLink,
        BSDropdownText,
        BSDropdownTitle,
        BSSize,
        BSVariant
    } from "#nbs";

    const {
        variant = BSVariant.secondary,
        splitted = false,
        direction = BSDropdownDirection.down,
        autoclose = BSAutoClose.true
    } = defineProps<{
        items?: (BSDropdownContent|BSDropdownDivider)[],
        variant?: BSVariant,
        splitted?: boolean,
        size?: BSSize.sm|BSSize.lg,
        centered?: boolean,
        direction?: BSDropdownDirection,
        rtl?: boolean,
        menuEnd?: boolean,
        autoclose?: BSAutoClose
    }>();
</script>

<template>
    <div
        :class="[
            {'btn-group': splitted === true},
            {'dropdown-center': centered === true && direction === BSDropdownDirection.down},
            {'dropup-center': centered === true && direction === BSDropdownDirection.up},
            direction
        ]"
    >
        <BSButton
            v-if="splitted !== true || ((rtl !== true || direction !== BSDropdownDirection.end) && (rtl === true || direction !== BSDropdownDirection.start))"
            :variant="variant"
            :class="[
                {'dropdown-toggle': splitted === false},
                {'btn-sm': size === BSSize.sm},
                {'btn-lg': size === BSSize.lg}
            ]"
            :data-bs-toggle="splitted === false ? 'dropdown' : null"
            :data-bs-auto-close="autoclose"
            :aria-expanded="splitted === false ? 'false' : null"
        >
            <slot />
        </BSButton>

        <BSButton
            v-if="splitted === true"
            :variant="variant"
            :class="[
                {'btn-sm': size === BSSize.sm},
                {'btn-lg': size === BSSize.lg}
            ]"
            class="dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            <span class="visually-hidden"></span>
        </BSButton>

        <ul
            v-if="items !== undefined"
            class="dropdown-menu"
            :class="{'dropdown-menu-end': menuEnd === true}"
        >
            <li v-for="item in items">
                <h6
                    v-if="item instanceof BSDropdownTitle"
                    class="dropdown-header"
                >
                    {{ item.content }}
                </h6>
                <span
                    v-else-if="item instanceof BSDropdownText"
                    class="dropdown-item-text"
                >
                    {{ item.content }}
                </span>
                <hr
                    v-else-if="item instanceof BSDropdownDivider"
                    class="dropdown-divider"
                />
                <a
                    v-else-if="item instanceof BSDropdownLink"
                    class="dropdown-item"
                    :href="item.isDisabled !== true ? item.href : undefined"
                    :class="[
                        {'active': item.isActive === true},
                        {'disabled': item.isDisabled === true}
                    ]"
                    :aria-current="item.isActive === true ? 'true' : undefined"
                    :aria-disabled="item.isDisabled === true ? 'true' : undefined"
                >
                    {{ item.content }}
                </a>
            </li>
        </ul>
        <div
            v-else
            class="dropdown-menu"
        >
            <slot name="content" />
        </div>

        <BSButton
            v-if="splitted === true && ((rtl === true && direction === BSDropdownDirection.end) || (rtl !== true && direction === BSDropdownDirection.start))"
            :variant="variant"
            :class="[
                {'btn-sm': size === BSSize.sm},
                {'btn-lg': size === BSSize.lg}
            ]"
        >
            <slot />
        </BSButton>
    </div>
</template>
