import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';

const URL = 'http://localhost:8080/menu';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  postProduct(product: FormData): Observable<any>{
    return this.http.post(URL + '/newProduct', product);
  }
  findAllProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(URL);
    }
  findProductByName(name): Observable<boolean> {
    return this.http.get<boolean>( URL + `?name=${name}`);
  }
  updateProductById(id, product: FormData): Observable<any>{
    return this.http.put(URL + `/update/${id}`, product);
  }
  deleteProductById(id): Observable<any>{
    return this.http.delete(URL + `/${id}`);
  }
}
