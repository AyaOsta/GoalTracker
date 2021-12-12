import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, FormBuilder } from '@angular/forms';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StepsComponentComponent } from 'src/app/components/steps-component/steps-component.component';

import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [AppComponent, StepsComponentComponent],
  entryComponents: [StepsComponentComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, FormBuilder],
  bootstrap: [AppComponent],
})


export class AppModule {

  constructor(private injector: Injector) {
    //The customElements is used for defining a custom element globaly.
    const customElement = createCustomElement(StepsComponentComponent, { injector });
    //Defining a new element
    customElements.define('app-step', customElement);
  }
}
