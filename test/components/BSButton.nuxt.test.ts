import { assert, suite, test } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { BSButton } from "#components";
import { BSVariant } from "#nbs";

suite("BSButton", () => {

    test("Can have a text", async () => {
        const component = await mountSuspended(BSButton, {
            slots: {
                default: () => { return "test button";}
            }
        });

        assert.strictEqual(component.text(), "test button");
    });

    test("Can have a 'no-wrap' class", async () => {
        const component = await mountSuspended(BSButton, {
            props: {
                textNoWrap: true
            }
        });

        assert.isTrue(component.classes("text-nowrap"));
    });

    suite("Has by default", () => {

        test("a primary variant", async () => {
            const component = await mountSuspended(BSButton);

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-primary"));
        });

        test("not a 'no-wrap' class", async () => {
            const component = await mountSuspended(BSButton);

            assert.isFalse(component.classes("no-wrap"));
        });

        test("not an outline variant", async () => {
            const component = await mountSuspended(BSButton);

            assert.isFalse(component.classes("btn-outline-primary"));
        });
    });

    suite("Can show a non outline button", () => {

        test("with a danger variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.danger,
                    outline: false
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-danger"));
        });

        test("with a dark variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.dark,
                    outline: false
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-dark"));
        });

        test("with a info variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.info,
                    outline: false
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-info"));
        });

        test("with a light variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.light,
                    outline: false
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-light"));
        });

        test("with a primary variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.primary,
                    outline: false
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-primary"));
        });

        test("with a secondary variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.secondary,
                    outline: false
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-secondary"));
        });

        test("with a success variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.success,
                    outline: false
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-success"));
        });

        test("with a warning variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.warning,
                    outline: false
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-warning"));
        });

        test("with a link variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: "link",
                    outline: false
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-link"));
        });
    });

    suite("Can show an outline button", () => {

        test("with a danger variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.danger,
                    outline: true
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-outline-danger"));
        });

        test("with a dark variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.dark,
                    outline: true
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-outline-dark"));
        });

        test("with a info variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.info,
                    outline: true
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-outline-info"));
        });

        test("with a light variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.light,
                    outline: true
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-outline-light"));
        });

        test("with a primary variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.primary,
                    outline: true
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-outline-primary"));
        });

        test("with a secondary variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.secondary,
                    outline: true
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-outline-secondary"));
        });

        test("with a success variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.success,
                    outline: true
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-outline-success"));
        });

        test("with a warning variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: BSVariant.warning,
                    outline: true
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-outline-warning"));
        });

        test("with a link variant", async () => {
            const component = await mountSuspended(BSButton, {
                props: {
                    variant: "link",
                    outline: true
                }
            });

            assert.isTrue(component.classes("btn"));
            assert.isTrue(component.classes("btn-outline-link"));
        });
    });
});
