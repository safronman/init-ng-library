import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InLibComponent } from './in-lib.component';
import { InAComponent } from './components/in-a/in-a.component';
import { InBComponent } from './components/in-b/in-b.component';
import { InCComponent } from './components/in-c/in-c.component';


@NgModule({
  declarations: [
    InLibComponent,
    InAComponent,
    InBComponent,
    InCComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InLibComponent,
    InAComponent,
    InBComponent,
    InCComponent
  ]
})
export class InLibModule {
}
