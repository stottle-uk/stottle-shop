import { Observable } from "rxjs/Observable";

export interface ICartItem {
    id: string;    
    imageLink: string,
    description: string,
    detailLink: string,
    price: number,
    order: number
}

export interface ICartSummaryItem extends ICartItem {
    count: number;
}