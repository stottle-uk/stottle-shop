export interface ICategory {
    name: string;
    childCategories: ICategory[];
    code: string;
    filters: string[];
}