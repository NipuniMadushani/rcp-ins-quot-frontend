import { DynamicFieldDirective } from './../core/direvtives/dynamic-field.directive';
import { TableComponent } from './../core/dynamicform/form-components/table/table.component';
import { CheckboxComponent } from './../core/dynamicform/form-components/checkbox/checkbox.component';
import { RadiobuttonComponent } from './../core/dynamicform/form-components/radiobutton/radiobutton.component';
import { DateComponent } from './../core/dynamicform/form-components/date/date.component';
import { SelectComponent } from './../core/dynamicform/form-components/select/select.component';
import { InputComponent } from './../core/dynamicform/form-components/input/input.component';
import { ButtonComponent } from './../core/dynamicform/form-components/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from '../core/dynamicform/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatComponentModule } from 'src/app/mat-component.module';


@NgModule({
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MatComponentModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [
    DynamicFieldDirective,
    DynamicFormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    ReactiveFormsModule,
    FormsModule,
    MatComponentModule,
    TableComponent
  ],

  providers: [
  ]
})
export class CustomModule { }
