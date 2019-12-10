import { Component, OnInit } from "@angular/core";
import { AutoKana } from "vanilla-autokana";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  msg = "";
  autoKana = null;

  ngOnInit = () => {
    this.autoKana = AutoKana.bind("#txtNameIn", "#msg", { katakana: true });
  };

  onClick = (value: String) => {
    console.log("%s", value);
    this.msg = this.autoKana.getFurigana();
  };
}
