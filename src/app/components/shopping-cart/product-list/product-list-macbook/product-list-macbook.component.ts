import { Component, OnInit } from '@angular/core';
import { ProductService } from "./../../../../service/product.service";
import { Product } from "./../../../../model/product.model";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-product-list-macbook',
  templateUrl: './product-list-macbook.component.html',
  styleUrls: ['./product-list-macbook.component.css']
})
export class ProductListMacbookComponent implements OnInit {

   products: Observable<Product[]>;
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
