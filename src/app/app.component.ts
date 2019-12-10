import { Component, OnInit, AfterViewInit } from "@angular/core";
// import { AutoKana } from "vanilla-autokana";
import * as AutoKana from "vanilla-autokana";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  title: String = "CodeSandbox";
  msg: String = "";
  autoKana: any;

  constructor() {
    console.log("%s", "constructor");
  }

  ngOnInit() {
    console.log("%s", "ngOnInit");
    this.autoKana = AutoKana.bind("#name", "", { katakana: true });
  }

  ngAfterViewIni() {
    console.log("%s", "ngAfterViewInit");
  }

  onClick(value: String) {
    console.log("%s", value);
    // this.autoKana = AutoKana.bind("#name", "msg", { katakana: true });
    console.log("%s", this.autoKana.getFurigana());
    this.msg = this.autoKana.getFurigana();
  }
}
