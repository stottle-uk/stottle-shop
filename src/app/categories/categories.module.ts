import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CategoriesComponent } from './categories.component';
import { CategoriesService } from './core/categories.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
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
