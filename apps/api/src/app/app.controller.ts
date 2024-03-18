import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { AppService, Student } from './app.service';

@Controller('students')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() student) {
    return this.appService.create(student);
  }

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() student: Student) {
    return this.appService.update(id, student);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(id);
  }
}
