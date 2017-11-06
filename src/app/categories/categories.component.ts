import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CategoriesService } from './core/categories.service';
import { ICategory } from './core/ICategory';

@Component({
  selector: 'stottle-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Observable<ICategory[]>;

  constructor(
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit() {
    this.categories = this.categoriesService.observavleCategories;
  }

  searchCategory(category: ICategory) {
    this.categoriesService.setCurrentCategory(category);
  }

}
