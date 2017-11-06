import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ICategory } from './ICategory';

@Injectable()
export class CategoriesService {

  private _observavleCategories: BehaviorSubject<ICategory[]> = new BehaviorSubject([]);
  private _observableCurrentCategory: BehaviorSubject<ICategory> = new BehaviorSubject({
    name: '',
    code: '',
    childCategories: [],
    filters: []
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
  }

}
