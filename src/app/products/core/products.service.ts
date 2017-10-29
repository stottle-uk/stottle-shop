import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import { IProduct } from './IProduct';

@Injectable()
export class ProductsService {

    constructor() { }

    getProducts(count: number): Observable<IProduct[]> {
        const products: IProduct[] = [];
        for (var i = 0; i < count; i++) {
            products.push({
                description: `Product ${i}`,
                detailLink: '',
                order: i,
                price: Math.round(i * 2.99),
                imageLink: ''
            })
        }
        return Observable.of(products);
    }

}
