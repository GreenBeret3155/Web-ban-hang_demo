import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//components
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductListAdminComponent } from './components/admin/product-list-admin/product-list-admin.component';
import { CreateProductComponent } from './components/admin/create-product/create-product.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { ProductDetailComponent } from './components/admin/product-detail/product-detail.component';
import { ProductListIphoneComponent } from './components/shopping-cart/product-list/product-list-iphone/product-list-iphone.component';
import { ProductListIpadComponent } from './components/shopping-cart/product-list/product-list-ipad/product-list-ipad.component';
import { ProductListMacbookComponent } from './components/shopping-cart/product-list/product-list-macbook/product-list-macbook.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductListIwatchComponent } from './components/shopping-cart/product-list/product-list-iwatch/product-list-iwatch.component';
import { ProductListSearchComponent } from './components/shopping-cart/product-list/product-list-search/product-list-search.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { PayComponent } from './components/cart/pay/pay.component';
import { ProductCartDetailComponent } from './components/shopping-cart/product-cart-detail/product-cart-detail.component';


const routes: Routes = [
{
  path: '',
  redirectTo: '/listproduct/iphone',
  pathMatch: 'full'
},
{
	path: 'login',
    component: LoginComponent
		
},
{
	path: 'signup',
    component: SignupComponent
		
},
{
	path: 'about',
	component: AboutComponent
},
{
	path: 'contact',
	component: ContactComponent
},
{
	path: 'listproduct',
	component: ProductListComponent,
	children: [
	{
		path: '',
  		redirectTo: '/listproduct/iphone',
  		pathMatch: 'full'
	},
	{
		path: 'iphone',
	    component:  ProductListIphoneComponent,
	},
	{
		path: 'ipad',
	    component:  ProductListIpadComponent,
	},
	{
		path: 'macbook',
	    component:  ProductListMacbookComponent,
	},
	{
		path: 'iwatch',
	    component:  ProductListIwatchComponent,
	},
	{
		path: 'search/:ketqua',
	    component:  ProductListSearchComponent,
	},
	{
		path:'detail/:id',
		component: ProductCartDetailComponent,
	}

	]
},
{
  path: 'admin',
  component: AdminComponent,
  children: [
  	{
  		path: '',
  		redirectTo: '/admin/productslist',
  		pathMatch: 'full'
  	},
	{
		path: 'productslist',
	    component: ProductListAdminComponent
	},
	{
		path: 'createproduct',
	    component: CreateProductComponent
	},
	{
		path: 'home',
		component: AppComponent
	},
	{
		path: 'editproduct/:id',
	    component: EditProductComponent
	},
	{
		path: 'detailproduct/:id',
		component: ProductDetailComponent
	}
  ]
},
{
	path:'cart',
	component:CartComponent
},
{
	path:'cart/pay',
	component: PayComponent
}
// {
// 	path: '**',
// 	component: NotFoundComponent
// }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
