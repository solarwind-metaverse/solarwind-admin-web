import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { starAdminReducer } from './star-admin.reducer';
import { StarAdminComponent } from './components/star-admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    StarAdminComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    StoreModule.forRoot({ 
      starAdmin: starAdminReducer
    })
  ]
})


export class StarAdminModule { }