/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('order')
export class OrderController {
  constructor(private readonly utilityService: UtilityService,
              private readonly globalHelperService: GlobalHelperService,
  ) {}

    @Get('/shared')
    orderShared() {
        return this.utilityService.sharedFunc();
    }

    @Get('/global')
    orderUseGlobal(): string {
      return this.globalHelperService.globalFunc();
    }
}
