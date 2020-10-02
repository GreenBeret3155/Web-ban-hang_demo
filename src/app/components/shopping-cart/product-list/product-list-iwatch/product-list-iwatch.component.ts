import { Component, OnInit } from '@angular/core';
import { ProductService } from "./../../../../service/product.service";
import { Product } from "./../../../../model/product.model";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-product-list-iwatch',
  templateUrl: './product-list-iwatch.component.html',
  styleUrls: ['./product-list-iwatch.component.css']
})
export class ProductListIwatchComponent implements OnInit {

	 products: Observable<Product[]>;
  loaiiwatch: String ="iwatch";

  constructor(private productService: ProductService,
    private router: Router) { }

    ngOnInit() {
  	this.reloadData();
  }
  public reloadData() {
    this.products = this.productService.getAllProduct();
  }


}
