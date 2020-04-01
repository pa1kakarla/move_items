import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  items = [["Mocha", 3], ["Chai", 5], ["Latte", 2]];
  inProgress = [];
  finished = [];

  ngOnInit() {}

  onMenu(item) {
    this.inProgress.push(item);
    console.log(this.inProgress);
    var items = this.inProgress[0][0];
    var time = this.inProgress[0][1];
    console.log(time);
    setTimeout(() => {
      this.inProgress.splice(items, 1);
      this.finished.push(items);
    }, time * 1000);
  }
}
