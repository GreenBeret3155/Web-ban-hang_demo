import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Cart } from './../model/cart.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

	public URL : string = 'http://localhost:8081/cart';

  constructor( public http : HttpClient ) {}

  getAllCarts(){
    return this.http.get(this.URL);
  }

  getAllCartsByBillId(id : number){
    return this.http.get(`${this.URL}/${id}`);
  }

  editCart(cart: Cart ){
    return this.http.put(`${this.URL}/${cart.id}`, cart);
  }

  addCart(cart: Cart){
    console.log("đã add");
    return this.http.post(this.URL, cart).toPromise();
  }

  deleteCart(id: number){
    return this.http.delete(`${this.URL}/${id}`);
  }
}