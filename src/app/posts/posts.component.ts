import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;

  constructor(private service: PostsService) {}

  ngOnInit() {
    this.service.getPosts()
      .subscribe(json => {
        this.posts = json;
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(json => {
        post['id'] = json['id'];
        this.posts.splice(0, 0, post);
      });
  }

  updatePost(post) {
    let newTitle = 'updated!';
    this.service.updatePost(post, newTitle)
      .subscribe(json => {
        let i = this.posts.indexOf(post);
        this.posts[i].title = newTitle;
      });
  }

  delete(post) {
    this.service.deletePost(post)
      .subscribe(json => {
        let i = this.posts.indexOf(post);
        this.posts.splice(i, 1);
      });
  }

}
