import { NgModule } from "@angular/core";
import { ListUserModule } from "./modules/list-users/list-users.module";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({

  imports:[
    UsersRoutingModule
  ]
})

export class UsersModule{};
