import { Component } from "@angular/core";
import { Company } from "common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "my-second-app";
  company: Company = {
    name: "Rob's Co",
    employees: 20
  };

}
