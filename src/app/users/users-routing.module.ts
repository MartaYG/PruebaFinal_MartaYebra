import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes:Routes=[

  {path:'list', loadChildren:() => import ('./modules/list-users/list-users.module').then((module)=>module.ListUserModule)},
  {path: 'form', loadChildren: () => import('./modules/form-user/form-user.module').then((module) => module.FormUserModule) },

]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],

  exports:[
    RouterModule
  ]
})

export class UsersRoutingModule{}
