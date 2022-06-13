import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { ILoginResponse } from '../../models/interface/ILoginResponse';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  loginFormGroup!: FormGroup;

  serviceSubscription!: Subscription;

  constructor(private authService:AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.loginFormGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  onSubmit() {
    if(this.loginFormGroup.valid) {
      this.serviceSubscription = this.authService.login(this.loginFormGroup.value).subscribe((response: ILoginResponse) => {
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('tokenType', response.tokenType);
          this.router.navigateByUrl('/users/list');
        },
        (err: HttpErrorResponse) => {
          window.alert(err.error.message);
        });
    } else {
      window.alert('Form is not valid');
    }
  }

  ngOnDestroy(): void {
    this.serviceSubscription.unsubscribe();
  }

}
