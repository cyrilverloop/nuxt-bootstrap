import { assert, suite, test } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { BSAlert } from "#components";
import { BSVariant } from "#nbs";

suite("BSAlert", () => {

    test("Can have a text", async () => {
        const component = await mountSuspended(BSAlert, {
            slots: {
                default: () => { return "test alert";}
            }
        });

        assert.strictEqual(component.text(), "test alert");
    });

    test("Can have a dismissible button", async () => {
        const component = await mountSuspended(BSAlert, {
            props: {
                dismissible: true
            }
        });

        const closeButton = component.findAll(".btn-close");

        assert.strictEqual(closeButton.length, 1);
    });

    suite("Has by default", () => {

        test("a primary variant", async () => {
            const component = await mountSuspended(BSAlert);

            assert.isTrue(component.classes("alert"));
            assert.isTrue(component.classes("alert-primary"));
        });

        test("no dismissible button", async () => {
            const component = await mountSuspended(BSAlert);

            const closeButton = component.findAll(".btn-close");

            assert.strictEqual(closeButton.length, 0);
        });
    });

    suite("Can show an alert", () => {

        test("with a danger variant", async () => {
            const component = await mountSuspended(BSAlert, {
                props: {
                    variant: BSVariant.danger
                }
            });

            assert.isTrue(component.classes("alert"));
            assert.isTrue(component.classes("alert-danger"));
        });

        test("with a dark variant", async () => {
            const component = await mountSuspended(BSAlert, {
                props: {
                    variant: BSVariant.dark
                }
            });

            assert.isTrue(component.classes("alert"));
            assert.isTrue(component.classes("alert-dark"));
        });

        test("with a info variant", async () => {
            const component = await mountSuspended(BSAlert, {
                props: {
                    variant: BSVariant.info
                }
            });

            assert.isTrue(component.classes("alert"));
            assert.isTrue(component.classes("alert-info"));
        });

        test("with a light variant", async () => {
            const component = await mountSuspended(BSAlert, {
                props: {
                    variant: BSVariant.light
                }
            });

            assert.isTrue(component.classes("alert"));
            assert.isTrue(component.classes("alert-light"));
        });

        test("with a primary variant", async () => {
            const component = await mountSuspended(BSAlert, {
                props: {
                    variant: BSVariant.primary
                }
            });

            assert.isTrue(component.classes("alert"));
            assert.isTrue(component.classes("alert-primary"));
        });

        test("with a secondary variant", async () => {
            const component = await mountSuspended(BSAlert, {
                props: {
                    variant: BSVariant.secondary
                }
            });

            assert.isTrue(component.classes("alert"));
            assert.isTrue(component.classes("alert-secondary"));
        });

        test("with a success variant", async () => {
            const component = await mountSuspended(BSAlert, {
                props: {
                    variant: BSVariant.success
                }
            });

            assert.isTrue(component.classes("alert"));
            assert.isTrue(component.classes("alert-success"));
        });

        test("with a warning variant", async () => {
            const component = await mountSuspended(BSAlert, {
                props: {
                    variant: BSVariant.warning
                }
            });

            assert.isTrue(component.classes("alert"));
            assert.isTrue(component.classes("alert-warning"));
        });
    });
});
