import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  name: "joe";
  weather: string;
  date: string;

  constructor() { }

  ngOnInit() {
  }


}
