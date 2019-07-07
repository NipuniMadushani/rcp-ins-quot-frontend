import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { DynamicformService } from 'src/app/service/dynamicform/dynamicform.service';
import { Formsdto } from '../../../../dto/formsdto';

@Component({
  exportAs: 'dynamicForm',
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  providers: [DynamicformService]
})
export class DynamicFormComponent implements OnInit {
  @Input() pageName: string;

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  fields: Formsdto[] = [];

  form: FormGroup;

  get value() {
    console.log('val' + this.form.value);
    return this.form.value;
  }

  constructor(private fb: FormBuilder, private dynamicFormService: DynamicformService) {
  }

  ngOnInit() {
    this.getFormComponent();
  }

  getFormComponent() {
    this.dynamicFormService.getFormComponent(this.pageName).then(result => {
      console.log(result);
      this.fields = result;
      console.log(this.fields);
      this.form = this.createControl();
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {

      this.submit.emit(this.form.value);
    } else {
      alert('not valid');
      this.validateAllFormFields(this.form);
    }
  }



  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      console.log(field);
      console.log(field.validations);
      if (field.type === 'button') { return; }
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      console.log('hhhhh' + control.validator);
      group.addControl(field.componentName, control);
    });
    return group;
  }




  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {

        switch (valid.componentName) {
          case 'required':
            validList.push(Validators.required);
            break;

          case 'onlytext':
            validList.push(Validators.pattern('^[a-zA-Z ]*$'));
            break;

          case 'onlynumber':
            validList.push(Validators.pattern('^[0-9]*$'));
            break;

          default:
            break;

        }

      });

      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
