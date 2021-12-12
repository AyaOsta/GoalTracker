import { Injectable, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  username: any;

  data = [];
  constructor(private route: Router, public http: HttpClient) {

  }

  public ngOnInit() {
    let p = localStorage.getItem('username');
    let l = "";
    var splitted;
    let data = {
      username: p,
    }

    this.http
      .post('http://localhost:8888/GoalTrackerPHP/getuserinfo.php', data, { responseType: 'text' })
      .subscribe((response) => {
        console.log(response);

        this.username = JSON.parse(response);

        l = JSON.parse(response);
        localStorage.setItem('firstname', l);
        console.log("l", l);
      });

    // splitted = l.split(" ");
    // console.log("first", splitted);
  }

  displayname() {
    console.log(localStorage.getItem('username'));
  }

}
