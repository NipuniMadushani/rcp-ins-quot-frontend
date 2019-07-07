import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Formsdto } from './../dto/formsdto';
import { NumberParamsDto } from '../dto/NumberParamsDto';

export const MAIN_URL = 'http://localhost:8095';



@Injectable()
export class NumberParamService {

  constructor(private http: HttpClient) { }

  formdto: Formsdto[] = new Array();
  saveNumberParam(number: NumberParamsDto): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/NumbersParams/add', number);
  }

  deleteNumberParam(id: string): Observable<boolean> {
    return this.http.delete<boolean>('http://localhost:8080/NumbersParams/delete/' + id);
  }

  updateNumberParam(number: NumberParamsDto): Observable<NumberParamsDto> {
    return this.http.put<NumberParamsDto>('http://localhost:8080/NumbersParams/update', number);
  }


  //   searchNumberParam(id:string):Observable<boolean>{
  //     return this.http.get<boolean>(MAIN_URL + URL + '/' + id);

  //   }

  //   // getAllNumberParamData (): Observable<Array<any>> {
  //   //   return this.http.get<Array<any>>('http://localhost:8085/DynamicForm/findForm/Product');
  //   // }
  getAll(): Observable<Array<NumberParamsDto>> {
    return this.http.get<Array<NumberParamsDto>>('http://localhost:8080/NumbersParams/getAll');
  }
  getAllNumberParamData (): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:8087/numberParam/all');
  }
}
