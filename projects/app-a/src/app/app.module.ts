import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InLibModule } from 'in-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
