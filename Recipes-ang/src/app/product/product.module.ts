import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { ViewProductComponent } from './view-product/view-product.component'



@NgModule({
  declarations: [
    ProductListComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule

  ],

  exports:[
    ProductListComponent,
    ViewProductComponent


  ]
})
export class ProductModule { }
