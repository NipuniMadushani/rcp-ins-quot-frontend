import { Formsdto } from './../../../../../dto/formsdto';
import { FormGroup } from '@angular/forms';
import { OnInit, Component } from '@angular/core';
@Component({
  selector: 'app-select',
  template: `
<mat-form-field class="demo-full-width margin-top" [formGroup]="group">
<mat-select [placeholder]="field.label" [formControlName]="field.name">
<mat-option *ngFor="let item of field.options" [value]="item">{{item}}</mat-option>
</mat-select>
</mat-form-field>
`,
  styles: []
})
export class SelectComponent implements OnInit {
  field: Formsdto;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
