import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post, newTitle) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ title: newTitle }));
  }

  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id);
  }
}
