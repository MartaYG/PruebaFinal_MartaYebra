import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, take } from 'rxjs';
import { IUser } from '../../models/interfaces/IUser';
import { IUserResponse } from '../../models/interfaces/IUserResponse';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  providers: [UserService]
})
export class ListUsersComponent implements OnInit,OnDestroy{

  users!: IUser[];
  subscription!:Subscription;

  constructor(private _userService:UserService) {
  }

  ngOnInit(): void {

    this.refreshTable();
  }

  refreshTable(){
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription=this._userService.getUsers().subscribe((response: IUserResponse) => {
      this.users = response.items;
    });
  }

  onDelete(userId: string) {

    this._userService.deleteUser(userId).subscribe(() => {
        this.refreshTable();
    },
    (err: HttpErrorResponse) => {
      window.alert(err.error.message);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
