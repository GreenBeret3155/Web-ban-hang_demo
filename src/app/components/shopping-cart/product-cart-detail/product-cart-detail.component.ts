import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from "./../../../service/product.service";
import { Product } from "./../../../model/product.model";
import { Cart } from './../../../model/cart.model';
import { CartService } from './../../../service/cart.service';

@Component({
  selector: 'app-product-cart-detail',
  templateUrl: './product-cart-detail.component.html',
  styleUrls: ['./product-cart-detail.component.css']
})
export class ProductCartDetailComponent implements OnInit,OnDestroy {

  id: number;
  product: Product;
  public subscription : Subscription;
  public cart : Cart;
  public products : Product[] = null ;

  constructor(private route: ActivatedRoute,
  	private router: Router,
    private productService:  ProductService,
    public cartService: CartService) { }

  ngOnInit() {
  	this.product = new  Product();

    this.id = this.route.snapshot.params['id'];
    
    this.productService.getOneProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));

       this.cart = new Cart();


  }

  onAddCart(product : Product){
    this.cart.product_id = product.id;
    this.cart.soluong = 1;
    this.cart.tong = product.gia;
    this.cart.pay_id = 1;
    this.cartService.addCart(this.cart).then((data: Cart)=>{
      console.log(data);
    });
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
