import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { IFilterItem, IFilter } from './IFilterItem';
import { CategoriesService } from '../../categories/core/categories.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FilterService {

    private _observableFilters: BehaviorSubject<IFilter[]> = new BehaviorSubject([]);

    constructor(private categoriesService: CategoriesService) {
        this.setFilterObservable();
    }

    get observableFilters(): Observable<IFilter[]> {
        return this._observableFilters.asObservable()
    }

    private setFilterObservable() {
        this.categoriesService
            .observableCurrentCategory
            .switchMap(cat => {
                const filter: IFilter = {
                    displayName: `Filter ${cat.name}`,
                    items: this.getFilterItems(10)
                };
                return Observable.of([filter]);
            })
            .subscribe(filters => {
                this._observableFilters.next(filters);
            });
    }

    private getFilterItems(count: number): IFilterItem[] {
        const filterItems: IFilterItem[] = [];
        for (var i = 0; i < count; i++) {
            filterItems.push({
                displayName: `Product ${i}`,
                code: ''
            })
        }
        return filterItems;
    }

}
