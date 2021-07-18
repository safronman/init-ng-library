import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { AppACatalogPageComponent } from '../../components/app-a-catalog-page/app-a-catalog-page.component';


@NgModule({
  declarations: [AppACatalogPageComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule {
}
