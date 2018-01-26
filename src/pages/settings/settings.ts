import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Toggle  } from 'ionic-angular';
import { SettingsService } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private settingsService:SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  onToggle(toggle:Toggle){
    console.log(toggle)
    this.settingsService.setbackground(toggle.checked);
    
  }
  checkAltBackground(){
    return this.settingsService.isAltBackground();
  }
}
