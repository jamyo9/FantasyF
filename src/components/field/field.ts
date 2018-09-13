import { Component, Input } from '@angular/core';
import { Player } from '../../models/player';
import { TeamProvider } from '../../providers/team/team';

@Component({
  selector: 'field',
  templateUrl: 'field.html'
})
export class FieldComponent {

  @Input() formation: string;

  keeper: Player;
  defenders: Array<Player> = [];
  midfielders: Array<Player> = [];
  attackers: Array<Player> = [];

  constructor(
      private teamProvider: TeamProvider
    ) {
    
  }

  ngOnChanges() {
    this.keeper = this.getAlignedPlayersByPosition(1, 'KE')[0];
    this.defenders = this.getAlignedPlayersByPosition(parseInt(this.formation[0]), 'DF');
    this.midfielders = this.getAlignedPlayersByPosition(parseInt(this.formation[1]), 'MF');
    this.attackers = this.getAlignedPlayersByPosition(parseInt(this.formation[2]), 'AT');
  }

  getAlignedPlayersByPosition(numPlayers: number, position: string): Array<Player> {
    return this.teamProvider.getAlignedPlayersByPosition(numPlayers, position);
  }

}
