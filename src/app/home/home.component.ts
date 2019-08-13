import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'cool app';
  tweet = {
    body: 'here is the body of a tweet',
    isActive: true,
    likesCount: 10
  };

  constructor() { }

  ngOnInit() {
  }

}
