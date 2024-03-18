import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService, Student } from './crud.service';

@Component({
  selector: 'crud-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  students$: Observable<Student[]>;
  student1$: Observable<Student>;
  constructor(private crud: CrudService) {}

  ngOnInit(): void {
    this.students$ = this.crud.all();
    this.students$.subscribe(console.log);

    this.student1$ = this.crud.find('1');
  }
  createStudent(){
    // this.crud.create(this.form.value)
  }
}
