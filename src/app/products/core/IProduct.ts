import { IFilterItem } from "../../filter/core/IFilterItem";
import { ICategory } from "../../categories/core/ICategory";

export interface IProduct {
    id: string;
    detailLink: string;
    displayName: string;
    imageLinks: { [key: number]: string };
    order: number;
    price: number;
    category: ICategory;
    filters: IFilterItem;
}

export interface IProductFilters {
    category: string;
    filters: string;
    searchTerm: string;
}