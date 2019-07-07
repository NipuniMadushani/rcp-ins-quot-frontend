import { Formsdto } from './../dto/formsdto';
import { Occupationdto } from './../dto/Occupation';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export const MAIN_URL = 'http://localhost:8085';

const URL = '/api/v1/Occupation';

@Injectable()
export class OccupationService {
  constructor(private http: HttpClient) { }

  saveOccupation(occupation: Occupationdto): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, occupation);

  }

  updateOccupation (occupation: Occupationdto): Observable<boolean> {
    return this.http.put<boolean>(MAIN_URL + URL,occupation );
  }

  deleteOccupation (id: number): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + '/' + id);
  }

  searchOccupation(id: number): Observable<Occupationdto> {
    return this.http.get<Occupationdto>(MAIN_URL + URL + '/' + id);
  }

  getAllOccupation (): Observable<Array<Occupationdto>> {
    return this.http.get<Array<Occupationdto>>(MAIN_URL + URL + '/');
  }

  getAllFormData (): Observable<Array<Formsdto>> {
    return this.http.get<Array<Formsdto>>(MAIN_URL + '/DynamicForm/findForm/Rider');
  }

}
