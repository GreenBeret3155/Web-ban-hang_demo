import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable } from "rxjs";
import { ProductService } from "./../../../service/product.service";
import { Product } from "./../../../model/product.model";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrls: ['./product-list-admin.component.css']
})
export class ProductListAdminComponent implements OnInit {

	products: Observable<Product[]>;
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
  	this.reloadData();
  }
  public reloadData() {
    this.products = this.productService.getAllProduct();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  editProduct(id: number){
    this.router.navigate(['/admin/editproduct', id]);
  }

  detailProduct(id: number){
    this.router.navigate(['/admin/detailproduct', id]);
  }

}

