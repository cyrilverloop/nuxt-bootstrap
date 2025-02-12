import type BSBreadcrumb from "./BSBreadcrumb";

export default interface BSBreadcrumbs {
    parents?: BSBreadcrumb[],
    current: string
};
