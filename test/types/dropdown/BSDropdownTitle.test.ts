import { assert, suite, test } from "vitest";
import { BSDropdownTitle } from "#nbs";

suite("BSDropdownTitle", () => {

    test("Can have an empty string content", async () => {
        const dropdownContent = new BSDropdownTitle("");

        assert.strictEqual(dropdownContent.content, "");
    });

    test("Can have a non empty string content", async () => {
        const dropdownContent = new BSDropdownTitle("content");

        assert.strictEqual(dropdownContent.content, "content");
    });
});
