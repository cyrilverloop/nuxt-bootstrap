import { assert, suite, test } from "vitest";
import { BSDropdownText } from "#nbs";

suite("BSDropdownText", () => {

    test("Can have an empty string content", async () => {
        const dropdownContent = new BSDropdownText("");

        assert.strictEqual(dropdownContent.content, "");
    });

    test("Can have a non empty string content", async () => {
        const dropdownContent = new BSDropdownText("content");

        assert.strictEqual(dropdownContent.content, "content");
    });
});
