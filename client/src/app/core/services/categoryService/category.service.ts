import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../model/category';

const URL = 'http://localhost:8080/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  postCategory(category: FormData): Observable<any>{
    return this.http.post(URL + '', category);
  }

  findAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(URL);
  }
  // findAllProductsByCategory(category): Observable<Product[]>{
  //   return this.http.get<Product[]>(URL + `/categories/${category}`);
  // }
  findCategoryByName(name): Observable<boolean> {
    return this.http.get<boolean>( URL + `?name=${name}`);
  }
  updateCategoryById(id, category: FormData): Observable<any>{
    return this.http.put(URL + `/${id}`, category);
  }
  deleteCategoryById(id): Observable<any>{
    return this.http.delete(URL + `/${id}`);
  }
}
