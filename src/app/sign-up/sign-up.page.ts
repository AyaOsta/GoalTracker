import { Component, OnInit } from '@angular/core';
// import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public firstname: string;
  public lastname: string;
  public age: any;
  public city: string;
  public country: string;
  public username: any;
  public password: any;
  public email: any;


  constructor(public http: HttpClient) {
  };

  userData = {
    firstname: "john",
    lastname: "Doe",
    age: "19",
    country: "Lebanon",
    city: "Beirut",
    email: "john@lau.edu",
    username: "johndoe",
    password: "12345"
  };

  fetchdata() {
    this.http.get('http://localhost:8888/GoalTrackerPHP/SignUp.php').subscribe((response) => {
      console.log(response);
    });
  }


  putdata() {
    this.http
      .post('http://localhost:8888/GoalTrackerPHP/SignUp.php', this.userData, { responseType: 'text' })
      .subscribe((response) => {
        console.log(response);
      });
  }

  ngOnInit() {
    console.log(this.userData);
  }

}
