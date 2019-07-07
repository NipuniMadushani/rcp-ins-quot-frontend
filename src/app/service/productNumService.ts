import { ProductNumParamsDto } from './../dto/ProductNumParamsDto';
import { Observable } from 'rxjs/internal/Observable';
import { ProductStringParamDto } from './../dto/ProdStringParamsDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export const MAIN_URL = 'http://localhost:8087';

const URL = '/Product';

@Injectable()
export class ProductNumService {


    constructor (private http: HttpClient) {}

    searchProduct(code: string): Observable<Array<ProductNumParamsDto>> {
        return this.http.get<Array<ProductNumParamsDto>>(MAIN_URL + URL + '/find/' + code);
    }

}
