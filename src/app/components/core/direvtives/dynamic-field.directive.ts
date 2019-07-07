import { Formsdto } from './../../../dto/formsdto';
import { TableComponent } from './../dynamicform/form-components/table/table.component';
import { CheckboxComponent } from './../dynamicform/form-components/checkbox/checkbox.component';
import { RadiobuttonComponent } from './../dynamicform/form-components/radiobutton/radiobutton.component';
import { DateComponent } from './../dynamicform/form-components/date/date.component';
import { SelectComponent } from './../dynamicform/form-components/select/select.component';
import { ButtonComponent } from './../dynamicform/form-components/button/button.component';
import { InputComponent } from './../dynamicform/form-components/input/input.component';
import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';



const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent,
  table: TableComponent
};
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input()
  field: Formsdto;
  @Input()
  group: FormGroup;

  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
