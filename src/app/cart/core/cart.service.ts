import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/mergeMap';

import { ICartItem, ICartSummaryItem } from './ICart';

@Injectable()
export class CartService {

    private items: ICartItem[] = [];

    constructor() {
        for (var i = 0; i < 4; i++) {
            this.items.push({
                description: `Product ${i}`,
                detailLink: '',
                order: i,
                price: Math.round(i * 2.99),
                imageLink: ''
            })
        }
    }

    addItem(item: ICartItem): void {
        this.items.push(item);
    }

    getCartItems(): Observable<ICartItem> {
        return Observable.from(this.items);
    }

    getSummary(): Observable<ICartSummaryItem[]> {
        return this.getCartItems()
            .map(this.mapToSummaryItem)
            .reduce(this.reduceSummaryItems, [] as ICartSummaryItem[])
    }

    getItemCount(item: ICartItem): Observable<number> {
        return this.getCartItems()
            .filter(i => i.description === item.description)
            .count();
    }

    private mapToSummaryItem(cartItem: ICartItem): ICartSummaryItem {
        return {
            name: cartItem.description,
            count: 0
        }
    }

    private reduceSummaryItems(items: ICartSummaryItem[], item: ICartSummaryItem): ICartSummaryItem[] {
        if (!items.some(a => a.name === item.name)) {
            items.push(item);
        }
        return items.map(a => {
            return {
                name: a.name,
                count: a.name === item.name ? a.count + 1 : a.count
            };
        });
    }
}
