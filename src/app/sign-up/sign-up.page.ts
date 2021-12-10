import { Component, OnInit } from '@angular/core';
// import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})


export class SignUpPage implements OnInit {

  fname: any;
  lname: any;
  age: any;
  country: any;
  city: any;
  email: any;
  username: any;
  password: any;

  userData = {};

  constructor(public http: HttpClient) {
  };


  submitForm(): void {
    // Process checkout data here
    let userData = {
      firstname: this.fname,
      lastname: this.lname,
      age: this.age,
      country: this.country,
      city: this.city,
      email: this.email,
      username: this.username,
      password: this.password
    };

    console.warn('Your order has been submitted', userData);

  }




  putdata() {

    let userData = {
      firstname: this.fname,
      lastname: this.lname,
      age: this.age,
      country: this.country,
      city: this.city,
      email: this.email,
      username: this.username,
      password: this.password
    };
    this.http
      .post('http://localhost:8888/GoalTrackerPHP/SignUp.php', userData, { responseType: 'text' })
      .subscribe((response) => {
        console.log(response);
      });

  }

  ngOnInit() {
    let userData = {
      firstname: this.fname,
      lastname: this.lname,
      age: this.age,
      country: this.country,
      city: this.city,
      email: this.email,
      username: this.username,
      password: this.password
    };
    console.log(userData);
  }

}
