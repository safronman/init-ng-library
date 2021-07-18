import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppACartPageComponent } from '../../components/app-a-cart-page/app-a-cart-page.component';

const routes: Routes = [
  {path: '', component: AppACartPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
}
