import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InLibModule } from 'in-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppAHomePageComponent } from './components/app-a-home-page/app-a-home-page.component';
import { AppACatalogPageComponent } from './components/app-a-catalog-page/app-a-catalog-page.component';
import { AppACartPageComponent } from './components/app-a-cart-page/app-a-cart-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AppAHomePageComponent,
    AppACatalogPageComponent,
    AppACartPageComponent,

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
