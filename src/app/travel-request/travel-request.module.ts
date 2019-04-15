import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelRequestComponent } from './travel-request/travel-request.component';
import { TravelRequestService } from './travel-request/travel-request.service';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZTdf-Lg-xWDhjoBtKMBgbhBBXgy6icxs'
      }
    )
  ],
  declarations: [TravelRequestComponent],
  providers: [TravelRequestService]
})
export class TravelRequestModule { }
