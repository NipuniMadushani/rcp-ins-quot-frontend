import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiderRoutingModule } from './rider-routing.module';
import { RiderComponent } from './view/rider.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatComponentModule } from 'src/app/mat-component.module';
import { RiderService } from 'src/app/service/RiderService';
import { CustomModule } from '../../custom/custom.module';
import { ProductService } from 'src/app/service/product.service';


@NgModule({
  declarations: [RiderComponent
  ],
  imports: [
    CommonModule,
    RiderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatComponentModule,
    FlexLayoutModule,
    CustomModule
  ],

  providers : [ RiderService, ProductService]
})

export class RiderModule { }
