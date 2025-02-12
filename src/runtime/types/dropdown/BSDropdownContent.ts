export abstract class BSDropdownContent {

    // Properties :

    protected _content: string;


    // Constructor :

    /**
     * The constructor.
     * @param {string} content - the content.
     */
    constructor(content: string) {
        this._content = content;
    }


    // Accessors :

    /**
     * Returns the content.
     * @returns {string} - the content.
     */
    get content(): string
    {
        return this._content;
    }
};
