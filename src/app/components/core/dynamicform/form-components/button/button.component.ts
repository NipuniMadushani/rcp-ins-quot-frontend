import { Formsdto } from './../../../../../dto/formsdto';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  template: `
<button [formGroup]="group" style="margin-right:20px;"   mat-flat-button type="field.type" (click)="field.functions" color="primary">{{field.componentName}}</button>

`,
  styles: [

  ]
})
export class ButtonComponent implements OnInit {
  field: Formsdto;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
