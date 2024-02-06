import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { JwtAuth } from '../models/jwtAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  registerUrl = "AuthManagement/Register"
  loginUrl = "AuthManagement/Login"

  constructor(private http: HttpClient) { }

  public register(user: Register): Observable<JwtAuth> {
    return this.http.post<JwtAuth>('${enviroment.apiUrl}/${this.registerUrl}', user);
  }

  public login(user: Login): Observable<JwtAuth> {
    return this.http.post<JwtAuth>('${enviroment.apiUrl}/${this.login}', user);
  }

}
