import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './core/categories.service';
import { ICategory } from './core/ICategory';
import { ProductsService } from '../products/core/products.service';

@Component({
  selector: 'stottle-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: ICategory[];

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.categoriesService
      .getCategories()
      .subscribe(categories => this.categories = categories);
  }

  searchCategory(category: ICategory) {
    this.productsService.setCategory(category.code);
  }

}
