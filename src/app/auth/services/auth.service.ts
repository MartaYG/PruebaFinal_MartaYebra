import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginRequest } from '../models/interface/ILoginRequest';
import { ILoginResponse } from '../models/interface/ILoginResponse';
import { IRegisterRequest } from '../models/interface/IRegisterRequest';

const urlLogin: string = 'http://51.38.51.187:5050/api/v1/auth/log-in';
const urlRegister: string = 'http://51.38.51.187:5050/api/v1/auth/sign-up';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpService: HttpClient) { }

  login(loginData: ILoginRequest): Observable<ILoginResponse> {
    return this.httpService.post<ILoginResponse>(urlLogin,loginData);
  }

  register(registerData: IRegisterRequest):Observable<{}>{
    return this.httpService.post<{}>(urlRegister,registerData);
  }
}
