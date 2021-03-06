import { Component, OnInit } from '@angular/core';
import  { Proverbs } from '../proverbs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Proverbs[] = [
      new Proverbs('Martin Luther Jr', 'Social Activist', '“Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate, only love can do that.”', new Date(2000,9,9)),
      new Proverbs('Maya Angelou', 'Poet', '“I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”', new Date(2012,8,13)),
      new Proverbs('Lupita Nyongo', 'Actor', '"When I look down at this golden statue, may it remind me and every little child that no matter where you are from your dreams are valid."', new Date (2014,3,3)),
      new Proverbs('Mother Teressa', 'Nun','“It is easy to love the people far away. It is not always easy to love those close to us. It is easier to give a cup of rice to relieve hunger than to relieve the loneliness and pain of someone unloved in our own home. Bring love into your home for this is where our love for each other must start.”', new Date (1960,4,27) ),
    ]

    showauthor(index) {
      this.quotes[index].showauthor = !this.quotes[index].showauthor;
    }
    name : string
    title : string
    saying : string
    newQuote : any
  
    addAQuote(proverbs:any){
      this.newQuote=new Proverbs(this.name, this.title, this.saying, new Date())
      this.quotes.unshift(proverbs)
    }
  
  constructor() { }

   ngOnInit(): void {
  }

}
