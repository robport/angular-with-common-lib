import { NgModule } from "@angular/core";
import { CommonComponent } from "./common.component";
import { TestComponent } from "./test/test.component";


@NgModule({
  declarations: [CommonComponent, TestComponent],
  imports: [],
  exports: [CommonComponent, TestComponent]
})
export class CommonModule {
}
