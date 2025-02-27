import { assert, suite, test } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { BSBadge } from "#components";
import { BSVariant } from "#nbs";

suite("BSBadge", () => {

    test("Can have a text", async () => {
        const component = await mountSuspended(BSBadge, {
            slots: {
                default: () => { return "test badge";}
            }
        });

        assert.strictEqual(component.text(), "test badge");
    });

    test("Can be rounded", async () => {
        const component = await mountSuspended(BSBadge, {
            props: {
                rounded: true
            }
        });

        assert.isTrue(component.classes("rounded-pill"));
    });

    suite("Has by default", () => {

        test("a primary variant", async () => {
            const component = await mountSuspended(BSBadge);

            assert.isTrue(component.classes("badge"));
            assert.isTrue(component.classes("text-bg-primary"));
        });

        test("not a rounded class", async () => {
            const component = await mountSuspended(BSBadge, {
                props: {
                    rounded: false
                }
            });

            assert.isFalse(component.classes("rounded-pill"));
        });
    });

    suite("Can show a badge", () => {

        test("with a danger variant", async () => {
            const component = await mountSuspended(BSBadge, {
                props: {
                    variant: BSVariant.danger
                }
            });

            assert.isTrue(component.classes("badge"));
            assert.isTrue(component.classes("text-bg-danger"));
        });

        test("with a dark variant", async () => {
            const component = await mountSuspended(BSBadge, {
                props: {
                    variant: BSVariant.dark
                }
            });

            assert.isTrue(component.classes("badge"));
            assert.isTrue(component.classes("text-bg-dark"));
        });

        test("with a info variant", async () => {
            const component = await mountSuspended(BSBadge, {
                props: {
                    variant: BSVariant.info
                }
            });

            assert.isTrue(component.classes("badge"));
            assert.isTrue(component.classes("text-bg-info"));
        });

        test("with a light variant", async () => {
            const component = await mountSuspended(BSBadge, {
                props: {
                    variant: BSVariant.light
                }
            });

            assert.isTrue(component.classes("badge"));
            assert.isTrue(component.classes("text-bg-light"));
        });

        test("with a primary variant", async () => {
            const component = await mountSuspended(BSBadge, {
                props: {
                    variant: BSVariant.primary
                }
            });

            assert.isTrue(component.classes("badge"));
            assert.isTrue(component.classes("text-bg-primary"));
        });

        test("with a secondary variant", async () => {
            const component = await mountSuspended(BSBadge, {
                props: {
                    variant: BSVariant.secondary
                }
            });

            assert.isTrue(component.classes("badge"));
            assert.isTrue(component.classes("text-bg-secondary"));
        });

        test("with a success variant", async () => {
            const component = await mountSuspended(BSBadge, {
                props: {
                    variant: BSVariant.success
                }
            });

            assert.isTrue(component.classes("badge"));
            assert.isTrue(component.classes("text-bg-success"));
        });

        test("with a warning variant", async () => {
            const component = await mountSuspended(BSBadge, {
                props: {
                    variant: BSVariant.warning
                }
            });

            assert.isTrue(component.classes("badge"));
            assert.isTrue(component.classes("text-bg-warning"));
        });
    });
});
