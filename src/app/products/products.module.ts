import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ProductsComponent } from './products.component';
import { ProductsService } from './core/products.service';
import { CartService } from '../cart/core/cart.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [
    ProductsComponent
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    ProductsService,
    CartService
  ]
})
export class ProductsModule { }
