import { Component, OnInit, Injector } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { StepsComponentComponent } from 'src/app/components/steps-component/steps-component.component';

import { createCustomElement } from '@angular/elements';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { format } from "date-fns";


let tit = "";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})


export class GoalsPage implements OnInit {

  check: any;

  goaltitle: any;
  goaldescription: any;
  startdate: any;
  enddate: any;
  starttime: any;
  endtime: any;
  progress: any;

  gaolsteps = [];

  userData = {};


  constructor(public alertController: AlertController, private injector: Injector, public http: HttpClient, private route: Router) {
    // //The customElements is used for defining a custom element globaly.
    // const customElement = createCustomElement(StepsComponentComponent, { injector });
    // //   //Defining a new element
    // customElements.define('app-step', customElement);
  }

  ngOnInit() {
    this.progress = 0;
    console.log(this.userData);
  }

  steps = [{
    title: "",
  }]

  async addStep() {

    const alert = await this.alertController.create({
      header: 'Your next step',
      inputs: [{
        name: "stepinput",
        type: 'text',
        id: 'stepinput',
        placeholder: "write your step here",
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      },
      {
        text: 'Save',
        handler: (alertData) => {
          console.log(alertData.stepinput);
          this.steps[0].title = alertData.stepinput;

          tit = this.steps[0].title;
          let o = tit.replace(/\s/g, '_');
          // let o = tit.replace(" ", "_");

          console.log(o);
          this.gaolsteps.push(tit);

          const list = document.getElementById("steplist");
          const p = document.createElement('div');


          p.innerHTML = "<app-step title= " + o + "></app-step>";


          // console.log(p);
          list.appendChild(p);

        },
      }],
    });

    await alert.present();
  }


  public savegoal() {
    let userData = {
      goaltitle: this.goaltitle,
      goaldescription: this.goaldescription,
      startdate: format(new Date(this.starttime), "yyyy-MM-dd"),
      enddate: format(new Date(this.enddate), "yyyy-MM-dd"),
      starttime: format(new Date(this.starttime), "HH-mm"),
      endtime: format(new Date(this.endtime), "HH-mm"),
      gaolsteps: this.gaolsteps.join(),
      progress: this.progress,
    }

    console.log(userData);

    this.http
      .post('http://localhost:8888/GoalTrackerPHP/savegoal.php', userData, { responseType: 'text' })
      .subscribe((response) => {
        console.log(response);
        if (JSON.parse(response) == "stored") {
          this.route.navigate(['/dashboard'])
        }
        else {
          alert("Error in saving goal ");
        }
      });
  }

}
