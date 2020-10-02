import { Component, OnInit,  OnDestroy , Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from "./../../../service/product.service";
import { Product } from "./../../../model/product.model";
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from './../../../model/cart.model';
import { CartService } from './../../../service/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit, OnDestroy {
  @Input() item: Product;

  public subscription : Subscription;
  public cart : Cart;
  public products : Product[] = null ;

  constructor(private route: ActivatedRoute,
  	private router: Router,
    private productService:  ProductService,
    public cartService: CartService) { }

  ngOnInit() {
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

  onDetailProduct(id: number){
    this.router.navigate(['/listproduct/detail',id])
  }

  ngOnDestroy(){
  	if(this.subscription){
  		this.subscription.unsubscribe();
  	}
  }


}
