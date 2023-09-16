import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarAdminComponent } from './features/star-admin/components/star-admin.component';
import { StoreModule } from '@ngrx/store';
import { StarAdminModule } from './features/star-admin/star-admin-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
