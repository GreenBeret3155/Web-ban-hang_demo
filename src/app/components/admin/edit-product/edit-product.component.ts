import { Component, OnInit } from '@angular/core';
import { ProductService } from "./../../../service/product.service";
import { Product } from "./../../../model/product.model";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

	  id: number;
  product: Product;

  constructor(private route: ActivatedRoute,
  	private router: Router,
    private productService:  ProductService) { }

  ngOnInit() {
  	this.product = new  Product();

    this.id = this.route.snapshot.params['id'];
    
    this.productService.getOneProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }
  editProduct() {
    this.productService.editProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    this.gotoList();
  }

  onSubmit() {
    this.editProduct();    
  }

  gotoList() {
    this.router.navigate(['/admin/productslist']);
  }
  

}
