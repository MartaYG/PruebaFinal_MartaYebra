import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SkeletonModule } from "../skeleton/skeleton.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { RegisterComponent } from "./components/register/register.component";

@NgModule({
  declarations:[
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports:[
    AuthRoutingModule,
    SkeletonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ]
})

export class AuthModule{};
