import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/guards/auth.guard";

const routes:Routes=[
  { path:'auth', loadChildren:() => import ('./auth/auth.module').then((module)=>module.AuthModule)},
  { path:'users', canActivate: [AuthGuard], loadChildren:() => import ('./users/users.module').then((module)=>module.UsersModule)},
  { path:"**", redirectTo: 'auth/login' }

]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule{}
