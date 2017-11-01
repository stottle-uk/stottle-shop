import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import { ICategory, IChildCategory } from './ICategory';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CategoriesService {

  private _observavleCategories: BehaviorSubject<ICategory[]> = new BehaviorSubject([]);
  private _observableCurrentCategory: BehaviorSubject<IChildCategory> = new BehaviorSubject({
    name: '',
    code: ''
  });

  constructor() {
    this.getCategories();
  }

  get observavleCategories(): Observable<ICategory[]> {
    return this._observavleCategories.asObservable()
  }

  get observableCurrentCategory(): Observable<IChildCategory> {
    return this._observableCurrentCategory.asObservable()
  }

  setCurrentCategory(category: IChildCategory): void {
    this._observableCurrentCategory.next(category);
  }

  private getCategories(): void {
    const categories = [];
    for (var i = 0; i < 8; i++) {
      categories.push({
        name: `name ${i}`,
        children: this.buildChildren(i),
        code: `0${i}`
      })
    }
    this._observavleCategories.next(categories);
  }

  private buildChildren(count: number): IChildCategory[] {
    const categories = [];
    for (var i = 0; i < count; i++) {
      categories.push({
        name: `child ${i}`,
        code: `1${i}`
      })
    }
    return categories;
  }

}
