import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProductsService } from './core/products.service';
import { IProduct } from './core/IProduct';

@Component({
  selector: 'stottle-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Observable<IProduct[]>;
  
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts(24);
  }

}
