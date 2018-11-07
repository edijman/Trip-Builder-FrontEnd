import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TripService} from './services/trip.service'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
