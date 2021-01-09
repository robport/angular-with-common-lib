import { Injectable } from "@angular/core";
import { Company } from "./base.types";

@Injectable({
  providedIn: "root"
})
export class CommonService {

  constructor() {
  }

  getCompanies(): Company[] {
    return [{
      name: "First Co"
    }, {
      name: "Second Co"
    }];

  }
}
