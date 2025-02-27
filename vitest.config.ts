import { defineVitestConfig } from "@nuxt/test-utils/config";
import { coverageConfigDefaults } from "vitest/config";
import { fileURLToPath } from 'node:url';

export default defineVitestConfig({
    test: {
        coverage: {
            exclude: [
                ".nuxt/**",
                "ci/**",
                "playground/**",
                "src/module.ts",
                ...coverageConfigDefaults.exclude
            ],
            include: [
                "src/**"
            ],
            reporter: ["html"],
            reportsDirectory: "./ci/v8/"
        },
        environment: "nuxt",
        environmentOptions: {
            nuxt: {
                rootDir: fileURLToPath(new URL("./", import.meta.url))
            }
        }
    }
});
