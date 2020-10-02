import { Component, OnInit } from '@angular/core';
import { ProductService } from "./../../../service/product.service";
import { Product } from "./../../../model/product.model";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: number;
  product: Product;

  constructor(private route: ActivatedRoute,
  	private router: Router,
    private productService:  ProductService) { }

  ngOnInit() {
  	this.product = new  Product();

    this.id = this.route.snapshot.params['id'];
    
    this.productService.getOneProduct(this.id)
      .subscribe(data=> {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/admin/productslist']);
  }

}
