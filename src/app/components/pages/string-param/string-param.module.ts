import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StringParamRoutingModule } from './string-param-routing.module';
import { StringParamComponent } from './view/string-param.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomModule } from '../../custom/custom.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatComponentModule } from '../../../mat-component.module';
import { DynamicformService } from '../../../service/dynamicform/dynamicform.service';
import { ProductService } from '../../../service/product.service';
import { RiderService } from '../../../service/RiderService';
import { NumberParamService } from '../../../service/NumberParamService';
import { StringParamService } from '../../../service/StringParamService';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [StringParamComponent],
  imports: [
    CommonModule,
    StringParamRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomModule,
    FlexLayoutModule,
    MatComponentModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [DynamicformService,
    ProductService,
     StringParamService]
})
export class StringParamModule { }
