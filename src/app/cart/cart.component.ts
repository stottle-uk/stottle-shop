import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/groupBy';


import { CartService } from './core/cart.service';
import { ICartItem } from './core/ICart';

@Component({
  selector: 'stottle-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any;
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartItems.subscribe(c => this.cartItems = c);//.groupBy(i => i.description);
  }

}
