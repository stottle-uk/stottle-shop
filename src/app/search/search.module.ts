import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule } from '@angular/material';

import { SearchService } from './core/search.service';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent,
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule { }
