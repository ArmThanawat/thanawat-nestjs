/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('user')
export class UserController {
    constructor(private readonly utilityService: UtilityService){}

    @Get('/shared')
    userShared() {
        return this.utilityService.sharedFunc();
    }
}
