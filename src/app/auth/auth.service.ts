import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL: string = environment.BASE_URL;
  userId: string = null;

  constructor(private http: HttpClient) { }
  // id ?: string;
  // username: string;
  // email: string;
  // avatar: string;
  // readonly password: string;
  // seller: boolean;
  // address: Address;
  // created: Date;

  sendEmailToRecoverPassword(payload) {
    debugger;
    return this.http.post(`${this.BASE_URL}auth/resetpassword`, payload);
  }

  changePassword(formVal, token) {
    const payload = {
      password: formVal.password,
      token
    }
    return this.http.post(`${this.BASE_URL}auth/changepassword`, payload);
  }

  signup(payload) {
    let new_user = new FormData();
    new_user.append('username', payload.username);
    new_user.append('email', payload.email);
    new_user.append('file', payload.avatar);
    new_user.append('seller', payload.seller);
    new_user.append('password', payload.password);

    return this.http.post(`${this.BASE_URL}auth/register`, new_user);
  }

  signin(payload) {
    return this.http.post(`${this.BASE_URL}auth/login`, payload);
  }
}
