import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchService } from './core/search.service';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule,
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
