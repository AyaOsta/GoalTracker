import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {

    // constructor(private injector: Injector) {
    //   //The customElements is used for defining a custom element globaly.
    //   const customElement = createCustomElement(StepsComponentComponent, { injector });
    //   //Defining a new element
    //   customElements.define('app-step', customElement);
    // }
  }
}
