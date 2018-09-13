import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../../models/formation';
import { Player } from '../../models/player';

export const POSIBLE_FORMATIONS = [
  {value: '532', text: '5-3-2'},
  {value: '451', text: '4-5-1'},
  {value: '533', text: '3-5-2'},
  {value: '343', text: '3-4-3'},
  {value: '442', text: '4-4-2'}
];

const PLAYERS_DATA: Player[] = [
  {id: 1, position: 'KE', name: 'Hydrogen', team: 'RSG', points: 179, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'OK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 2, position: 'DF', name: 'Helium', team: 'RM', points: 426, marketValue: 29700, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'NOK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 3, position: 'DF', name: 'Lithium', team: 'FCB', points: 641, marketValue: 197000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'NOK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 4, position: 'DF', name: 'Boron', team: 'RM', points: 111, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'KO', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 5, position: 'DF', name: 'Beryllium', team: 'RSG', points: 922, marketValue: 129000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'OK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 6, position: 'MF', name: 'Carbon', team: 'FCB', points: 107, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'OK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 7, position: 'MF', name: 'Nitrogen', team: 'RSG', points: 147, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'NOK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 8, position: 'MF', name: 'Oxygen', team: 'RM', points: 154, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'KO', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 9, position: 'MF', name: 'Fluorine', team: 'FCB', points: 184, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'NOK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 10, position: 'AT', name: 'Neon', team: 'RSG', points: 297, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'OK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 11, position: 'AT', name: 'Neon', team: 'RM', points: 297, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'KO', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 12, position: 'AT', name: 'Neon', team: 'FCB', points: 297, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'OK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 13, position: 'MF', name: 'Neon', team: 'FCB', points: 297, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'OK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 14, position: 'DF', name: 'Neon', team: 'FCB', points: 297, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'OK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 15, position: 'KE', name: 'Neon', team: 'FCB', points: 297, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'OK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'}
];

@Injectable()
export class TeamProvider {
    
  constructor(public http: HttpClient) {

  }

  getPosibleFormations():Formation[] {
    return POSIBLE_FORMATIONS;
  }

  getSavedFormation(): Formation {
    return new Formation("343", this.printFormation("3-4-3"));
  }

  getPlayersInTeam(): any[] {
    var ret = PLAYERS_DATA.sort(
      function(a,b) {
        return (a.position > b.position) ? -1 : ((b.position > a.position) ? 1 : 0);
      }
    );
    return ret;
  }

  changeFormation(value: string): Formation {
    return  new Formation(value, this.printFormation(value));
  }

  getAlignedPlayersByPosition(numPlayers: number, position: string): Player[] {
    
    var ret:Player[] = PLAYERS_DATA.filter(
      function(player) {
        return player.position == position;
      });
    
    if (ret.length > numPlayers) {
      ret = ret.slice(0, numPlayers);
    }
    return ret;
  }

  printFormation(value: string): string {
    var ret = '';
    for (var i = 0; i < value.length-1; i++) {
      ret += value[i] + "-";
    }
    return ret += value[value.length];
  }
}
