import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/Global';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  
  quotes:Quote[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private quotesService:QuotesService, private modalCtrl:ModalController, 
  private settingsService:SettingsService) {
  }

  //executed even if page was cached and executed right before being displayed
   ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
    console.log(this.quotes)
  }
  viewQuote(quote:Quote){
    const modal = this.modalCtrl.create(QuotePage, quote); //pass data
    modal.present();
    // when the modal dismisses listen for the change of value of remove if true or false
    modal.onDidDismiss((remove:boolean)=>{
      if(remove){
        this.removeFromFavorites(quote);
      }      
    });    
  }
  removeFromFavorites(quote:Quote){
    this.quotesService.removeQuoteFromFavorites(quote);
    //enable refresh
    // this.quotes = this.quotesService.getFavoriteQuotes(); 
    const position = this.quotes.findIndex((quoteEl:Quote)=>{
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1)
  }
 getBackground(){
  return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
 }
}
