import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Player } from '../../models/player';
import { PlayerProvider } from '../../providers/player/player';



@IonicPage()
@Component({
  selector: 'page-market',
  templateUrl: 'market.html',
})
export class MarketPage {
  
  marketTabs: string = "market";

  playersInMarket: Player[];
  myBids: Player[];
  offers: Player[];

  constructor(
        public navCtrl: NavController,
        public navParams: NavParams, 
        private alertCtrl: AlertController,
        private playerProvider: PlayerProvider) {
    
  }

  ionViewDidLoad() {
    this.playersInMarket = this.playerProvider.getPlayersInMarket();
    this.myBids = this.playerProvider.getPlayersInMarket();
    this.offers = this.playerProvider.getPlayersInMarket();
  }

  openPlayerDetails(playerId:number){
    console.log("Open Player Details:" + playerId);
    this.navCtrl.push('PlayerDetailsPage');
  }

  openBid(playerId: number, ev) {
    ev.stopPropagation();
    console.log("Open Bid!!!" + playerId);

    let player:Player = this.playerProvider.getPlayer(playerId);    
    let alert = this.alertCtrl.create({
      title: 'Bid',
      inputs: [
        {
          name: 'bid',
          placeholder: 'bid',
          type: 'number',
          value: 'player.marketValue'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel bid!!!');
          }
        },
        {
          text: 'Place',
          handler: data => {
            console.log("Place Bid!!!");
          }
        }
      ]
    });
    alert.present();
  }

  cancelBid(ev) {
    ev.stopPropagation();
    console.log("Cancel Bid!!!");
  }

  acceptOffer(ev) {
    ev.stopPropagation();
    console.log("Accept Offer!!!");
  }

  rejectOffer(ev) {
    ev.stopPropagation();
    console.log("Reject Offer!!!");
  }
}
