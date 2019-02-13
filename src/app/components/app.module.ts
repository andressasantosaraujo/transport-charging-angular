import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TransportChargingModule } from '../transport-charging/transport-charging.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app-route';
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { TravelRequestModule } from '../travel-request/travel-request.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TransportChargingModule,
    RouterModule.forRoot(ROUTES),
    LoginModule,
    RegisterModule,
    TravelRequestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
