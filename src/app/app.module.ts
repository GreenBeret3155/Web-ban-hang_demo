import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//service
import { ProductService } from './service/product.service';

//component
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductListAdminComponent } from './components/admin/product-list-admin/product-list-admin.component';
import { CreateProductComponent } from './components/admin/create-product/create-product.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductDetailComponent } from './components/admin/product-detail/product-detail.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping-cart/product-item/product-item.component';
import { ProductListIphoneComponent } from './components/shopping-cart/product-list/product-list-iphone/product-list-iphone.component';
import { ProductListIpadComponent } from './components/shopping-cart/product-list/product-list-ipad/product-list-ipad.component';
import { ProductListMacbookComponent } from './components/shopping-cart/product-list/product-list-macbook/product-list-macbook.component';
import { ProductListIwatchComponent } from './components/shopping-cart/product-list/product-list-iwatch/product-list-iwatch.component';
import { ProductListSearchComponent } from './components/shopping-cart/product-list/product-list-search/product-list-search.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { PayComponent } from './components/cart/pay/pay.component';
import { ProductCartDetailComponent } from './components/shopping-cart/product-cart-detail/product-cart-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ProductItemComponent,
    AdminComponent,
    ContactComponent,
    ProductListAdminComponent,
    CreateProductComponent,
    EditProductComponent,
    LoginComponent,
    SignupComponent,
    ProductDetailComponent,
    ProductListIphoneComponent,
    ProductListIpadComponent,
    ProductListMacbookComponent,
    ProductListIwatchComponent,
    ProductListSearchComponent,
    AboutComponent,
    CartComponent,
    PayComponent,
    ProductCartDetailComponent
  ],
  imports: [
  FormsModule,
  HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
