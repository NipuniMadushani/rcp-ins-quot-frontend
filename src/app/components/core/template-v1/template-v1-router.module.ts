import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TemplateV1Component } from './view/template-v1.component';

const routes: Routes = [
  {
    path: '',
    component : TemplateV1Component,
    children : [
      {
        path : 'rider',
        loadChildren : 'src/app/components/pages/rider/rider.module#RiderModule'
      },
      {
        path : 'number',
        loadChildren : 'src/app/components/pages/number-param/number-param.module#NumberParamModule'
      },
      {
        path : 'string',
        loadChildren : 'src/app/components/pages/string-param/string-param.module#StringParamModule'
      },
      {
        path : 'product',
        loadChildren : 'src/app/components/pages/product/product.module#ProductModule'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateV1RouterModule { }
