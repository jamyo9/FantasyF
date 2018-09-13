import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AgGridModule } from 'ag-grid-angular';

import { MyApp } from './app.component';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { PlayerProvider } from '../providers/player/player';
import { NewsProvider } from '../providers/news/news';
import { SeasonProvider } from '../providers/season/season';
import { TeamProvider } from '../providers/team/team';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ComponentsModule,
    AgGridModule.withComponents([]),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    PlayerProvider,
    NewsProvider,
    SeasonProvider,
    TeamProvider
  ]
})
export class AppModule {}
