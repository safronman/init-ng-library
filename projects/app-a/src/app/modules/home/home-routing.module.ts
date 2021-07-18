import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAHomePageComponent } from '../../components/app-a-home-page/app-a-home-page.component';

const routes: Routes = [
  {path: '', component: AppAHomePageComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
