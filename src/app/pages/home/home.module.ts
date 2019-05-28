import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home';
import { IonBottomDrawerModule } from '../../modules/ion-bottom-drawer/ion-bottom-drawer.module';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    IonicModule,
    IonBottomDrawerModule
  ],
  declarations: [
    HomePage
  ]
})
export class HomeModule { }
