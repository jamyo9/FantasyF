import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';

export const USER_VALUES = [
  {id: 1, name: 'Usuario 1', email: '',position: 9, points:10},
  {id: 2, name: 'Usuario 2', email: '',position: 8, points:20},
  {id: 3, name: 'Usuario 3', email: '',position: 7, points:30},
  {id: 4, name: 'Usuario 4', email: '',position: 6, points:40},
  {id: 5, name: 'Usuario 5', email: '',position: 5, points:50},
  {id: 6, name: 'Usuario 6', email: '',position: 4, points:60},
  {id: 7, name: 'Usuario 7', email: '',position: 3, points:70},
  {id: 8, name: 'Usuario 8', email: '',position: 2, points:80},
  {id: 9, name: 'Usuario 9', email: '',position: 1, points:90}
];

@Injectable()
export class SeasonProvider {

  constructor(public http: HttpClient) {
    
  }

  getClasification():User[] {
    USER_VALUES.sort(
      function(a,b) {
        return (a.points > b.points) ? -1 : ((b.points > a.points) ? 1 : 0);
      }
    );
    USER_VALUES.forEach((a, index) => {
      a.position = index+1;
    });
    return USER_VALUES;
  }


}
