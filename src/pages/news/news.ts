import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, Loading, LoadingController, AlertController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { New } from '../../models/new';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  news: New[] = [];
  loading: Loading;
  newToCreate:New = new New('', new User('', ''));

  constructor(
          public navCtrl: NavController,
          public navParams: NavParams,
          private newsProvider: NewsProvider,
          private alertCtrl: AlertController,
          private loadingCtrl: LoadingController) {

    this.news = this.newsProvider.getData();
  }

  createNew() {
    this.showLoading();
    if (this.newToCreate.text.length>0){
      this.newsProvider.createNew(this.newToCreate.text).subscribe(newCreated => {
        if (newCreated) {        
          this.news.splice(0, 0, newCreated);
          this.newToCreate.text = '';
          this.loading.dismiss();
        } else {
          this.showError("Error Creating New");
        }
      },
        error => {
          this.showError(error);
        });
    } else {
      this.showError("Text empty!");
    }
  }

  doInfinite(infiniteScroll: InfiniteScroll) {
    this.newsProvider.getAsyncData().then((newData) => {
      for (var i = 0; i < newData.length; i++) {
        this.news.push( newData[i] );
      }

      infiniteScroll.complete();

      if (this.news.length > 90) {
        infiniteScroll.enable(false);
      }
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(alert);
  }
}
