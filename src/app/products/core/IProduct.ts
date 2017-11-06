import { IChildCategory } from "../../categories/core/ICategory";
import { IFilterItem } from "../../filter/core/IFilterItem";

export interface IProduct {
    id: string;
    detailLink: string;
    description: string;
    imageLink: string;
    order: number;
    price: number;
    categoryCode: string;
}

export interface IProductFilters {
    category: IChildCategory;
    filters: IFilterItem[];
    searchTerm: string;
}