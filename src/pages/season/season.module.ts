import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeasonPage } from './season';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    SeasonPage,
  ],
  imports: [
    AgGridModule.withComponents([]),
    IonicPageModule.forChild(SeasonPage)
  ],
})
export class SeasonPageModule {}
