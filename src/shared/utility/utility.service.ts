/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {

    sharedFunc(): string {
        return 'use utility shared module';
    }
}
