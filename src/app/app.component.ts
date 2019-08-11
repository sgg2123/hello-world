import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

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
  tweet = {
    body: 'here is the body of a tweet',
    isActive: true,
    likesCount: 10
  };
  viewMode = 'other';
  canSave = true;
  task = {
    title: 'Review applications',
    asignee: null
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log('changed', eventArgs);
  }
}
