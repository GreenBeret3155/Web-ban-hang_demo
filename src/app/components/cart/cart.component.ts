import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable } from "rxjs";
import { CartService } from "./../../service/cart.service";
import { Cart } from "./../../model/cart.model";
import { ProductService } from "./../../service/product.service";
import { Product } from "./../../model/product.model";
import { Productincart } from "./../../model/productincart.model";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {

  public subscription : Subscription;
  public carts: Cart[] = [];
  public cart:Cart;
  public product:Product;
  public productincart: Productincart[] = [];
  public tongTien: number = 0;

  constructor(private cartService: CartService,
  	private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
  	this.subscription =  this.cartService.getAllCartsByBillId(1).subscribe((data : Cart[]) => {
      this.carts = data;
      this.tongTien = this.setTongTien(data);
      this.setCartProduct(this.carts);
    });
  }
  setCartProduct(carts: Cart[]){ 
    if(carts != null){
    for (var i = 0; i < carts.length; ++i) {
      let item = new Productincart();
      item.id = carts[i].id;
      item.soluong = carts[i].soluong;
      item.tong = carts[i].tong;
      this.productService.getOneProduct(carts[i].product_id).subscribe((product: Product)=>{
            item.product = product;
          }) ;
      this.productincart.push(item);
      console.log(item);
    }
  }
	}

  setTongTien(carts: Cart[]){ 

    if(this.carts != null){
      for(var i = 0; i < carts.length; ++i)
      {
        this.tongTien += carts[i].tong;
      }
    }
    return this.tongTien;
  }

  updateData(id: number){
    for (var i = 0; i < this.carts.length; ++i) {
      if(this.carts[i].id == id)
      {
        this.carts.splice(i, 1);
        this.productincart.splice(i, 1);
        break;
      }
    }
  }

  onMinus(item: Productincart){ 
    if(item.soluong > 0){
      item.soluong -= 1;
      this.carts[item.id].soluong = item.soluong;
      this.subscription = this.cartService.editCart(this.cart[item.id]).subscribe();
      this.setTongTien(this.carts);
    }
  }

  onPlus(item: Productincart){
      item.soluong += 1;
      this.carts[item.id].soluong = item.soluong;
      this.subscription = this.cartService.editCart(this.cart[item.id]).subscribe();
      this.setTongTien(this.carts);
      console.log(item.soluong);
  }


  onDeleteCart(id: number){
    this.subscription = this.cartService.deleteCart(id).subscribe((data: Cart) => {
      this.updateData(id);
    })
  }



  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }


}



