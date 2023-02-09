import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManuBarComponent } from './manu-bar/manu-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    ManuBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports:[
    ManuBarComponent
    
    
  ]
})
export class NavigationBarModule { }
