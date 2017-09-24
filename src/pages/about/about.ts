import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public app: App) {

  }

  logout(){
    // Remove API token
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}
