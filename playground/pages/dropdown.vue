<script setup lang="ts">
    import {
        BSAutoClose,
        type BSBreadcrumbs,
        BSDropdownContent,
        BSDropdownDirection,
        BSDropdownDivider,
        BSDropdownLink,
        BSDropdownText,
        BSDropdownTitle,
        BSSize,
        BSVariant
    } from '#nbs';

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
        current: "Dropdown"
    };

    const items: (BSDropdownContent|BSDropdownDivider)[] = [
        new BSDropdownTitle("Title"),
        new BSDropdownText("Just text"),
        new BSDropdownLink("item", "#"),
        new BSDropdownLink("Active item", "#", true),
        new BSDropdownDivider(),
        new BSDropdownLink("Disabled item", "#", false, true)
    ];
</script>

<template>
    <NuxtLayout
        name="default"
        :breadcrumbs="breadcrumbs"
        :currentNavItem="'dropdown'"
    >
        <h1>Dropdown !</h1>

        <h2>Variants</h2>

        <BSDropdown
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            :items="items"
            class="mb-1"
        >
            Dropdown {{ variant }} button
        </BSDropdown>


        <h2>Splitted</h2>

        <BSDropdown
            v-for="variant in BSVariant"
            :key="variant"
            :variant="variant"
            :items="items"
            :splitted="true"
            class="me-1 mb-1"
        >
            Dropdown {{ variant }} button
        </BSDropdown>


        <h2>Sizes</h2>

        <BSDropdown
            :size="BSSize.sm"
            :items="items"
            class="mb-1"
        >
            Dropdown {{ BSSize.sm }} button
        </BSDropdown>

        <BSDropdown
            :size="BSSize.sm"
            :items="items"
            :splitted="true"
            class="me-1 mb-1"
        >
            Dropdown {{ BSSize.sm }} button
        </BSDropdown>

        <BSDropdown
            :size="BSSize.lg"
            :items="items"
            class="mb-1"
        >
            Dropdown {{ BSSize.lg }} button
        </BSDropdown>

        <BSDropdown
            :size="BSSize.lg"
            :items="items"
            :splitted="true"
            class="me-1 mb-1"
        >
            Dropdown {{ BSSize.lg }} button
        </BSDropdown>


        <h2>Centered</h2>

        <BSDropdown
            :items="items"
            :centered="true"
            class="mb-1"
        >
            Dropdown centered button
        </BSDropdown>


        <h2>Dropup</h2>

        <BSDropdown
            :items="items"
            :direction="BSDropdownDirection.up"
            class="mb-1"
        >
            Dropdown dropup button
        </BSDropdown>

        <BSDropdown
            :items="items"
            :splitted="true"
            :direction="BSDropdownDirection.up"
            class="me-1 mb-1"
        >
            Dropdown dropup button
        </BSDropdown>


        <h2>Dropup centered</h2>

        <BSDropdown
            :items="items"
            :direction="BSDropdownDirection.up"
            :centered="true"
            class="mb-1"
        >
            Dropdown dropup button
        </BSDropdown>


        <h2>Dropend</h2>

        <BSDropdown
            :items="items"
            :direction="BSDropdownDirection.end"
            class="mb-1"
        >
            Dropdown dropup button
        </BSDropdown>

        <BSDropdown
            :items="items"
            :splitted="true"
            :direction="BSDropdownDirection.end"
            class="me-1 mb-1"
        >
            Dropdown dropup button
        </BSDropdown>


        <h2>Dropstart</h2>

        <BSDropdown
            :items="items"
            :direction="BSDropdownDirection.start"
            class="mb-1"
        >
            Dropdown dropup button
        </BSDropdown>

        <BSDropdown
            :items="items"
            :splitted="true"
            :direction="BSDropdownDirection.start"
            class="me-1 mb-1"
        >
            Dropdown dropup button
        </BSDropdown>


        <h2>Menu aligned end</h2>

        <BSDropdown
            :items="items"
            :menuEnd="true"
            class="mb-1"
        >
            Dropdown menu aligned right
        </BSDropdown>


        <h2>Auto close</h2>

        <BSDropdown
            :items="items"
            :autoclose="BSAutoClose.true"
            class="mb-1"
        >
            Dropdown auto close true
        </BSDropdown>

        <BSDropdown
            :items="items"
            :autoclose="BSAutoClose.inside"
            class="mb-1"
        >
            Dropdown auto close inside
        </BSDropdown>

        <BSDropdown
            :items="items"
            :autoclose="BSAutoClose.outside"
            class="mb-1"
        >
            Dropdown auto close outside
        </BSDropdown>

        <BSDropdown
            :items="items"
            :autoclose="BSAutoClose.false"
            class="mb-1"
        >
            Dropdown auto close false
        </BSDropdown>


        <h2>Text content</h2>

        <BSDropdown
            class="mb-1"
        >
            Text content
            <template #content>
                <div class="p-2 text-body-secondary">
                    I'm some text in a dropdown.
                </div>
            </template>
        </BSDropdown>


        <h2>Form content</h2>

        <BSDropdown
            class="mb-1"
        >
            Form content
            <template #content>
                <form class="p-2">
                    <label for="login">login</label>

                    <input type="text" id="login" placeholder="login" />
                </form>
            </template>
        </BSDropdown>
    </NuxtLayout>
</template>
