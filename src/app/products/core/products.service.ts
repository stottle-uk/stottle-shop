import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CategoriesService } from '../../categories/core/categories.service';
import { FilterService } from '../../filter/core/filter.service';
import { SearchService } from '../../search/core/search.service';

import { IChildCategory } from '../../categories/core/ICategory';
import { IFilterItem } from '../../filter/core/IFilterItem';
import { IProduct, IProductFilters } from './IProduct';

@Injectable()
export class ProductsService {

    private _observableProducts: BehaviorSubject<IProduct[]> = new BehaviorSubject([]);;
    private _productFilters: IProductFilters = {
        category: {
            code: '',
            name: ''
        },
        filters: [],
        searchTerm: ''
    };
    private _observableProductFilters: BehaviorSubject<IProductFilters> = new BehaviorSubject(this._productFilters);

    constructor(
        private categoriesService: CategoriesService,
        private filterService: FilterService,
        private searchService: SearchService

    ) {
        this.categoriesService
            .observableCurrentCategory
            .subscribe(cat => {
                this._productFilters.category = cat;
                this._productFilters.filters = [];
                this._observableProductFilters.next(this._productFilters);
            });

        this.filterService
            .observableSelectedFilters
            .subscribe(filters => {
                this._productFilters.filters = filters
                this._observableProductFilters.next(this._productFilters);
            });

        this.searchService
            .observableSearchTerm
            .subscribe(searchTerm => {
                this._productFilters.searchTerm = searchTerm;
                this._observableProductFilters.next(this._productFilters);
            });

        this._observableProductFilters
            .subscribe(filter => {
                let temp = []
                for (var i = 0; i < 24; i++) {
                    temp.push({
                        categoryCode: `${filter.category.name}`,
                        id: i.toString(),
                        description: `Product ${filter.searchTerm} ${filter.filters.reduce((prev, acc) => `${prev}-${acc.code}`, '')}`,
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
