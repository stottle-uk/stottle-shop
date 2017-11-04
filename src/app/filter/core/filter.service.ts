import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { IFilterItem, IFilter } from './IFilterItem';
import { CategoriesService } from '../../categories/core/categories.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FilterService {

    private _selectedfilters: IFilterItem[] = [];
    private _observableFilters: BehaviorSubject<IFilter[]> = new BehaviorSubject([]);
    private _observableSelectedFilters: BehaviorSubject<IFilterItem[]> = new BehaviorSubject([]);

    constructor(private categoriesService: CategoriesService) {
        this.setupFilterObservable();
    }

    get observableFilters(): Observable<IFilter[]> {
        return this._observableFilters.asObservable()
    }

    get observableSelectedFilters(): Observable<IFilterItem[]> {
        return this._observableSelectedFilters.asObservable()
    }

    toggleFilter(filter: IFilterItem): void {
        let index = this._selectedfilters.findIndex(sf => sf.code === filter.code);
        if (index > -1) {
            this._selectedfilters.splice(index, 1);
        } else {
            this._selectedfilters.push(filter);
        }
        this._observableSelectedFilters.next(this._selectedfilters);
    }

    private setupFilterObservable() {
        this.categoriesService
            .observableCurrentCategory
            .switchMap(cat => {
                this._observableSelectedFilters.next([]);
                
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
                code: `${i}`,
                isSelected: false
            })
        }
        return filterItems;
    }

}
