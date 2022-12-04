import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddfavoriteComponent } from './component/addfavorite/addfavorite.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { HasfavoriteComponent } from './component/hasfavorite/hasfavorite.component';

const routes:Routes=[
  {path :"", component:WelcomeComponent},
  {path :"addfav", component:AddfavoriteComponent},
  {path :"hasFav", component:HasfavoriteComponent},

 ]

@NgModule({
  declarations: [
    AppComponent,
    AddfavoriteComponent,
    WelcomeComponent,
    HasfavoriteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
