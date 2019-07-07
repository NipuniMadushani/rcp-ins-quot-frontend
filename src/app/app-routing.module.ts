import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './service/auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: 'src/app/components/core/template-v1/template-v1.module#TemplateV1Module',
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: 'src/app/components/core/login/login.module#LoginModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
