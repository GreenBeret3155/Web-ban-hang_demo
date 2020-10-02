import { Component, OnInit } from '@angular/core';
import { ProductService } from "./../../../../service/product.service";
import { Product } from "./../../../../model/product.model";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";


@Component({
  selector: 'app-product-list-iphone',
  templateUrl: './product-list-iphone.component.html',
  styleUrls: ['./product-list-iphone.component.css']
})
export class ProductListIphoneComponent implements OnInit {

   products: Observable<Product[]>;
  loaiiphone: String ="iphone";
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
  	this.reloadData();
  }
  public reloadData() {
    this.products = this.productService.getAllProduct();
  }

}
