import { defineNuxtPlugin } from "#app";
import * as bootstrap from "bootstrap";

export default defineNuxtPlugin(() => ({
    provide: {
        bootstrap: bootstrap
    },
}));
