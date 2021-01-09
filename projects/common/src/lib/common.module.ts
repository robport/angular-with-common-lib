import { NgModule } from "@angular/core";
import { CommonComponent } from "./common.component";
import { CompanyComponent } from "./test/company.component";


@NgModule({
  declarations: [CommonComponent, CompanyComponent],
  imports: [],
  exports: [CommonComponent, CompanyComponent]
})
export class CommonModule {
}
