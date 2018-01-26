import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Quote } from '../../data/Global';
import { AlertController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage  implements OnInit{

  quoteGroup:{category:string, quotes:Quote[], icon:String}[];
  
  constructor( private navParams: NavParams,  private alertCtrl:AlertController, private quotesService:QuotesService) {
  }
  ngOnInit(){
    this.quoteGroup = this.navParams.data;
    console.log(this.quoteGroup)
  }
  // ionViewDidLoad(){
    // this.quoteGroup = this.navParams.data;
    // console.log(this.quoteGroup)
    // add ? (elvis operator) in template to use this approach in {{quoteGroup?...}}
    // you can also use ngOnit method because it is used once everything has loaded
  // }
  addToFavorite(selectedQuote:Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle:'You sure you want to add to favorites?',
      // message:'Are you sure you want to add the quote?'
      buttons: [
        {
          text: 'Yes!',
          handler:()=>{
            // console.log("yeboo")
            this.quotesService.addQuoteToFavorite(selectedQuote)
          }
        },
        {
          text:'No!',
          role:'cancel',
          handler:()=>{
            console.log('Nadaa');
          }
        }
      ]
    });

    alert.present();
  }
  removeFromFavorites(quote:Quote){
    this.quotesService.removeQuoteFromFavorites(quote);
  }
  isFavorite(quote:Quote){
    return this.quotesService.isQuoteFavorite(quote);
  }

}
