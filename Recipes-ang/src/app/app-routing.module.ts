import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';



const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module')
    .then(ndl=>ndl.AuthModule)
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module')
    .then(ndl=>ndl.AdminModule)
  },
  {
    path:'product',
    loadChildren:()=>import('./product/product.module')
    .then(ndl=>ndl.ProductModule)
  },
  {
    path:'videos/:name',
    component:VideosComponent
  },
  {
    path:'feed',
    component:FeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
