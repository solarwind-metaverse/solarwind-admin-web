import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipAdminComponent } from './components/ship-admin.component';

@NgModule({
  imports: [
    CommonModule,
    ShipAdminComponent
  ],
  exports: [
    ShipAdminComponent
  ]
})


export class ShipAdminModule { }