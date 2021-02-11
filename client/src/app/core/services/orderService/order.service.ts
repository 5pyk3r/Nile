import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../../model/order';
import {Observable} from 'rxjs';

const URL = 'http://localhost:8080/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  placeOrder(data: FormData){
    let order;
    order = data;

    this.http.post(URL, order).subscribe(result => console.log(result));
  }
  updateOrder(id, order: Order){
    this.http.put(URL + `/update/${id}`, order, {headers: this.headers}).subscribe(result => console.log(result));
  }
  findOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(URL);
  }
  findOrdersByUserId(id): Observable<Order[]>{
    return this.http.get<Order[]>(URL + `/${id}`);
  }

}
