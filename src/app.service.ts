import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  showInfo(): string {
    return 'I am Thanawat 18year old';
  }

  getJson(): { name:string, lastname:string, age:number} {
    return { 
      name: 'Bhuddha',
      lastname: 'Christ',
      age: 20,
    };
  }

  getGit(): string {
    return 'Git and GitHub using.';
  }

}
