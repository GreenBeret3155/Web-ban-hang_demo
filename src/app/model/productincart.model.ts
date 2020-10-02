import { ProductService } from './../service/product.service';
import { Product } from './product.model';
import { Cart } from './cart.model';


export class Productincart{
	public id: number;
	public pay_id: number;
	public soluong : number;
	public product: Product;
	public tong: number;
}