import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './view/product.component';





const routes: Routes = [
    {
      path: '',
      component : ProductComponent
    }
  ];

  @NgModule({

    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],

    exports : [RouterModule]
  })

  export class ProductRoutingModule { }