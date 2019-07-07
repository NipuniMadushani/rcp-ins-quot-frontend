import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Riderdto } from '../dto/Rider';
import { HttpClient } from '@angular/common/http';
import { Formsdto } from '../dto/formsdto';
import { CommonRiderdto } from '../dto/CommonRiderDto';
import { RiderProductDto } from '../dto/RiderProductDto';
import { Productdto } from '../dto/Product';

export  const MAIN_URL = 'http://localhost:8100';
import { RiderdtoP } from '../dto/RiderP';

const URL = '/Rider';
@Injectable()
export class RiderService {

  constructor (private http: HttpClient) {}


  saveRider(rider: CommonRiderdto): Observable<boolean> {
    console.log('save Rider');
    console.log(rider);
    return this.http.post<boolean>('http://localhost:8100/Rider/add/01', rider);
  }

  updateRider (rider: CommonRiderdto ): Observable<boolean> {
    console.log(rider);
    return this.http.put<boolean>(MAIN_URL + URL + '/update/01', rider);
  }

  deleteRider (id: number): Observable<boolean> {
    console.log('Data deleted');
    return this.http.delete<boolean>('http://localhost:8095/Rider/delete' + '/' + id);

  }
  searchRider(code: number): Observable<Riderdto> {
    return this.http.get<Riderdto>(MAIN_URL + URL + '/' + code);

}

searchRider2(name: string): Observable<Riderdto> {
    return this.http.get<Riderdto>(MAIN_URL + URL + '/' + name);

}

searchRider3(s_name: string): Observable<Riderdto> {
    return this.http.get<Riderdto>(MAIN_URL + URL + '/' + s_name);
}
searchRider4(id: string): Observable<RiderdtoP> {
  return this.http.get<RiderdtoP>('http://localhost:8095/Rider/findbyid/' + id);
}

  getAllFormData (): Observable<Array<any>> {
    return this.http.get<Array<any>>( 'http://localhost:8085/DynamicForm/findForm/Rider');
  }
  getAllRider (): Observable<Array<RiderdtoP>> {
    return this.http.get<Array<RiderdtoP>>(MAIN_URL + URL + '/all');
  }
  searchRiderProduct(id: string): Observable<Array<RiderProductDto>> {
    console.log('called');
    return this.http.get<Array<RiderProductDto>>('http://localhost:8100/Rider/searchRPD1/' + id);


}

searchProduct4(id: string): Observable<Productdto> {
  console.log('I am working now');
  return this.http.get<Productdto>('http://localhost:8095/product/findbyid' + '/' + id);
}




}

