import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'catalog', loadChildren: () => import('./modules/catalog/catalog.module').then(m => m.CatalogModule)},
  {path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
