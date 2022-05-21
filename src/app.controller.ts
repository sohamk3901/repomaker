import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  root() {
    return { title: 'Authorization Page' };
  }

  @Get('/createrepo')
  @Render('createrepo')
  about() {
    return { title: 'Create Repo' };
  }
}
