import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/debounceTime';

import { CategoriesService } from '../../categories/core/categories.service';
import { FilterService } from '../../filter/core/filter.service';
import { SearchService } from '../../search/core/search.service';

import { IProduct, IProductFilters } from './IProduct';

@Injectable()
export class ProductsService {

    private _observableProducts: BehaviorSubject<IProduct[]> = new BehaviorSubject([]);;
    private _productFilters: IProductFilters = {
        category: '',
        filters: '',
        searchTerm: ''
    };
    private _observableProductFilters: BehaviorSubject<IProductFilters> = new BehaviorSubject(this._productFilters);

    constructor(
        private categoriesService: CategoriesService,
        private filterService: FilterService,
        private http: HttpClient,
        private searchService: SearchService

    ) {
        this.categoriesService
            .observablSelectedCategory
            .subscribe(cat => {
                this._productFilters.category = cat.code;
                this._productFilters.filters = '';
                this._observableProductFilters.next(this._productFilters);
            });

        this.filterService
            .observableSelectedFilters
            .subscribe(filters => {
                this._productFilters.filters = filters.map(f => f.code).join(',')
                this._observableProductFilters.next(this._productFilters);
            });

        this.searchService
            .observableSearchTerm
            .subscribe(searchTerm => {
                this._productFilters.searchTerm = searchTerm;
                this._observableProductFilters.next(this._productFilters);
            });

        this._observableProductFilters
            .debounceTime(300)
            .switchMap(filter => {
                const criteria = this.buildQueryString(filter);
                return this.http
                    .get<IProduct[]>(`http://localhost:5000/api/products/?${criteria}`);
            })
            .subscribe(products => {
                console.log(products)
                this._observableProducts.next(products);
            });
    }

    get observableProducts(): Observable<IProduct[]> {
        return this._observableProducts.asObservable()
    }

    private buildQueryString<T>(obj: T): string {
        return Object.keys(obj)
            .filter(k => obj[k] !== undefined)
            .filter(k => obj[k] !== '')
            .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
            .join('&');
    }

}
