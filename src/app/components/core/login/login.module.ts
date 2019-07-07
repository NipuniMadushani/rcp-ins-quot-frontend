import { darkTheme } from '../theme/theme-dark';
import { lightTheme } from '../theme/theme-light';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './view/login.component';
import { LoginRouterModule } from './login-router.module';
import { MatComponentModule } from 'src/app/mat-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../theme';

@NgModule({
  declarations: [LoginComponent],

  imports: [
    CommonModule,
    LoginRouterModule,
    MatComponentModule,
    FormsModule,
    ReactiveFormsModule,
    // ThemeModule.forRoot({
    //   themes: [lightTheme, darkTheme],
    //   active: 'light'
    // })
  ],
})
export class LoginModule { }
