import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';

const URL = 'http://localhost:8080/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  postProduct(product: FormData): Observable<any>{
    return this.http.post(URL + '', product);
  }
  findAllProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(URL);
    }
  findAllProductsByCategory(category): Observable<Product[]>{
    return this.http.get<Product[]>(URL + `/categories/${category}`);
  }
  findProductByName(name): Observable<boolean> {
    return this.http.get<boolean>( URL + `?name=${name}`);
  }
  findProductById(id): Observable<Product> {
    return this.http.get<Product>( URL + `?id=${id}`);
  }
  updateProductById(id, product: FormData): Observable<any>{
    return this.http.put(URL + `/${id}`, product);
  }
  deleteProductById(id): Observable<any>{
    return this.http.delete(URL + `/${id}`);
  }
}
