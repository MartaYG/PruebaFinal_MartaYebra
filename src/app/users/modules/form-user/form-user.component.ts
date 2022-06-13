import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription, take } from "rxjs";
import { IUser } from "../../models/interfaces/IUser";
import { UserService } from "../../services/user.service";


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit, OnDestroy {

  formMode: string = '';
  userId!: string;

  userFormGroup!: FormGroup;
  serviceSubscription!: Subscription;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['id'];
    })
    if(document.location.href.includes('view')) {
      this.formMode = 'view';
    }
    if(document.location.href.includes('edit')) {
      this.formMode = 'edit';
    }
  }

  ngOnInit(): void {
    if(this.userId) {
      this.serviceSubscription = this.userService.getUser(this.userId).subscribe((user: IUser) => {
        this.initializeForm(user);
      })
    } else {
      window.alert('Id user is not valid');
    }
  }

  private initializeForm(user: IUser) {
    this.userFormGroup = this.formBuilder.group({
       id: new FormControl(user.id , [Validators.required]),
       name: new FormControl(user.name , [Validators.required]),
       surname: new FormControl(user.surname , [Validators.required]),
       email: new FormControl(user.email , [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if(this.userFormGroup.valid) {
      if(this.formMode === 'edit') {
        this.userService.updateUser(this.userFormGroup.value).subscribe(() => {
          window.alert('User updated succesfully');
          this.router.navigateByUrl('/users/list');
        });
      }
    }
  }

  ngOnDestroy(): void {
    this.serviceSubscription.unsubscribe();
  }

}
