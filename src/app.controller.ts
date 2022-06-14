import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

interface infoType {
  desc: string;
  isAction: boolean;
}
interface tagsType {
  name: string;
  value: number;
}

interface dody {
  userId: number;
  id: number;
  title: string;
  info: infoType;
  tags: tagsType;
}
