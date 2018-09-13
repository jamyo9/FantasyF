import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Formation } from '../../models/formation';
import { TeamProvider } from '../../providers/team/team';

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html'
})
export class TeamPage {

  formationSelected: Formation;
  posibleFormations: Formation[];
  playersInTeam: Formation[];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private teamProvider: TeamProvider) {
    
    this.formationSelected = this.teamProvider.getSavedFormation();
    this.playersInTeam =  this.teamProvider.getPlayersInTeam();
  }

  ionViewDidLoad() {
    this.posibleFormations = this.teamProvider.getPosibleFormations();
  }

  changeFormation(formationValue) {
    this.formationSelected = this.teamProvider.changeFormation(formationValue);
  }
}
