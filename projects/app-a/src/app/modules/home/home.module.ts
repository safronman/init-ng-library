import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AppAHomePageComponent } from '../../components/app-a-home-page/app-a-home-page.component';


@NgModule({
  declarations: [AppAHomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
