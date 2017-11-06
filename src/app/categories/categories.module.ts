import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';

import { CategoriesComponent } from './categories.component';
import { CategoriesService } from './core/categories.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
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
    CategoriesService
  ]
})
export class CategoriesModule { }
