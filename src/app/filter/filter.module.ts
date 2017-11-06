import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FilterComponent } from './filter.component';
import { FilterService } from './core/filter.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  declarations: [
    FilterComponent
  ],
  exports: [
    FilterComponent
  ],
  providers: [
    FilterService
  ]
})
export class FilterModule { }
