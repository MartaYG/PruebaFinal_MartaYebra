import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { IRegisterRequest } from '../../models/interface/IRegisterRequest';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {

  registerFormGroup!: FormGroup;

  serviceSubscription!: Subscription;

  constructor(private authService:AuthService, private formBuilder:FormBuilder, private router:Router) {
    this.registerFormGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
   }

  onSubmit(){
    if(this.registerFormGroup.valid){
      this.serviceSubscription = this.authService.register(this.registerFormGroup.value).subscribe(() =>{
        this.router.navigateByUrl('/auth/login')
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
