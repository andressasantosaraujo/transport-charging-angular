import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricComponent } from './historic/historic.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HistoricComponent
  ],
  declarations: [HistoricComponent]
})
export class HistoricModule { }
