import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/groupBy';

import { CartService } from './core/cart.service';
import { ICartItem, ICartSummaryItem } from './core/ICart';

@Component({
  selector: 'stottle-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartSummaryItems: Observable<ICartSummaryItem[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartSummaryItems = this.cartService.getSummary();
  }

}
