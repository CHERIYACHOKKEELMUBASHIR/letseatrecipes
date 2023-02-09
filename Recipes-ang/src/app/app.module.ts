import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarModule } from './navigation-bar/navigation-bar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { VideosComponent } from './videos/videos.component';
import { AdminModule } from './admin/admin.module';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { FeedbackComponent } from './feedback/feedback.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideosComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationBarModule,
    BrowserAnimationsModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    AdminModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
