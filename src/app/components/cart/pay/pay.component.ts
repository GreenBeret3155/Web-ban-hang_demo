import { Component, OnInit } from '@angular/core';
import { PayService } from './../../../service/pay.service';
import { Pay } from './../../../model/pay.model';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { CartService } from "./../../../service/cart.service";
import { Cart } from "./../../../model/cart.model";
import { ProductService } from "./../../../service/product.service";
import { Product } from "./../../../model/product.model";
import { Productincart } from "./../../../model/productincart.model";
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

 pay: Pay = new Pay();
 submitted = false;
 subscription : Subscription;
 carts: Cart[] = [];
 cart:Cart;
 product:Product;
 productincart: Productincart[] = [];
 tongTien: number = 0;

   constructor(private payService: PayService,
   	private cartService: CartService,
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


  save() {
  	if(this.carts.length == 0){
      alert("Giỏ hàng chưa có gì ");
      this.router.navigate(['/listproduct/iphone']);
    }
    else{
      if(this.pay == null){ 
        alert("Mời bạn nhập thông tin ");
      }
      else{
        this.pay.tongso = this.tongTien ;
        this.subscription = this.payService.createPay(this.pay).subscribe((data: Pay) =>{
          if(data && data.id){
            alert("Đã đặt hàng thành công");
            this.loaddata(data.id);
          }
        });
        this.router.navigate(['/listproduct/iphone']);
      }
    }
  }

  loaddata(id: number){
    console.log(this.carts);
    for (var i = 0; i < this.carts.length; ++i) {
      {
        this.carts[i].pay_id = id;
        this.productincart[i].pay_id = id;
        this.subscription = this.cartService.editCart(this.carts[i]).subscribe(data =>{
          console.log(data);
        });
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}