import { assert, suite, test } from "vitest";
import { BSDropdownContent } from "#nbs";

suite("BSDropdownContent", () => {

    test("Can have an empty string content", async () => {
        const dropdownContent = new BSDropdownContent("");

        assert.strictEqual(dropdownContent.content, "");
    });

    test("Can have a non empty string content", async () => {
        const dropdownContent = new BSDropdownContent("content");

        assert.strictEqual(dropdownContent.content, "content");
    });
});
