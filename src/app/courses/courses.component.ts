import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "List of courses";
  courses;
  isActive = true;
  imageURL = 'https://www.manhassetschools.org/cms/lib/NY01913789/Centricity/Domain/18/academics%20books.jpg';
  email = '';

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

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
}
