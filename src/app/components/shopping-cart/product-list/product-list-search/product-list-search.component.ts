import { Component, OnInit } from '@angular/core';
import { ProductService } from "./../../../../service/product.service";
import { Product } from "./../../../../model/product.model";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-product-list-search',
  templateUrl: './product-list-search.component.html',
  styleUrls: ['./product-list-search.component.css']
})
export class ProductListSearchComponent implements OnInit {

	 products: Observable<Product[]>;
	 ketqua: String;
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.ketqua = this.route.snapshot.params['ketqua'];
  	this.reloadData();

  }
  public reloadData() {
    this.products = this.productService.getByName(this.ketqua);
  }

}
