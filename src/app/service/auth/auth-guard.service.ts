import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private loginService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.loginService.isLoggedIn) { return true; }

    this.router.navigate(['/login']);
  }
}
