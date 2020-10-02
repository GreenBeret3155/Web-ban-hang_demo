import { Component, OnInit } from '@angular/core';
import { ProductService } from "./../../../../service/product.service";
import { Product } from "./../../../../model/product.model";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-product-list-ipad',
  templateUrl: './product-list-ipad.component.html',
  styleUrls: ['./product-list-ipad.component.css']
})
export class ProductListIpadComponent implements OnInit {

  products: Observable<Product[]>;
  loaiipad: String ="ipad";
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
  	this.reloadData();
  }
  public reloadData() {
    this.products = this.productService.getAllProduct();
  }

}
