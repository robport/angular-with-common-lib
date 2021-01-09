import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "lib-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {

  @Input() company;

  constructor() {
  }

  ngOnInit(): void {
  }

}
