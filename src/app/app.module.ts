import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatListModule } from '@angular/material';

import { CartModule } from './cart/cart.module';
import { CategoriesModule } from './categories/categories.module';
import { FilterModule } from './filter/filter.module';
import { ProductsModule } from './products/products.module';
import { SearchModule } from './search/search.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    CartModule,
    CategoriesModule,
    FilterModule,
    ProductsModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
