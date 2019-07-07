import { ProductNumService } from './../../../service/productNumService';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatComponentModule } from 'src/app/mat-component.module';
import { ProductComponent } from './view/product.component';
import { CustomModule } from '../../custom/custom.module';
import { ProductService } from 'src/app/service/product.service';
import { RiderService } from '../../../service/RiderService';
import { NumberParamService } from '../../../service/NumberParamService';
import { StringParamService } from '../../../service/StringParamService';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DynamicformService } from '../../../service/dynamicform/dynamicform.service';
import { ProductStringService } from '../../../service/productStringservice';




@NgModule({
    declarations: [ProductComponent],
    imports: [
      CommonModule,
      ProductRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      CustomModule,
      FlexLayoutModule,
      MatComponentModule
    ],

    providers : [DynamicformService,
      ProductService, RiderService, NumberParamService, StringParamService, ProductNumService, 
      ProductStringService]
  })

  export class ProductModule {}