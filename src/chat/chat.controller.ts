/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('chat')
export class ChatController {
    constructor(private readonly utilityService: UtilityService
    ) {}

    @Get('/shared')
    chatShared() {
        return this.utilityService.sharedFunc();
    }
}
