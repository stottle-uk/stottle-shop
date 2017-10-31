import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';

import { CategoriesComponent } from './categories.component';

import { CategoriesService } from './core/categories.service';
import { ProductsService } from '../products/core/products.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: [
    CategoriesComponent
  ],
  exports: [
    CategoriesComponent
  ],
  providers: [
    CategoriesService,
    ProductsService
  ]
})
export class CategoriesModule { }
