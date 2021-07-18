import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppAHomePageComponent } from './components/app-a-home-page/app-a-home-page.component';
import { AppACatalogPageComponent } from './components/app-a-catalog-page/app-a-catalog-page.component';
import { AppACartPageComponent } from './components/app-a-cart-page/app-a-cart-page.component';

const routes: Routes = [
  {path: '', component: AppAHomePageComponent, pathMatch: 'full'},
  {path: 'catalog', component: AppACatalogPageComponent},
  {path: 'cart', component: AppACartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
