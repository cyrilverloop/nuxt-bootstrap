import { assert, suite, test } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { BSBreadcrumbs } from "#components";

suite("BSBreadcrumbs", () => {

    test("Can show a single level without link.", async () => {
        const component = await mountSuspended(BSBreadcrumbs, {
            props: {
                breadcrumbs: {
                    current: "Home"
                }
            }
        });

        const lis = component.findAll("li");

        assert.lengthOf(lis, 1);

        const li = lis[0];

        assert.strictEqual(li.text(), "Home");
        assert.lengthOf(
            li.findAll("a"),
            0,
            "The last item must not have a link."
        );
    });

    test("Can show many levels with links.", async () => {
        const component = await mountSuspended(BSBreadcrumbs, {
            props: {
                breadcrumbs: {
                    current: "Product",
                    parents: [
                        {
                            name: "Home",
                            link: "/"
                        },
                        {
                            name: "Products",
                            link: "/products/"
                        }
                    ]
                }
            }
        });

        const lis = component.findAll("li");

        assert.lengthOf(lis, 3);

        const homeA = lis[0].find("a");

        assert.strictEqual(homeA.text(), "Home");
        assert.strictEqual(homeA.attributes().href, "/");

        const productsA = lis[1].find("a");

        assert.strictEqual(productsA.text(), "Products");
        assert.strictEqual(productsA.attributes().href, "/products/");

        const productLi = lis[2];

        assert.strictEqual(productLi.text(), "Product");
        assert.lengthOf(
            productLi.findAll("a"),
            0,
            "The last item must not have a link."
        );
    });
});
