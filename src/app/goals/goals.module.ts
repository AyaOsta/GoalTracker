import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalsPageRoutingModule } from './goals-routing.module';

import { GoalsPage } from './goals.page';
import { StepsComponentComponent } from 'src/app/components/steps-component/steps-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalsPageRoutingModule
  ],
  declarations: [GoalsPage,
    StepsComponentComponent]
})
export class GoalsPageModule { }
