import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite.component.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cool app';
  inputText;
  post = {
    title: 'Title',
    isFavorite: true
  };

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log('changed', eventArgs);
  }
}
