import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/showin')
  showInfo(): string {
    return this.appService.showInfo();
  }

  @Get('/myJson')
  getJson(): { name:string, lastname:string, age:number} {
    return this.appService.getJson();
  }
}
