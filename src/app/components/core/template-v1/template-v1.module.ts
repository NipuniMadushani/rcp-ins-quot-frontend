import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateV1Component } from './view/template-v1.component';
import { TemplateV1RouterModule } from './template-v1-router.module';
import { MatComponentModule } from 'src/app/mat-component.module';

@NgModule({
  declarations: [TemplateV1Component],
  imports: [
    CommonModule,
    TemplateV1RouterModule,
    MatComponentModule
  ]
})
export class TemplateV1Module { }
