/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('order')
export class OrderController {
  constructor(private readonly utilityService: UtilityService
  ) {}

    @Get('/shared')
    orderShared() {
        return this.utilityService.sharedFunc();
    }
}
