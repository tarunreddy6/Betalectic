import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddfavoriteComponent } from './component/addfavorite/addfavorite.component';

@NgModule({
  declarations: [
    AppComponent,
    AddfavoriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
