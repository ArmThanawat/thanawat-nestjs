/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

    productFunc1(): string {
        return 'Hello from product service 1';
    }

    productFunc2(): string {
        return 'Hello from product service 2';
    }
}