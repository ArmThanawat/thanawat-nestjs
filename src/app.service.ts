/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  setGalaxiasInfo(): any {
    return {
      name: 'Milky way',
      age: 1.361e10,
      type: 'Barred spiral galaxy',
      version: process.env.API_VERSION,
    }
  }
  
}