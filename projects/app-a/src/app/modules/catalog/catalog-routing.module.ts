import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppACatalogPageComponent } from '../../components/app-a-catalog-page/app-a-catalog-page.component';

const routes: Routes = [
  {path: '', component: AppACatalogPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {
}
