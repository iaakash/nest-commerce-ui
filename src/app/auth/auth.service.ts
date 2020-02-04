import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL: string = environment.BASE_URL;
  userId: string = null;

  constructor(private http: HttpClient) { }

  signup(payload) {
    return this.http.post(`${this.BASE_URL}auth/register`, payload);
  }

  signin(payload) {
    return this.http.post(`${this.BASE_URL}auth/login`, payload);
  }
}
