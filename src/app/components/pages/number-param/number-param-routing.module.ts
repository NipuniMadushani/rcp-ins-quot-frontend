import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NumberParamComponent } from './view/number-param.component';

const routes: Routes = [
  {
    path:'',
    component : NumberParamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class NumberParamRoutingModule { }
