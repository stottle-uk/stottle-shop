import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CartModule } from './cart/cart.module';
import { CategoriesModule } from './categories/categories.module';
import { FilterModule } from './filter/filter.module';
import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { SearchService } from './search/core/search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CartModule,
    CategoriesModule,
    FilterModule,
    ProductsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
