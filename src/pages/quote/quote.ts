import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';


@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage { 
  person:string;
  text:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl:ViewController) {
    //viewcontroller controls currently active page
    //get data from favorite page

  }
  //when page was created
  ionViewDidLoad(){
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }
  onClose(remove=false){
    // getting rid of overlay
    this.viewCtrl.dismiss(remove);
  }
 
}
