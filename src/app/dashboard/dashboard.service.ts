import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DashboardService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  user: string = JSON.parse(localStorage.getItem('user'));
  BASE_URL: string = environment.BASE_URL;

  fetchUser() {
    return this.http.get(`${this.BASE_URL}me`);
  }

  updateUser(payload) {
    return this.http.post(`${this.BASE_URL}me`, payload);
  }

  createProduct(product) {
    const formData = new FormData();
    formData.append('title', product.title);
    formData.append('description', product.description);
    formData.append('file', product.image);
    formData.append('price', product.price);



    return this.http.post(`${this.BASE_URL}products`, formData);
  }
}
