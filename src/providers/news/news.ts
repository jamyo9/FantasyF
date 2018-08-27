import { Injectable } from '@angular/core';
import { New } from '../../models/new';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsProvider {

  createNew(text: string) {
    return Observable.create(observer => {
      let newCreated: New  = new New(text, new User('Test', 'test@test.com'));
      observer.next(newCreated);
      observer.complete();
    });
  }

  getData(): any[] {
    // return mock data synchronously
    let data: any[] = [];
    for (var i = 0; i < 10; i++) {
      data.push( this._getRandomData() );
    }
    return data;
  }

  getAsyncData(): Promise<any[]> {
    // async receive mock data
    return new Promise(resolve => {

      setTimeout(() => {
        resolve(this.getData());
      }, 1000);

    });
  }

  private _getRandomData() {
    let i = Math.floor( Math.random() * this.NEWS.length );
    return this.NEWS[i];
  }

  private NEWS:New[] = [
    {id:0, text:'Fast Times at Ridgemont High', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Peggy Sue Got Married', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Raising Arizona', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Moonstruck', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Fire Birds', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Honeymoon in Vegas', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Amos & Andrew', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'It Could Happen to You', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Trapped in Paradise', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Leaving Las Vegas', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'The Rock', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Con Air', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Face/Off', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'City of Angels', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Gone in Sixty Seconds', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'The Family Man', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Windtalkers', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Matchstick Men', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'National Treasure', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Ghost Rider', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Grindhouse', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Next', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Kick-Ass', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
    {id:0, text:'Drive Angry', writter: new User('Juan', 'juan@juan.com'), date: new Date()},
  ];

}
