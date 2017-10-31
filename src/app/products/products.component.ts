import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CartService } from '../cart/core/cart.service';
import { ProductsService } from './core/products.service';
import { IProduct } from './core/IProduct';
import { ICartItem } from '../cart/core/ICart';

@Component({
  selector: 'stottle-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Observable<IProduct[]>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts(25);
  }

  addToCart(product: IProduct): void {
    const cartItem = this.convertToCartItem(product)
    this.cartService.addItem(cartItem);
  }

  removeFromCart(product: IProduct): void {
    const cartItem = this.convertToCartItem(product)
    this.cartService.removeItem(cartItem);
  }

  getCount(product: IProduct): Observable<number> {
    const cartItem = this.convertToCartItem(product)
    return this.cartService.getItemCount(cartItem);
  }

  private convertToCartItem(product: IProduct): ICartItem {
    return {
      id: product.id,
      detailLink: product.detailLink,
      description: product.description,
      imageLink: product.imageLink,
      order: product.order,
      price: product.price,
    };
  }

}
