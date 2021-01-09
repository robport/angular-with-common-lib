import { Component } from "@angular/core";
import { CommonService, Company } from "common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "my-first-app";
  companies: Company[];

  constructor(private commonService: CommonService) {
    this.companies = this.commonService.getCompanies();
  }
}
