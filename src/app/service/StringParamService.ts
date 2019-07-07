import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StringParamDto } from '../dto/StringParamDto';

// export const MAIN_URL = 'http://localhost:8095';

// const URL = '/StringParam';

@Injectable()
export class StringParamService {

  constructor (private http: HttpClient) {}
  // getAllStringrParamData (): Observable<Array<StringParamDto>> {
  //   return this.http.get<Array<StringParamDto>>('http://localhost:8081/StringParams/all');
  // }

  saveStringParam(stringparam : StringParamDto):Observable <boolean>{
    return this.http.post<boolean>('http://localhost:8081/StringParams/add',stringparam);
  }

  updateStringParam(stringparam : StringParamDto): Observable<boolean>{
    return this.http.put<boolean>('http://localhost:8081/StringParams/update',stringparam);
  }

  deleteStringParam(Id : string ): Observable<boolean>{
    return this.http.delete<boolean>('http://localhost:8081/StringParams/delete/'+Id);
  }

  getAllStringrParamData (): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:8087/stringParam/all');
  }

}