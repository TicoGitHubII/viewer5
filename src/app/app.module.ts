import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxGalleryModule} from '@rybos/ngx-gallery'
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-bootstrap/carousel'
import {PaginationModule} from 'ngx-bootstrap/pagination'

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ViewerStyleDirective } from './directives/viewer-style.directive';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RotateImgDirective } from './directives/rotate-img.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProductComponent,
    ProductsComponent,
    ViewerStyleDirective,
    CarouselComponent,
    RotateImgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxGalleryModule,
    BrowserAnimationsModule,
    CarouselModule,
    PaginationModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
