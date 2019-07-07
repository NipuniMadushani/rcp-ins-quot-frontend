import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StringParamComponent } from './view/string-param.component';

const routes: Routes = [
  {
    path:'',
    component : StringParamComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StringParamRoutingModule { }
