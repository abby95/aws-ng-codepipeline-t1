import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ProductsComponent } from './Pages/products/products.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { ParentChildInteractionComponent } from './Pages/parent-child-interaction/parent-child-interaction.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { adminGuardGuard } from './guards/admin-guard.guard';

const routes: Routes = [
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"profile/:id",
    component:ProfileComponent
  },
  {
    path:"parent-child",
    component:ParentChildInteractionComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path:"admin",
    component:AdminComponent,
    canActivate:[adminGuardGuard]
  },
  {
    path:"product/:id",
    component:ProductDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
