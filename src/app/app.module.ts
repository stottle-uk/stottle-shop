import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesModule } from './categories/categories.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    ProductsComponent,
    CartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,    
    NgbModule.forRoot(),
    CategoriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
