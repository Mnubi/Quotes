import { Proverbs } from './../proverbs';
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  newQuote = new Proverbs("","","", new Date()) 

  @Output() addQuote = new EventEmitter<Proverbs>()
  postQuote(){
    this.addQuote.emit(this.newQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
