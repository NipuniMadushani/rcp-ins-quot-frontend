import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Themess } from '../../dto/themes';
import { SaveTheme } from '../../dto/save-theme';

export const MAIN_URL = 'http://localhost:8080';
const URL = '/est/auth/client/';


@Injectable({
  providedIn: 'root'
})
export class ThemeeService {

  constructor(private http: HttpClient, private router: Router) { }

  defuserthemes(tokenset: string): Observable<any> {
    console.log(tokenset);
    return this.http.get<any>(MAIN_URL + URL + tokenset);
  }

  changeuserthemes(color: string): Observable<any> {
    console.log(color);
    return this.http.get<any>('' + color);
  }

  saveusertheme(token, coltheme, fffamily, ffsize): Observable<any> {
    console.log(Themess);
    const login: SaveTheme = new SaveTheme(token, coltheme, fffamily, ffsize);
    return this.http.post<any>('', SaveTheme);
  }


}
