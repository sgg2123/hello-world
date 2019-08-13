import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { FavoriteChangedEventArgs } from '../favorite/favorite.component';


@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "List of courses";
  courses = [];
  isActive = true;
  imageURL = 'https://www.manhassetschools.org/cms/lib/NY01913789/Centricity/Domain/18/academics%20books.jpg';
  email = '';
  course = {
    title: "Awesome course",
    rating: 4.994,
    students: 12345,
    price: 10000.00,
    releaseDate: new Date(2019, 7, 8)
  };
  text = 'here is a detailed description that is very very very very long';
  post = {
    title: 'Title',
    isFavorite: true
  };
  viewMode = 'other';

  // constructor(service: CoursesService) {
  //   this.courses = service.getCourses();
  // }

  ngOnInit() {
  }

  getTitle() {
    return this.title;
  }

  handleClick($event) {
    console.log('clicked!', $event);
  }

  onKeyUp() {
    console.log(this.email);
  }

  onAdd() {
    this.courses.push({ id: 4, name: "course 4" })
  }

  onRemove(course) {
    let i = this.courses.indexOf(course);
    this.courses.splice(i, 1);
  }

  loadCourses() {
    this.courses = CoursesService.getCourses();
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log('changed', eventArgs);
  }
}
