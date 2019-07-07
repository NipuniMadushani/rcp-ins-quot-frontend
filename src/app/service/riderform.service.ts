import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Riderdto } from '../dto/Rider';
import { HttpClient } from '@angular/common/http';
import { Formsdto } from '../dto/formsdto';

export  const MAIN_URL = 'http://localhost:8080';

const URL = '/Rider';
@Injectable()
export class RiderService {

  constructor (private http: HttpClient) {}

  saveRider(rider: Riderdto): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, rider);

  }

  updateRider (rider: Riderdto): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, rider);
  }

  deleteRider (id: number): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + '/' + id);
  }

  searchRider(code: number): Observable<Riderdto> {
    return this.http.get<Riderdto>(MAIN_URL + URL + '/' + code);

}

searchRider2(name: string): Observable<Riderdto> {
    return this.http.get<Riderdto>(MAIN_URL + URL + '/' + name);

}

// tslint:disable-next-line:one-line
searchRider3(s_name: string): Observable<Riderdto>{
    return this.http.get<Riderdto>(MAIN_URL + URL + '/' + s_name);
}

  getAllFormData (): Observable<Array<any>> {
    return this.http.get<Array<any>>(MAIN_URL + 'http://localhost:8085/DynamicForm/findForm/Rider');
  }
  getAllRider (): Observable<Array<Riderdto>> {
    return this.http.get<Array<Riderdto>>(MAIN_URL + URL + '/all');
  }

}

