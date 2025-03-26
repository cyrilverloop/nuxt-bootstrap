import { assert, suite, test } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { BSProgress } from "#components";
import { BSVariant } from "#nbs";

suite("BSProgress", () => {

    suite("Can have", () => {

        test("a text", async () => {
            const component = await mountSuspended(BSProgress, {
                slots: {
                    default: () => { return "test progress";}
                }
            });

            assert.strictEqual(component.text(), "test progress");
        });

        test("a label", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    label: "test progress"
                }
            });

            assert.strictEqual(component.attributes()["aria-label"], "test progress");
        });

        test("a valuenow", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    valuenow: 5
                }
            });

            assert.strictEqual(component.attributes()["aria-valuenow"], "5");
        });

        test("a valuemin", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    valuenow: 5,
                    valuemin: 5
                }
            });

            assert.strictEqual(component.attributes()["aria-valuemin"], "5");
        });

        test("a valuemax", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    valuemax: 5
                }
            });

            assert.strictEqual(component.attributes()["aria-valuemax"], "5");
        });

        test("a height not in a multiple progress", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    height: "2rem",
                    inMultiple: false
                }
            });

            assert.include(component.attributes()['style'], "height: 2rem;");
        });

        test("a height in a multiple progress", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    height: "2rem",
                    inMultiple: true
                }
            });

            assert.include(component.attributes()['style'], "height: 2rem;");
        });
    });

    suite("Can be", () => {

        test("not striped", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    striped: false
                }
            });
            const progressBarNode = component.find('.progress-bar');

            assert.isFalse(progressBarNode.classes("progress-bar-striped"));
        });

        test("striped", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    striped: true
                }
            });
            const progressBarNode = component.find('.progress-bar');

            assert.isTrue(progressBarNode.classes("progress-bar-striped"));
        });

        test("animated", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    striped: true,
                    animated: true
                }
            });
            const progressBarNode = component.find('.progress-bar');

            assert.isTrue(progressBarNode.classes("progress-bar-striped"));
            assert.isTrue(progressBarNode.classes("progress-bar-animated"));
        });

        test("not animated", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    animated: false
                }
            });
            const progressBarNode = component.find('.progress-bar');

            assert.isFalse(progressBarNode.classes("progress-bar-animated"));
        });

        test("in a multiple progress", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    valuenow: 5,
                    height: "2rem",
                    inMultiple: true
                }
            });
            assert.include(component.attributes()['style'], "height: 2rem;");
            assert.include(component.attributes()['style'], "width: 5%;");

            const progressBarNode = component.find('.progress-bar');
            assert.notInclude(progressBarNode.attributes()['style'], "width");
        });

        test("not in a multiple progress", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    valuenow: 5,
                    height: "2rem",
                    inMultiple: false
                }
            });
            assert.include(component.attributes()['style'], "height: 2rem;");
            assert.notInclude(component.attributes()['style'], "width");

            const progressBarNode = component.find('.progress-bar');
            assert.include(progressBarNode.attributes()['style'], "width: 5%;");
        });
    });

    suite("By default", () => {

        test("has a primary variant", async () => {
            const component = await mountSuspended(BSProgress);
            const progressBarNode = component.find('.progress-bar');

            assert.isTrue(progressBarNode.classes("text-bg-primary"));
        });

        test("is not striped", async () => {
            const component = await mountSuspended(BSProgress);
            const progressBarNode = component.find('.progress-bar');

            assert.isFalse(progressBarNode.classes("progress-bar-striped"));
        });

        test("is not animated", async () => {
            const component = await mountSuspended(BSProgress);
            const progressBarNode = component.find('.progress-bar');

            assert.isFalse(progressBarNode.classes("progress-bar-animated"));
        });

        test("has a 0 valuenow", async () => {
            const component = await mountSuspended(BSProgress);

            assert.strictEqual(component.attributes()["aria-valuenow"], "0");
        });

        test("has a 0 valuemin", async () => {
            const component = await mountSuspended(BSProgress);

            assert.strictEqual(component.attributes()["aria-valuemin"], "0");
        });

        test("has a 100 valuemax", async () => {
            const component = await mountSuspended(BSProgress);

            assert.strictEqual(component.attributes()["aria-valuemax"], "100");
        });

        test("has a 1rem height", async () => {
            const component = await mountSuspended(BSProgress);

            assert.include(component.attributes()['style'], "height: 1rem;");
        });

        test("is not in a multiple progress", async () => {
            const component = await mountSuspended(BSProgress);

            assert.notInclude(component.attributes()['style'], "width");

            const progressBarNode = component.find('.progress-bar');
            assert.include(progressBarNode.attributes()['style'], "width: 0%;");
        });
    });

    suite("Can show a progress bar", () => {

        test("with a danger variant", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    variant: BSVariant.danger
                }
            });
            const progressBarNode = component.find('.progress-bar');

            assert.isTrue(progressBarNode.classes("text-bg-danger"));
        });

        test("with a dark variant", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    variant: BSVariant.dark
                }
            });
            const progressBarNode = component.find('.progress-bar');

            assert.isTrue(progressBarNode.classes("text-bg-dark"));
        });

        test("with a info variant", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    variant: BSVariant.info
                }
            });
            const progressBarNode = component.find('.progress-bar');

            assert.isTrue(progressBarNode.classes("text-bg-info"));
        });

        test("with a light variant", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    variant: BSVariant.light
                }
            });
            const progressBarNode = component.find('.progress-bar');

            assert.isTrue(progressBarNode.classes("text-bg-light"));
        });

        test("with a primary variant", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    variant: BSVariant.primary
                }
            });
            const progressBarNode = component.find('.progress-bar');

            assert.isTrue(progressBarNode.classes("text-bg-primary"));
        });

        test("with a secondary variant", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    variant: BSVariant.secondary
                }
            });
            const progressBarNode = component.find('.progress-bar');

            assert.isTrue(progressBarNode.classes("text-bg-secondary"));
        });

        test("with a success variant", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    variant: BSVariant.success
                }
            });
            const progressBarNode = component.find('.progress-bar');

            assert.isTrue(progressBarNode.classes("text-bg-success"));
        });

        test("with a warning variant", async () => {
            const component = await mountSuspended(BSProgress, {
                props: {
                    variant: BSVariant.warning
                }
            });
            const progressBarNode = component.find('.progress-bar');

            assert.isTrue(progressBarNode.classes("text-bg-warning"));
        });
    });
});
