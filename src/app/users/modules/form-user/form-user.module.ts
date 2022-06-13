import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SkeletonModule } from "src/app/skeleton/skeleton.module";
import { FormUserRoutingModule } from "./form-user-routing.module";
import { FormUserComponent } from "./form-user.component";

@NgModule({
  declarations: [
    FormUserComponent,
  ],
  imports: [
    FormUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SkeletonModule,
  ],
})
export class FormUserModule {}
