import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/mergeMap';

import { ICartItem, ICartSummaryItem } from './ICart';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {

    private _items: ICartItem[] = [];
    private _observableItems: BehaviorSubject<ICartItem[]> = new BehaviorSubject([]);

    constructor() { }

    get observableSummary(): Observable<ICartSummaryItem[]> {
        return this.getCartItems()
            .map(this.mapToSummaryItem)
            .reduce(this.reduceSummaryItems, [] as ICartSummaryItem[])
    }

    addItem(item: ICartItem): void {
        this._items.push(item);
        this._observableItems.next(this._items);
    }

    removeItem(item: ICartItem): void {
        const index = this._items
            .reverse()
            .findIndex(i => i.id === item.id);
        if (index > -1) {
            this._items.splice(index, 1);
        }
        this._observableItems.next(this._items);
    }

    getCartItems(): Observable<ICartItem> {
        return Observable.from(this._items);
    }

    getItemCount(item: ICartItem): Observable<number> {
        return this.getCartItems()
            .filter(i => i.id === item.id)
            .count();
    }

    private mapToSummaryItem(cartItem: ICartItem): ICartSummaryItem {
        return {
            id: cartItem.id,
            name: cartItem.description,
            count: 0
        }
    }

    private reduceSummaryItems(items: ICartSummaryItem[], item: ICartSummaryItem): ICartSummaryItem[] {
        if (!items.some(a => a.id === item.id)) {
            items.push(item);
        }
        return items.map(a => {
            return {
                id: a.id,
                name: a.name,
                count: a.id === item.id ? a.count + 1 : a.count
            };
        });
    }
}
