import { Injectable } from '@angular/core';

import { Productdto } from '../dto/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Formsdto } from '../dto/formsdto';

export const MAIN_URL = 'http://localhost:8100';


import { UpdateParams } from '../dto/updateParams';
import { ProductdtoA } from '../dto/ProductA';
import { CommonProductdtop } from '../dto/CommonProductDtop';
import { RiderProductDto } from '../dto/RiderProductDto';


const URL = '/Product';

@Injectable()
export class ProductService {

  formDtos: Formsdto[] = new Array();
  updateReq: UpdateParams = new UpdateParams();
  constructor (private http: HttpClient) {}

  saveProduct1(product: ProductdtoA): Observable<boolean> {
    console.log(product);
    return this.http.post<boolean>('http://localhost:8087/Product/add', product);
  }

  saveProduct(product: CommonProductdtop): Observable<boolean> {
    console.log('save Product');
    console.log(product);
    return this.http.post<boolean>('http://localhost:8087/Product/add/4', product);
  }

  updateProduct (product:  CommonProductdtop ): Observable<boolean> {
    console.log(product);
    return this.http.put<boolean>(MAIN_URL + URL + '/update/4', product );
  }

  deleteProduct (id: string): Observable<boolean> {
    return this.http.delete<boolean>(MAIN_URL + URL + '/delete/' + id + '/4');
  }

  searchProduct(code: string): Observable<Productdto> {
    return this.http.get<Productdto>(MAIN_URL + URL + '/' + code);

}

searchProduct2(name: string): Observable<Productdto> {
    return this.http.get<Productdto>(MAIN_URL + URL + '/' + name);

}

searchProduct3(s_name: string): Observable<Productdto>{
    return this.http.get<Productdto>(MAIN_URL + URL + '/' + s_name);
}

  getAllProduct (): Observable<Array<ProductdtoA>> {
    return this.http.get<Array<ProductdtoA>>(MAIN_URL + URL + '/all');
    }

  getAllFormData (): Observable<any> {
   return this.http.get<any>('http://localhost:8085/DynamicForm/findForm/Product');
       
   
    
  }
  searchRiderProduct(productId: string): Observable<Array<RiderProductDto>> {
    console.log('called');
    return this.http.get<Array<RiderProductDto>>( 'http://localhost:8087/Product/searchRPD/' + productId);

}
getAllProductforRider (): Observable<Array<ProductdtoA>> {
  return this.http.get<Array<ProductdtoA>>(MAIN_URL + URL + '/allR');
  }

}
