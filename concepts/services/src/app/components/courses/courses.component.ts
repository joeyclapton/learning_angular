import { Component } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass'],
  providers: [CoursesService]
})
export class CoursesComponent {
  courses: Array<string>;

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.getCursos();
  }
}
