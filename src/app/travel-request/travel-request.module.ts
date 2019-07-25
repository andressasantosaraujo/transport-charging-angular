import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelRequestComponent } from './travel-request/travel-request.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { TravelRequestService } from './travel-request/travel-request.service';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
      }
    )
  ],
  declarations: [TravelRequestComponent],
  providers: [TravelRequestService]
})
export class TravelRequestModule { }
