import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TripService} from './services/trip.service'
import { AppComponent } from './app.component';
import {MaterialModule} from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    MaterialModule, BrowserAnimationsModule
  ],
  providers: [TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }