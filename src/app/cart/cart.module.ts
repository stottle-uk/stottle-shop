import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CartComponent } from './cart.component';
import { CartService } from './core/cart.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
