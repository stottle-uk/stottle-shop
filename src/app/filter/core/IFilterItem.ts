export interface IFilterItem {
    displayName: string,
    code: string,
}

export interface IFilter {
    displayName: string,
    items: IFilterItem[]
}