import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';


import { Pay } from './../model/pay.model';
@Injectable({
  providedIn: 'root'
})
export class PayService {

	public URL : string = 'http://localhost:8081/pay';
  constructor(
    public http : HttpClient
    ) { }

  getAllPay(){
  	return this.http.get(this.URL);
  }

  getOnePay(id: number){
    return this.http.get(`${this.URL}/${id}`);
  }

  editPay(pay: Pay ){
    return this.http.put(`${this.URL}/${pay.id}`, pay);
  }

  createPay(pay: Pay ){
    return this.http.post(this.URL, pay);
  }

  deletePay(id: number){
    return this.http.delete(`${this.URL}/${id}`);
  }
}