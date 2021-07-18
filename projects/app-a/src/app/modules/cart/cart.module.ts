import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { AppACartPageComponent } from '../../components/app-a-cart-page/app-a-cart-page.component';


@NgModule({
  declarations: [AppACartPageComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule {
}
