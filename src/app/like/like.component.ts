import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('likes-count') likesCount: number;
  @Input('is-active') isActive: boolean;

  onClick() {
    this.likesCount += (this.isActive) ? -1:1;
    this.isActive = !this.isActive;
  }

}
