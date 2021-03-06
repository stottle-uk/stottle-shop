import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { ProductsComponent } from './products.component';
import { ProductsService } from './core/products.service';
import { CartService } from '../cart/core/cart.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    ProductsComponent
  ],
  exports: [
    ProductsComponent,
  ],
  providers: [
    ProductsService,
    CartService
  ]
})
export class ProductsModule { }
