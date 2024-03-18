import { Injectable } from '@nestjs/common';

export interface Student {
  id: number | string;
  name: string;
}

@Injectable()
export class AppService {
  mockStudents: Student[] = [
    { id: '1', name: 'abc' },
    { id: '2', name: 'def' },
    { id: '3', name: 'ghi' },
  ];

  findAll() {
    return this.mockStudents;
  }

  findOne(id: string) {
    return this.mockStudents.find((student) => student.id === id);
  }

  create(student: Student) {
    this.mockStudents = [...this.mockStudents, Object.assign({}, student)];
    return this.mockStudents;
  }

  update(id: string, student: Student) {
    this.mockStudents = this.mockStudents.map((w) =>
      w.id === id ? student : w
    );
    return this.mockStudents;
  }

  remove(id: string) {
    this.mockStudents = this.mockStudents.filter(
      (student) => student.id !== id
    );
    return this.mockStudents;
  }
}
