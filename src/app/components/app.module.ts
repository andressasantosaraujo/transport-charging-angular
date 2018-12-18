import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TransportChargingModule } from '../transport-charging/transport-charging.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TransportChargingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
