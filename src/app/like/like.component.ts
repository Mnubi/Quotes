import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  numberofLikes : number;
  numberOfDislike: number;

  constructor() { }

  ngOnInit(): void {
  }

}