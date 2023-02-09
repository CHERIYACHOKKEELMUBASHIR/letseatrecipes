import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
    
  ]
})
export class AdminModule { }
