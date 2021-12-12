import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-steps-component',
  templateUrl: './steps-component.component.html',
  styleUrls: ['./steps-component.component.scss'],
})


export class StepsComponentComponent implements OnInit {

  checkb: boolean;

  count: any;

  list = [];

  constructor() { }

  @Input()
  title: string

  ngOnInit() {

  }

  onchange() {
    let count = 0;
    const element = document.getElementById("checkbox");

    if (this.checkb === true) {
      this.list.push("checked");
      count = count + 1;
      // console.log("checkinside");
    }
    element.setAttribute("disabled", "true");
    // console.log("check");
    // const check1 = document.getElementById("checkbox");

  }

}
