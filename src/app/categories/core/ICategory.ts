export interface ICategory {
    name: string,
    children: IChildCategory[],
    code: string
}

export interface IChildCategory {
    name: string;
    code: string;
}