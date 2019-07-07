import { Component } from '@angular/core';
import { DynamicFormComponent } from './components/core/dynamicform/dynamic-form/dynamic-form.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(DynamicFormComponent,{static: true}) form: DynamicFormComponent;
  
  submit(value: any) {}
  //title = 'erp-angular';
  constructor() {}
}
