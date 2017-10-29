import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import { IProduct } from './IProduct';

@Injectable()
export class ProductsService {

    constructor() { }

    getProducts(): Observable<IProduct[]> {
        const products: IProduct[] = [];
        for (var i = 0; i < 100; i++) {
            products.push({
                description: `Product ${i}`,
                detailLink: '',
                order: i,
                price: i * 2.99
            })
        }
        return Observable.of(products);
    }

}
