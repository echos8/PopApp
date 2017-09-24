import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
@Component({
  selector: 'page-about',
  templateUrl:  'about.html'
})

export class AboutPage {

  userDetails : any;
  responseData : any;
  dataSet : any;
  userPostData = {"user_id": "","token": ""};

  constructor(public navCtrl : NavController, public authService : AuthService) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.getFeed();
  }

  getFeed() {
    this.authService.postData(this.userPostData, 'feed')
      .then((result) => {
        this.responseData = result;
        if (this.responseData.feedData) {
          this.dataSet = this.responseData.feedData;
        } else {}
      }, (err) => {

      });
  }

  convertTime(created) {
    let date = new Date(created * 1000);
    return date;
  }

  backToWelcome(){
    this.navCtrl.popToRoot();
  }

  logout(){
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }

}
