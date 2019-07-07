export class Formsdto {
 
          component?: string;
           componentName?: string;
           size?: string;
           type?: string;
           inputType?: string;
           nullable?: boolean;
           style?: string;
           css?: string;
           icon?: any[];
           functions?: string;
           orders?: string;
           value?: any;
           validations?: Validator[];
}
export class Validator {
  validatorId: string;
  name: string;
  validator: any;
  message: string;
}








