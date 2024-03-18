import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface Student {
  id: number | string;
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  model = 'students';

  apiEndPoint = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  all(): Observable<Student[]> {
    return this.http.get<Student[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Student>(this.getUrlWithId(id));
  }

  create(student: Student) {
    return this.http.post(this.getUrl(), student);
  }

  update(student: Student) {
    return this.http.put(this.getUrlWithId(student.id), student);
  }

  delete(student: Student) {
    return this.http.delete(this.getUrlWithId(student.id));
  }

  private getUrl() {
    //localhost:3333/api/students
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id: any) {
    //localhost:3333/api/students/1
    return `${this.getUrl()}/${id}`;
  }
}
