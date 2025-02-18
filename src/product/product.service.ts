/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  
  productJson() {
    return {
      name: 'Thanawat',
      age: 18,
      hobby: 'Play piano',
    };
  }
}
