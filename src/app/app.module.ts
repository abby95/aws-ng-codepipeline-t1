import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { HomeComponent } from './Pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiKeyInterceptor } from './HttpInterceptors/api-key.interceptor';
import { TokenInterceptor } from './HttpInterceptors/token.interceptor';
import { UsdToInrPipe } from './pipes/usd-to-inr.pipe';
import { ProductsComponent } from './Pages/products/products.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { ParentChildInteractionComponent } from './Pages/parent-child-interaction/parent-child-interaction.component';
import { ParentComponent } from './Pages/ParentChildInteraction/parent/parent.component';
import { ChildComponent } from './Pages/ParentChildInteraction/child/child.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { HighlightYellowDirective } from './Directives/highlight-yellow.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    UsdToInrPipe,
    ProductsComponent,
    ProductDetailsComponent,
    ParentChildInteractionComponent,
    ParentComponent,
    ChildComponent,
    AdminComponent,
    HighlightYellowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      useClass:ApiKeyInterceptor, provide:HTTP_INTERCEPTORS,multi:true
    },
    {
      useClass:TokenInterceptor, provide:HTTP_INTERCEPTORS,multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
