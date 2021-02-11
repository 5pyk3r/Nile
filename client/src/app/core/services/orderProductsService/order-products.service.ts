import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {OrderProduct} from '../../model/orderProduct';


@Injectable({
  providedIn: 'root'
})
export class OrderProductsService {

  constructor(private http: HttpClient) { }

  findOrdersProducts(id): Observable<OrderProduct[]>{
    return this.http.get<OrderProduct[]>(`http://localhost:8080/orderProduct/${id}`);
  }
}
