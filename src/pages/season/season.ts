import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { SeasonProvider } from '../../providers/season/season';

@IonicPage()
@Component({
  selector: 'page-season',
  templateUrl: 'season.html'
})
export class SeasonPage {

  users: User[];

  columnDefs = [
    {headerName: 'Position', field: 'position' },
    {headerName: 'Name', field: 'name' },
    {headerName: 'Points', field: 'points'}
  ];
  
  constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private seasonProvider: SeasonProvider) {
  }

  ionViewDidLoad() {
    this.users = this.seasonProvider.getClasification();
  }

}
