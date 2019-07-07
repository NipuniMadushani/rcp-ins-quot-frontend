import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberParamRoutingModule } from './number-param-routing.module';
import { NumberParamComponent } from './view/number-param.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatComponentModule } from 'src/app/mat-component.module';
import { CustomModule } from '../../custom/custom.module';
import { NumberParamService } from '../../../service/NumberParamService';
import { DynamicformService } from '../../../service/dynamicform/dynamicform.service';
import { MatPaginatorModule } from '@angular/material';



@NgModule({
  declarations: [NumberParamComponent],
  imports: [
    CommonModule,
    NumberParamRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      CustomModule,
      FlexLayoutModule,
      MatComponentModule,
      MatPaginatorModule
  ],
  

  providers : [DynamicformService,
     NumberParamService,]
})
export class NumberParamModule { }
