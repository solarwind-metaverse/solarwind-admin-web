import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import routeConfig from './routes';

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
