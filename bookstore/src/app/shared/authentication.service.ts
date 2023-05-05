import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Token {
  exp: number; 
  user: {
    id: string;
  }
} 


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private api = 'http://bookstore23.putz.kwmhgb.at/api/auth';

  constructor (private http: HttpClient) { }


  login (email: string, password: string) {
    return this.http.post(`${this.api}/login`, {
      email: email, 
      password: password
    });
  }

}
