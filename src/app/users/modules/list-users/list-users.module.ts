import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SkeletonModule } from "src/app/skeleton/skeleton.module";
import { ListUsersRoutingModule } from "./list-users-routing.module";
import { ListUsersComponent } from "./list-users.component";

@NgModule({

  declarations:[
    ListUsersComponent,
  ],
  imports:[
    ListUsersRoutingModule,
    SkeletonModule,
    CommonModule,
  ]
})

export class ListUserModule{}
