import { Quote } from '../data/Global';

export class QuotesService{
    private favoriteQuotes : Quote[]=[]
    
    addQuoteToFavorite(quote:Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes)
    }
    removeQuoteFromFavorites(quote:Quote){
        const position = this.favoriteQuotes.findIndex((quoteEl:Quote)=>{
            return quoteEl.id == quote.id
        });
        this.favoriteQuotes.splice(position, 1); //remove element from array
    }
    getFavoriteQuotes(){
        return this.favoriteQuotes.slice();
    }
    isQuoteFavorite(quote:Quote){
        return this.favoriteQuotes.find((quoteEl:Quote)=>{
            return quoteEl.id == quote.id
            //return true or false if idmatches frombeing passed to the array
        })
    }
}