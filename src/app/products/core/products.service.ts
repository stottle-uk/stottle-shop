import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';

import { IProduct } from './IProduct';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface IProductFilters {
    category: string;
}

@Injectable()
export class ProductsService {

    private _products: IProduct[];
    private _observableProducts: BehaviorSubject<IProduct[]>;
    private _productFilters: IProductFilters;

    constructor() {
        this._products = []
        for (var i = 0; i < 24; i++) {
            this._products.push({
                categoryCode: `010${i}`,
                id: i.toString(),
                description: `Product ${i}`,
                detailLink: '',
                order: i,
                price: Math.round(i * 2.99),
                imageLink: ''
            })
        }

        this._observableProducts = new BehaviorSubject(this._products);

        this._productFilters = {
            category: ''
        };
    }

    get observableProducts(): Observable<IProduct[]> { 
        return this._observableProducts.asObservable() 
    }

    setCategory(categoryCode: string): void {
        const product: IProduct = {
            id: "333",
            detailLink: '',
            categoryCode: categoryCode,
            description: 'New Product',
            imageLink: '',
            order: 1,
            price: 1
        }
        this._products.push(product);
        this._observableProducts.next(this._products);
    }

}
