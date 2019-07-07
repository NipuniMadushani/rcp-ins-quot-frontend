import { LoginRequest } from '../../dto/login-request';
import { LoginResponse } from '../../dto/login-response';
import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { resource } from 'selenium-webdriver/http';

const MAIN_URL = 'http://localhost:8084';
const URL = '/rest/auth/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginReq: LoginRequest = new LoginRequest();
  constructor(private http: HttpClient, private router: Router) { }

  login(username: any, password: any): Observable<any> {
    this.loginReq.UserName = username;
    this.loginReq.UserPassword = password;

    // console.log(username);
    // console.log(password);

    // console.log(this.loginReq.UserName);
    // console.log(this.loginReq.UserPassword);

    const logObj = {
      'username': this.loginReq.UserName,
      'userpassword': this.loginReq.UserPassword
    };

    return this.http.post<any>(MAIN_URL + URL, logObj);
  }



  get isLoggedIn() {

    if (sessionStorage.getItem('token')) {
      return true;
    }

    return false;

  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
