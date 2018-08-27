import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, Loading, LoadingController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'News', pageName: 'NewsPage', tabComponent: 'NewsPage', index: 0, icon: 'book' },
    { title: 'Market', pageName: 'TabsPage', tabComponent: 'MarketPage', index: 1, icon: 'cart' },
    { title: 'Team', pageName: 'TabsPage', tabComponent: 'TeamPage', index: 2, icon: 'contacts' },
    { title: 'Season', pageName: 'TabsPage', tabComponent: 'SeasonPage', index: 0, icon: 'trophy' },
    { title: 'Settings', pageName: 'SettingsPage', icon: 'settings' },
  ];

  loading: Loading;
  
  constructor(
          public navCtrl: NavController, 
          public navParams: NavParams, 
          private auth: AuthServiceProvider, 
          private alertCtrl: AlertController, 
          private loadingCtrl: LoadingController) {
  }

  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SettingsPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  closeSession() {
    this.showLoading()
    this.auth.logout().subscribe(allowed => {
      if (allowed) {        
        this.navCtrl.setRoot('LoginPage');
      } else {
        this.showError("Error Clossing Session");
      }
    },
      error => {
        this.showError(error);
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
