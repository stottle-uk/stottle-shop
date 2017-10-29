import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import { IFilterItem, IFilter } from './IFilterItem';

@Injectable()
export class FilterService {

    constructor() { }

    getFilter(count: number): Observable<IFilter> {
        const filter = {
            displayName: `Filter ${count}`,
            items: this.getFilterItems(count)
        };
        return Observable.of(filter);
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
