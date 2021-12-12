import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: any;
  password: any;

  constructor(private route: Router, public http: HttpClient) { }

  public nextpage() {
    this.route.navigate(['/sign-up'])
  }


  public profilepage() {
    let data = {
      username: this.username,
      password: this.password,
    }

    this.http
      .post('http://localhost:8888/GoalTrackerPHP/login.php', data, { responseType: 'text' })
      .subscribe((response) => {
        console.log(response);
        if (JSON.parse(response) == "found") {
          this.route.navigate(['/profile'])
        }
        else {
          alert("Username or password not found ")
        }
      });

    localStorage.setItem('username', this.username);
    console.log(localStorage.getItem('username'));
    // this.route.navigate(['/profile'])
  }
}
