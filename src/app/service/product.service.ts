import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

	private URL1 : string = 'http://localhost:8081/product';
  private URL2 : string = 'http://localhost:8081/productSearch';
  constructor( private http : HttpClient ) { }

  getAllProduct():Observable<any> {
  	return this.http.get(`${this.URL1}`) ;
  }

  getOneProduct(id: number){
    return this.http.get<any>(`${this.URL1}/${id}`);
  }

  getByName(tensp: String):Observable<any>{
    return this.http.get<Product[]>(`${this.URL2}/${tensp}`);
  }

  editProduct(product: Product){
    return this.http.put(`${this.URL1}/${product.id}`, product);
  }

  createProduct(product: Product): Observable<any>{
    return this.http.post(`${this.URL1}`, product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete(`${this.URL1}/${id}`);
  } 

}