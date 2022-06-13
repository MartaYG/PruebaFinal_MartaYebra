import { NgModule } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations:[
    FooterComponent,
    HeaderComponent
  ],
  exports:[
    FooterComponent,
    HeaderComponent
  ]
})

export class SkeletonModule{};
