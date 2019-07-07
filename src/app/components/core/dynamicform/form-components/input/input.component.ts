import { Formsdto } from './../../../../../dto/formsdto';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-input',
  template: `
<mat-form-field style="width: 90%;" class="demo-full-width " [formGroup]="group">
<input matInput [formControlName]="field.componentName" [placeholder]="field.componentName" [type]="field.type" >
<ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
<mat-error *ngIf="group.get(field.componentName).hasError(validation.name)">{{validation.message}}</mat-error>
</ng-container>
</mat-form-field>
<br>
`,
  styles: []
})
export class InputComponent implements OnInit {

  field: Formsdto;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
