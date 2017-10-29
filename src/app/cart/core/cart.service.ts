import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/filter';

import { ICartItem } from './ICart';

@Injectable()
export class CartService {

    public cartItems: Observable<ICartItem>;

    constructor() { 
        let cartItems = [];
        for (var i = 0; i < 8; i++) {
            cartItems.push({
                description: `Product ${i}`,
                detailLink: '',
                order: i,
                price: Math.round(i * 2.99),
                imageLink: ''
            })
        }
        this.cartItems = Observable.from(cartItems);
    }

    getCartItems(): Observable<ICartItem> {
        return this.cartItems;
    }

    addItem(item: ICartItem): void {
        let newItem = Observable.of(item);
        this.cartItems = this.cartItems.merge(newItem);
    }

    getItemCount(item: ICartItem): Observable<number> {
        return this.cartItems
            .filter(i => i.description === item.description)
            .count();
    }

}
