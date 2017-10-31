import { Observable } from "rxjs/Observable";

export interface ICartItem {
    imageLink: string,
    description: string,
    detailLink: string,
    price: number,
    order: number
}

export interface ICartSummaryItem {
    name: string,
    count: number;
}