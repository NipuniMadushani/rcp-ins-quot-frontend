import { Formsdto } from './../../dto/formsdto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class DynamicformService {

  constructor(private http: HttpClient) { }

  async getFormComponent(pageName: string) {
    return this.http.get<Formsdto[]>('http://localhost:8085/DynamicForm/findForm/' + pageName).toPromise();
  }

}
