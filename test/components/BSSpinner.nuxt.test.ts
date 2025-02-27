import { assert, suite, test } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { BSSpinner } from "#components";
import { BSSpinnerType, BSVariant } from "#nbs";

suite("BSSpinner", () => {

    test("Can have a text", async () => {
        const component = await mountSuspended(BSSpinner, {
            slots: {
                default: () => { return "test spinner";}
            }
        });

        assert.strictEqual(component.text(), "test spinner");
    });

    suite("Can have a border type", () => {

        test("with a normal size", async () => {
            const component = await mountSuspended(BSSpinner, {
                props: {
                    type: BSSpinnerType.border,
                    small: false
                }
            });

            assert.isTrue(component.classes("spinner-border"));
            assert.isFalse(component.classes("spinner-border-sm"));
        });

        test("with a small size", async () => {
            const component = await mountSuspended(BSSpinner, {
                props: {
                    type: BSSpinnerType.border,
                    small: true
                }
            });

            assert.isTrue(component.classes("spinner-border"));
            assert.isTrue(component.classes("spinner-border-sm"));
        });
    });

    suite("Can have a grow type", () => {

        test("with a normal size", async () => {
            const component = await mountSuspended(BSSpinner, {
                props: {
                    type: BSSpinnerType.grow,
                    small: false
                }
            });

            assert.isTrue(component.classes("spinner-grow"));
            assert.isFalse(component.classes("spinner-grow-sm"));
        });

        test("with a small size", async () => {
            const component = await mountSuspended(BSSpinner, {
                props: {
                    type: BSSpinnerType.grow,
                    small: true
                }
            });

            assert.isTrue(component.classes("spinner-grow"));
            assert.isTrue(component.classes("spinner-grow-sm"));
        });
    });

    suite("Has by default", () => {

        test("a primary variant", async () => {
            const component = await mountSuspended(BSSpinner);

            assert.isTrue(component.classes("text-primary"));
        });

        test("a border type", async () => {
            const component = await mountSuspended(BSSpinner);

            assert.isTrue(component.classes("spinner-border"));
        });

        test("not a small size", async () => {
            const component = await mountSuspended(BSSpinner);

            assert.isFalse(component.classes("spinner-border-sm"));
        });
    });

    suite("Can show a spinner", () => {

        test("with a danger variant", async () => {
            const component = await mountSuspended(BSSpinner, {
                props: {
                    variant: BSVariant.danger
                }
            });

            assert.isTrue(component.classes("text-danger"));
        });

        test("with a dark variant", async () => {
            const component = await mountSuspended(BSSpinner, {
                props: {
                    variant: BSVariant.dark
                }
            });

            assert.isTrue(component.classes("text-dark"));
        });

        test("with a info variant", async () => {
            const component = await mountSuspended(BSSpinner, {
                props: {
                    variant: BSVariant.info
                }
            });

            assert.isTrue(component.classes("text-info"));
        });

        test("with a light variant", async () => {
            const component = await mountSuspended(BSSpinner, {
                props: {
                    variant: BSVariant.light
                }
            });

            assert.isTrue(component.classes("text-light"));
        });

        test("with a primary variant", async () => {
            const component = await mountSuspended(BSSpinner, {
                props: {
                    variant: BSVariant.primary
                }
            });

            assert.isTrue(component.classes("text-primary"));
        });

        test("with a secondary variant", async () => {
            const component = await mountSuspended(BSSpinner, {
                props: {
                    variant: BSVariant.secondary
                }
            });

            assert.isTrue(component.classes("text-secondary"));
        });

        test("with a success variant", async () => {
            const component = await mountSuspended(BSSpinner, {
                props: {
                    variant: BSVariant.success
                }
            });

            assert.isTrue(component.classes("text-success"));
        });

        test("with a warning variant", async () => {
            const component = await mountSuspended(BSSpinner, {
                props: {
                    variant: BSVariant.warning
                }
            });

            assert.isTrue(component.classes("text-warning"));
        });
    });
});
