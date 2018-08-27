import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { Player } from '../../models/player';

const PLAYERS_DATA: Player[] = [
  {id: 1, position: 'PO', name: 'Hydrogen', team: 'RSG', points: 179, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'OK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 2, position: 'DF', name: 'Helium', team: 'RM', points: 426, marketValue: 29700, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'NOK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 3, position: 'DF', name: 'Lithium', team: 'FCB', points: 641, marketValue: 197000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'NOK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 5, position: 'DF', name: 'Beryllium', team: 'RSG', points: 922, marketValue: 129000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'OK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 4, position: 'DF', name: 'Boron', team: 'RM', points: 111, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'KO', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 6, position: 'MD', name: 'Carbon', team: 'FCB', points: 107, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'OK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 7, position: 'MD', name: 'Nitrogen', team: 'RSG', points: 147, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'NOK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 8, position: 'MD', name: 'Oxygen', team: 'RM', points: 154, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'KO', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 9, position: 'MD', name: 'Fluorine', team: 'FCB', points: 184, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'NOK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 10, position: 'DL', name: 'Neon', team: 'RSG', points: 297, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'OK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 11, position: 'DL', name: 'Neon', team: 'RM', points: 297, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'KO', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  {id: 12, position: 'DL', name: 'Neon', team: 'FCB', points: 297, marketValue: 297000, price: 3000000, qualification:[6, 2, 0, -3, 10], owner: 'Free', status: 'OK', imgUrl:'https://material.angular.io/assets/img/examples/shiba1.jpg'}
];

export const PLAYER_VALUES = [
  {id: 1, playerId: 1, value: 11000000, date: '30072018'},
  {id: 2, playerId: 1, value: 900000, date: '31072018'},
  {id: 3, playerId: 1, value: 800000, date: '01082018'},
  {id: 4, playerId: 1, value: 8500000, date: '02082018'},
  {id: 5, playerId: 1, value: 9000000, date: '03082018'},
  {id: 6, playerId: 1, value: 9500000, date: '04082018'},
  {id: 7, playerId: 1, value: 9550000, date: '05082018'},
  {id: 8, playerId: 1, value: 11000000, date: '06082018'},
  {id: 9, playerId: 1, value: 11500000, date: '07082018'},
  {id: 10, playerId: 1, value: 5900000, date: '08082018'}
];

@Injectable()
export class PlayerProvider {

  constructor(public http: HttpClient) {
    
  }

  getPlayerValuesHistory(playerId: number) {
    let valuesRet = undefined;
    if (playerId) {
      const values = _.values(PLAYER_VALUES);
      valuesRet = _.find(values, value => value.playerId === playerId);
    }
    return valuesRet;
    //return PLAYER_VALUES;

    //let params = new HttpParams().set('playerId', playerId.toString());
    //return this.http.get<Player>('/api/player/values', { params: params }).pipe(
    //    shareReplay(),
    //    tap(player => this.subject.onNext(player)),);
  }

  getPlayersInMarket() {
    return PLAYERS_DATA;
  }

  getPlayer(playerId: number ):Player {
    let player = undefined;
    if (playerId) {
      const players = _.values(PLAYERS_DATA);
      player = _.find(players, player => player.id === playerId);
    }
    return player;  
    //return this.http.get<Player>('/api/player/' + playerId);
  }
}
