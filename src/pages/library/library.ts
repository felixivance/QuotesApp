import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/Global'
import quotes from '../../data/data'
import { QuotesPage } from '../quotes/quotes';

@Component({ 
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quoteCollection:{category:string, quotes:Quote[], icon:String}[];
  quotesPage = QuotesPage;
  
  ngOnInit(){
    this.quoteCollection = quotes;
    console.log(this.quoteCollection)
  }
}
