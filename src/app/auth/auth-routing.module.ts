import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { RegisterComponent } from "./components/register/register.component";
import { AuthGuard } from "./guards/auth.guard";

const routes:Routes=[

  {path:'login',component:LoginComponent},
  {path:'logout', canActivate: [AuthGuard],component:LogoutComponent},
  {path:'register',component:RegisterComponent}
]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],

  exports:[
    RouterModule
  ]
})

export class AuthRoutingModule{}
