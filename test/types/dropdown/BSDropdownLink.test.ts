import { assert, suite, test } from "vitest";
import { BSDropdownLink } from "#nbs";

suite("BSDropdownLink", () => {

    test("Can have an empty string content", async () => {
        const dropdownContent = new BSDropdownLink("");

        assert.strictEqual(dropdownContent.content, "");
    });

    test("Can have a non empty string content", async () => {
        const dropdownContent = new BSDropdownLink("content");

        assert.strictEqual(dropdownContent.content, "content");
    });


    test("Can have an empty string href", async () => {
        const dropdownContent = new BSDropdownLink("", "");

        assert.strictEqual(dropdownContent.href, "");
    });

    test("Can have a non empty string href", async () => {
        const dropdownContent = new BSDropdownLink("", "href");

        assert.strictEqual(dropdownContent.href, "href");
    });


    test("Can be active", async () => {
        const dropdownContent = new BSDropdownLink("", "", true);

        assert.isTrue(dropdownContent.isActive);
    });

    test("Can be inactive", async () => {
        const dropdownContent = new BSDropdownLink("", "", false);

        assert.isFalse(dropdownContent.isActive);
    });


    test("Can be disable", async () => {
        const dropdownContent = new BSDropdownLink("", "", false, true);

        assert.isTrue(dropdownContent.isDisabled);
    });

    test("Can be enable", async () => {
        const dropdownContent = new BSDropdownLink("", "", false, false);

        assert.isFalse(dropdownContent.isDisabled);
    });


    suite("Is by default", () => {

        test("Inactive", async () => {
            const dropdownContent = new BSDropdownLink("", "");

            assert.isFalse(dropdownContent.isActive);
        });

        test("Enable", async () => {
            const dropdownContent = new BSDropdownLink("", "");

            assert.isFalse(dropdownContent.isDisabled);
        });
    });
});
