import { TemplateV1Component } from './../../template-v1/view/template-v1.component';
import { TemplateV1Module } from './../../template-v1/template-v1.module';
import { LoginResponse } from '../../../../dto/login-response';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { AlertComponent } from '../../alert-router/alert/alert.component';
import { ThemeService } from '../../theme';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  alerttypee = '';
  fristparam = '';
  secontparam = '';



  loginResponse: LoginResponse = new LoginResponse();

  loginForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required
    ]),
    newPassword: new FormControl(),
    newPasswordConfirm: new FormControl(),
  });

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get newPassword() {
    return this.loginForm.get('newPassword');
  }

  get newPasswordConfirm() {
    return this.loginForm.get('newPasswordConfirm');
  }

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar,
    private dialog: MatDialog) {
    this.loginResponse.IsExpired = false;
    this.loginResponse.IsFail = false;
    this.loginResponse.IsInactive = false;
    this.loginResponse.IsLock = false;
    this.loginResponse.IsLogin = true;
  }

  ngOnInit() {
  }

  openDialog(alertype, fristvaluee, secondvalue) {
    this.dialog.open(AlertComponent, {
      data: { alertype: alertype, fristvalue: fristvaluee, secondvalue: secondvalue },
      panelClass: 'custom-dialog-container'
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }


  singin() {
    // sessionStorage.setItem('token', 'token');
    // this.router.navigate(['/home']);

    this.authService.login(this.userName.value, this.password.value).subscribe(response => {

      try {
        console.log(response);
        this.loginResponse.IsFail = response.fail;
        this.loginResponse.IsExpired = response.expired;
        this.loginResponse.IsInactive = response.inactive;
        this.loginResponse.IsLock = response.lock;
        this.loginResponse.IsLogin = response.login;
        this.loginResponse.JwtToken = response.jwt;

        if (this.loginResponse.IsLogin) {
          if (this.loginResponse.IsExpired === false && this.loginResponse.IsLock === false) {
            sessionStorage.setItem('token', this.loginResponse.JwtToken);
            this.router.navigate(['/home']);
          } else {
            if (this.loginResponse.IsExpired) {
              this.alerttypee = 'error';
              this.fristparam = 'Your Password is Expired';
              this.secontparam = '';
              this.openDialog(this.alerttypee, this.fristparam, this.secontparam);
            }
            if (this.loginResponse.IsLock) {
              this.alerttypee = 'error';
              this.fristparam = 'Your Password is Locked';
              this.secontparam = '';
              this.openDialog(this.alerttypee, this.fristparam, this.secontparam);
            }
          }
        } else {
          if (this.loginResponse.IsFail) {
            this.alerttypee = 'error';
            this.fristparam = 'Your User Name Or Password Is Incorrect';
            this.secontparam = '';
            this.openDialog(this.alerttypee, this.fristparam, this.secontparam);
          }
        }

      } catch (error) {
        console.log(error);
        this.alerttypee = 'error';
        this.openDialog(this.alerttypee, '', '');
      }
    }, error => {
      console.log(error);

     sessionStorage.setItem('token', 'token');
     this.router.navigate(['/home']);
      this.alerttypee = 'error';
      this.fristparam = 'Error Connection Refused';
      this.secontparam = '';
      this.openDialog(this.alerttypee, this.fristparam, this.secontparam);
    });
    if (this.loginResponse.IsLogin) {
      if (this.loginResponse.IsExpired === false) {
      } else {
        this.password.setValue('');
      }
    } else {
    }

  }
}

