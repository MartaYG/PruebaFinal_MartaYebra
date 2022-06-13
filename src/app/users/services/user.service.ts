import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { IUser } from '../models/interfaces/IUser';
import { IUserResponse } from '../models/interfaces/IUserResponse';

const urlUsers: string = 'http://51.38.51.187:5050/api/v1/users';
const urlUser: string = 'http://51.38.51.187:5050/api/v1/users/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _users:IUser[];

  constructor(private httpService: HttpClient) {

    this._users=[];
  }

  getUsers():Observable<IUserResponse>{

    return this.httpService.get<IUserResponse>(urlUsers);
  }

  getUser(id: string):Observable<IUser>{
    return this.httpService.get<IUser>(urlUser + id);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.httpService.put<IUser>(urlUser + user.id, user);
  }

  deleteUser(id: string):Observable<{}>{

    return this.httpService.delete<IUser>(urlUser+id);
  }
}
