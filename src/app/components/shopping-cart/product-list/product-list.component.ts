import { Component, OnInit } from '@angular/core';
import { ProductService } from "./../../../service/product.service";
import { Product } from "./../../../model/product.model";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;
  loaiiphone: String ="iphone";
  loaiipad: String ="ipad";
  loaimacbook: String ="macbook";
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
  	this.reloadData();
  }
  public reloadData() {
    this.products = this.productService.getAllProduct();
  }

}
