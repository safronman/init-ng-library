import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InA1Module } from 'in-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InA1Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
