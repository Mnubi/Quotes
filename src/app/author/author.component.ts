import { Component, OnInit,Input } from '@angular/core';
import { Proverbs } from '../proverbs';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input() proverbs: Proverbs;

  constructor() { }

  ngOnInit(): void {
  }

}
