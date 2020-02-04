import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProductsService {
  constructor(private http: HttpClient) { }

  BASE_URL: string = environment.BASE_URL;

  fetchAllProducts() {
    return this.http.get(`${this.BASE_URL}products`);
  }


}
