import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;
  @Output('click-favorite') clickFavorite = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleStar() {
    this.isFavorite = !this.isFavorite;
    this.clickFavorite.emit({ newValue: this.isFavorite });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
