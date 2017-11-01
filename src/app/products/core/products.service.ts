import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';

import { IProduct } from './IProduct';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CategoriesService } from '../../categories/core/categories.service';
import { IChildCategory } from '../../categories/core/ICategory';

export interface IProductFilters {
    category: IChildCategory;
}

@Injectable()
export class ProductsService {

    private _observableProducts: BehaviorSubject<IProduct[]> = new BehaviorSubject([]);;
    private _productFilters: IProductFilters = {
        category: {
            code: '',
            name: ''
        }
    };
    private _observableProductFilters: BehaviorSubject<IProductFilters> = new BehaviorSubject(this._productFilters);

    constructor(
        private categoriesService: CategoriesService,
    ) {
        this.categoriesService
            .observableCurrentCategory
            .subscribe(cat => {
                this._productFilters.category = cat
                this._observableProductFilters.next(this._productFilters);
            })

        this._observableProductFilters
            .subscribe(filter => {
                let temp = []
                for (var i = 0; i < 24; i++) {
                    temp.push({
                        categoryCode: `010${i}`,
                        id: i.toString(),
                        description: `Product ${filter.category.name}`,
                        detailLink: '',
                        order: i,
                        price: Math.round(i * 2.99),
                        imageLink: ''
                    })
                }
                this._observableProducts.next(temp);
            });
    }

    get observableProducts(): Observable<IProduct[]> {
        return this._observableProducts.asObservable()
    }

}
