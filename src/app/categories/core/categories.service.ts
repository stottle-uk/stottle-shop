import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { ICategory } from './ICategory';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CategoriesService {

  private _observavleCategories: BehaviorSubject<ICategory[]> = new BehaviorSubject([]);
  private _observableCurrentCategory: BehaviorSubject<ICategory> = new BehaviorSubject({
    name: '',
    code: '',
    childCategories: []
  });

  constructor(private http: HttpClient) {
    this.setupCategoriesObservable();
  }

  get observavleCategories(): Observable<ICategory[]> {
    return this._observavleCategories.asObservable()
  }

  get observablSelectedCategory(): Observable<ICategory> {
    return this._observableCurrentCategory.asObservable()
  }

  setCurrentCategory(category: ICategory): void {
    this._observableCurrentCategory.next(category);
  }

  private setupCategoriesObservable(): void {
    this.http
      .get<ICategory[]>("http://localhost:5000/api/category/1")
      .subscribe(category => this._observavleCategories.next(category));

    // const categories = [];
    // for (var i = 0; i < 8; i++) {
    //   categories.push({
    //     name: `name ${i}`,
    //     children: this.buildChildren(i),
    //     code: `0${i}`
    //   })
    // }
    // this._observavleCategories.next(categories);
  }

  // private buildChildren(count: number): IChildCategory[] {
  //   const categories = [];
  //   for (var i = 0; i < count; i++) {
  //     categories.push({
  //       name: `child ${i}`,
  //       code: `1${i}`
  //     })
  //   }
  //   return categories;
  // }

}
