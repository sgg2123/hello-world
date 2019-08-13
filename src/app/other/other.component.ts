import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  inputText;
  task = {
    title: 'Review applications',
    asignee: null
  }
  
  constructor() { }

  ngOnInit() {
  }

}
