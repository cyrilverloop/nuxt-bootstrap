import BSVariant from "./BSVariant";

export default interface BSProgress {
    label: string,
    valuenow: number,
    variant: BSVariant,
    valuemin?: number,
    valuemax?: number,
    striped?: boolean,
    animated?: boolean,
    height?: string
};
