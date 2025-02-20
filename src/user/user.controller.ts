/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('user')
export class UserController {
    constructor(private readonly utilityService: UtilityService,
                private readonly globalHelperService: GlobalHelperService,
    ){}

    @Get('/shared')
    userShared() {
        return this.utilityService.sharedFunc();
    }

    @Get('/global')
    userUseGlobal(): string {
        return this.globalHelperService.globalFunc();
    }
}
