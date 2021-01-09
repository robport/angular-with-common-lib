import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "lib-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.css"]
})
export class CompanyComponent implements OnInit {

  @Input() company;

  constructor() {
  }

  ngOnInit(): void {
  }

}
