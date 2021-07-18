import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InLibModule } from 'in-lib';

import { HomeRoutingModule } from './home-routing.module';
import { AppAHomePageComponent } from '../../components/app-a-home-page/app-a-home-page.component';


@NgModule({
  declarations: [AppAHomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InLibModule
  ]
})
export class HomeModule {
}
