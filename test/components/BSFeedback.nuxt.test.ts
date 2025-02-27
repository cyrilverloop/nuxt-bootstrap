import { assert, suite, test } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { BSFeedback } from "#components";

suite("BSFeedback", () => {

    test("Can have a text", async () => {
        const component = await mountSuspended(BSFeedback, {
            props: {
                valid: true
            },
            slots: {
                default: () => { return "test feedback";}
            }
        });

        assert.strictEqual(component.text(), "test feedback");
    });

    test("Can be valid", async () => {
        const component = await mountSuspended(BSFeedback, {
            props: {
                valid: true
            }
        });

        assert.isTrue(component.classes("valid-feedback"));
    });

    test("Can be invalid", async () => {
        const component = await mountSuspended(BSFeedback, {
            props: {
                valid: false
            }
        });

        assert.isTrue(component.classes("invalid-feedback"));
    });
});
