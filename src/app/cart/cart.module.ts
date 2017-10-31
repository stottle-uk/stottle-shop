import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';

import { CartComponent } from './cart.component';
import { CartService } from './core/cart.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule
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
