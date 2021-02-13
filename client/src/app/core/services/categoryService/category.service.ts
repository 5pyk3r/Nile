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

  findAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(URL);
  }
}
