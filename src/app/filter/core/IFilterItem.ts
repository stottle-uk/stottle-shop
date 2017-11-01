export interface IFilterItem {
    displayName: string;
    code: string;
    isSelected: boolean;
}

export interface IFilter {
    displayName: string;
    items: IFilterItem[];
}