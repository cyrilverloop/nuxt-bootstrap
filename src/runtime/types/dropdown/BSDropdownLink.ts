import { BSDropdownContent } from "./BSDropdownContent";

export class BSDropdownLink extends BSDropdownContent {

    // Properties :

    #href: string;
    #active: boolean;
    #disabled: boolean;


    // Constructor :

    /**
     * The constructor.
     * @param {string} content - the content.
     * @param {string} href - the link.
     * @param {boolean} active - if the link is active.
     * @param {boolean} disabled - if the link is disabled.
     */
    constructor(
        content: string,
        href: string,
        active: boolean = false,
        disabled: boolean = false
    ) {
        super(content);

        this.#href = href;
        this.#active = active;
        this.#disabled = disabled;
    }


    // Accessors :

    /**
     * Returns the href.
     * @returns {string} - the href.
     */
    get href(): string
    {
        return this.#href;
    }

    /**
     * Returns the active state.
     * @returns {string} - the active state.
     */
    get isActive(): boolean
    {
        return this.#active;
    }

    /**
     * Returns the disabled state.
     * @returns {string} - the disabled state.
     */
    get isDisabled(): boolean
    {
        return this.#disabled;
    }
};
